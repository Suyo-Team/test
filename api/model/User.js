const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.set('toJSON', {
  transform: (doc, obj) => {
    const {
      _id: id,
      __v,
      password,
      ...rest
    } = obj;
    return { ...rest, id };
  },
});

userSchema.plugin(uniqueValidator);

module.exports = model('User', userSchema);
