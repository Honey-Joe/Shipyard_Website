const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema(
  {
    name: String,
    category: String,
    quantity: { amount: Number, unit: String },
    value: { currency: String, amount: Number },
    condition: String,
    warehouseLocation: String,
    images: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Stock", stockSchema);
