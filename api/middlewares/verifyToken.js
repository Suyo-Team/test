const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authorization = req.get('authorization');
  if (!(authorization && authorization.toLocaleLowerCase().startsWith('bearer'))) {
    return res.status(401).json({
      error: 'Necesitas un token para realizar esta acción.',
    });
    // return;
  }

  const token = authorization.substr(7);
  try {
    const { username, email } = jwt.verify(token, process.env.SECRET_SEED);
    req.user = { username, email };
  } catch (err) {
    next(err);
  }

  next();
};

module.exports = verifyToken;
