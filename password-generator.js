const generatePassword = require('generate-password');

function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
   
  });

  console.log('Generated Password:', password);
}

// Appel de la fonction pour générer et afficher un mot de passe aléatoire
generateRandomPassword();