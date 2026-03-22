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
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        message,
        subject: "New Contact Form Submission",
        from_name: "Portfolio Backend"
      })
    });

    const data = await response.json();
    return res.status(response.status).json(data);

  } catch (error) {
    console.error('Backend Exception:', error);
    return res.status(500).json({ 
      success: false, 
      message: `Internal Server Error: ${error.message}`
    });
  }
}
