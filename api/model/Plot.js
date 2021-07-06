const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const plotSchema = new Schema({
  owner: { type: String, required: true },
  address: { type: String, required: true },
  coords: { type: String },
});

plotSchema.set('toJSON', {
  transform: (doc, obj) => {
    const {
      _id: id,
      __v,
      coords,
      ...rest
    } = obj;
    return { ...rest, id, coords: JSON.parse(coords) };
  },
});

plotSchema.plugin(uniqueValidator);

module.exports = model('Plot', plotSchema);
