export default async function handler(req, res) {
  // Only allow POST requests for security
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Vercel handles JSON parsing automatically when headers are set
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, email, and message are all required.'
      });
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error('CRITICAL: WEB3FORMS_ACCESS_KEY is not defined in Vercel settings.');
      return res.status(500).json({
        success: false,
        message: 'Backend Configuration Error: API Key missing in environment variables.'
      });
    }

    // Attempting the post to Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Vercel-Serverless-Backend' // Some servers block requests without a User-Agent
      },
      body: JSON.stringify({
        access_key: accessKey.trim(),
        name: safeName,
        email: safeEmail,
        message: safeMessage,
        subject: `New Portfolio Message from ${safeName}`,
        from_name: "LK Portfolio"
      })
    });

    const contentType = response.headers.get('content-type');

    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();

      // If Web3Forms returns a 403, it often means the email isn't verified
      if (response.status === 403) {
        return res.status(403).json({
          success: false,
          message: "Error 403: Please verify your email at Web3Forms.com or check your Access Key."
        });
      }

      return res.status(response.status).json(data);
    } else {
      const text = await response.text();
      console.error('Web3Forms non-JSON response:', text);
      return res.status(response.status).json({
        success: false,
        message: `Error (${response.status}): Web3Forms rejected the request. Please check your account.`
      });
    }

  } catch (error) {
    console.error('Backend Exception:', error);
    return res.status(500).json({
      success: false,
      message: `Internal Server Error: ${error.message}`
    });
  }
}
