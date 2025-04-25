const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {
  sendEmail: async (to, subject, text) => {
    const msg = {
      to,
      from: 'reservations@driverpro-chauffeur.site',
      subject,
      text,
      html: `<p>${text.replace(/\n/g, '<br>')}</p>`
    };
    return sgMail.send(msg);
  }
};