export default async function handler(req, res) {
  // Only allow POST requests for security
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { name, email, message } = req.body;
    
    // Securely access the API key from Vercel Environment Variables
    // The browser and public NEVER see this key!
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      return res.status(500).json({ message: 'Server configuration error: Missing API Key in .env' });
    }

    // Forward the request to Web3Forms secretly from the backend
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: name,
        email: email,
        message: message,
        subject: "New Contact Form Submission - Likith Kumar Portfolio",
        from_name: "LK Portfolio Backend"
      })
    });

    const result = await response.json();

    if (response.status === 200) {
      return res.status(200).json(result);
    } else {
      return res.status(response.status).json(result);
    }
  } catch (error) {
    console.error('Secure Backend Error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
