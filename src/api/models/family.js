const mongoose = require('mongoose');

const familySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    instruments: [{ type: mongoose.Types.ObjectId, ref: "instruments", required: false }]
  },
  {
    timestamps: true,
    collection: "families",
  }
);
const Family = mongoose.model("families", familySchema, "families");
module.exports = Family;