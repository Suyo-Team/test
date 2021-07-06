const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const User = require('../model/User');
const generateToken = require('../helpers/tokenGenerator');

const getAll = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.json({ users });
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const { username, password, email } = req.body;
    const handleError = validationResult(req);

    if (!handleError.isEmpty()) {
      const errors = handleError.array().map((err) => err.msg);
      res.status(400).json({ errors });
      return;
    }
    const saltRounds = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new User({
      username,
      password: passwordHash,
      email,
    });

    const createdUser = await user.save();
    const payload = { username, email };
    const token = await generateToken(payload);
    res.status(201).json({
      ...createdUser.toJSON(),
      token,
    });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.findOne({ username }) || await User.findOne({ email });
    const validPassword = user !== null && await bcrypt.compare(password, user.password);
    if (!user || !validPassword) {
      res.status(401).json({
        error: 'Usuario o contraseña incorrectos.',
      });
      return;
    }

    const payload = {
      username: username || user.username,
      email: email || user.email,
    };
    const token = await generateToken(payload);
    res.json({
      ...payload,
      id: user.id,
      token,
    });
  } catch (err) {
    next(err);
  }
};

const changePassword = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { password } = req.body;
    const saltRounds = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const updatedUser = await User.findByIdAndUpdate(id, { password: passwordHash }, { new: true });
    res.json({ updatedUser });
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  create,
  login,
  changePassword,
  remove,
};
