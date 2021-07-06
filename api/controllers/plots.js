const Plot = require('../model/Plot');

const getAll = async (req, res, next) => {
  try {
    const plots = await Plot.find({});
    res.json({ plots });
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const { owner, address, coords } = req.body;
    const plot = new Plot({
      owner,
      address,
      coords: JSON.stringify(coords),
    });

    const createdPlot = await plot.save();
    res.status(201).json({ createdPlot });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { owner, address, coords: cd } = req.body;
    const coords = JSON.stringify(cd);

    const updatedPlot = await Plot.findByIdAndUpdate(id, {
      owner, address, coords,
    }, { new: true });
    res.json({ updatedPlot });
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Plot.findByIdAndRemove(id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  create,
  update,
  remove,
};
