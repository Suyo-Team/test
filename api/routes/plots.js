const { Router } = require('express');

const verifyToken = require('../middlewares/verifyToken');

const { getAll, create, update, remove } = require('../controllers/plots');

const rt = Router();

rt.use(verifyToken);

rt.get('/', getAll);
rt.post('/', create);
rt.put('/:id', update);
rt.delete('/:id', remove);

module.exports = rt;
