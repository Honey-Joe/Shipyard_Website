const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, enum: ["Ship Building", "Ship Repair", "Marine Engineering", "Financials", "Facilities"], required: true },
    image: { type: String }, // URL for service image
    formFields: [{ name: String, type: String, required: Boolean }], // Dynamic form structure
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema);
