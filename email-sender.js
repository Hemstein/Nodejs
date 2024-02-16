const nodemailer = require('nodemailer');

// Configurer le transporteur
const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'Haythem_benJemaa@hotmail.de',
    pass: '*****',
  },
});

// Options du message
const mailOptions = {
  from: 'Haythem_benJemaa@hotmail.de',
  to: 'hem.haythem@gmail.com',
  subject: 'hello ',
  text: 'good morning',
};

// Envoyer l'e-mail
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log('E-mail envoyé: ' + info.response);
  }
});