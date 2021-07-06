const jwt = require('jsonwebtoken');

const generateToken = (payload) => new Promise((resolve, reject) => {
  jwt.sign(payload, process.env.SECRET_SEED, { expiresIn: '1d' }, (err, token) => {
    if (err) {
      reject(new Error('No se pudo generar el token.'));
    }
    resolve(token);
  });
});

module.exports = generateToken;
