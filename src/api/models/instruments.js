const mongoose = require('mongoose');

const instrumentSchema = new mongoose.Schema(
  {
    trademark: { type: String, required: true },
    deliveryYear: { type: Number, required: true },
    model: { type: String, required: true },
    seller: { type: String, required: true },
  },
  {
    timestamps: true,

    collection: 'instruments',
  }
);

const Instrument = mongoose.model("instruments", instrumentSchema, "instruments");
module.exports = Instrument;