const sendgrid = require('../lib/sendgrid');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { to, subject, text } = req.body;
    await sendgrid.sendEmail(to, subject, text);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
