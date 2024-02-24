const Instrument = require('../models/instruments');

// Create

const postInstruments = async (req, res, next) => {
  try {
    const newInstruments = new Instrument(req.body);

    const instrumentSaved = await newInstruments.save();

    return res.status(201).json(instrumentSaved);
  } catch (error) {
    return res.status(400).json('The petition has failed');
  }
};

// Get all
const getInstruments = async (req, res, next) => {
  try {
    const oneInstrument = await Instrument.find();

    return res.status(200).json(oneInstrument);
  } catch (error) {
    return res.status(400).json('The petition has failed');
  }
};

// Get one by ID
const getInstrumentByID = async (req, res, next) => {
  const getInsById = req.params.id;
  try {
    const instrumentGettedByID = await Instrument.findById(getInsById);

    return res.status(200).json(instrumentGettedByID);
  } catch (error) {
    return res.status(500).json('The petition has failed');
  }
};

// Get one by Trademark
const getInstrumentByTrademark = async (req, res, next) => {
  const trademark = req.params.trademark;
  try {
    const instrumentGettedByTrademark = await Instrument.find({
      trademark: trademark,
    });

    return res.status(200).json(instrumentGettedByTrademark);
  } catch (error) {
    return res.status(500).json('The petition has failed');
  }
};

// Get one and modify 
const getandModifyInstrument = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newInstrument = new Instrument(req.body);
    newInstrument._id = id;

    const instrumentUpdated = await Instrument.findByIdAndUpdate(
      id,
      newInstrument,
      { new: true }
    );
    return res.status(200).json(instrumentUpdated);
  } catch (error) {
    return res.status(400).json('The petition has failed');
  }
};

// Delete one
const deleteInstrument = async (req, res, next) => {
  try {
    const { id } = req.params;
    const instrumentDeleted = await Instrument.findByIdAndDelete(id);

    return res.status(200).json(instrumentDeleted);
  } catch (error) {
    return res.status(400).json('The petition has failed');
  }
};

module.exports = {
  postInstruments,
  getInstruments,
  getInstrumentByID,
  getandModifyInstrument,
  deleteInstrument,
  getInstrumentByTrademark,
};