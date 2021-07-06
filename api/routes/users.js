const { Router } = require('express');
const { check } = require('express-validator');

// Middlewares
const verifyToken = require('../middlewares/verifyToken');
// Controller
const {
  getAll, create, login, changePassword, remove,
} = require('../controllers/users');

const rt = Router();

rt.get('/', verifyToken, getAll);
rt.post('/', [
  check('username')
    .notEmpty()
    .withMessage('El nombre de usuario no puede estar vacio.'),
  check('email')
    .notEmpty()
    .withMessage('El email no puede estar vacio.')
    .isEmail()
    .withMessage('El email no es válido.'),
], create);
rt.post('/login', login);
rt.patch('/:id', verifyToken, changePassword);
rt.delete('/:id', verifyToken, remove);

module.exports = rt;
