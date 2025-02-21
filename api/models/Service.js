const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // Service Name (Ship Building, Repair, etc.)
    description: { type: String, required: true }, // Service Details
    category: { type: String, enum: ["Ship Building", "Ship Repair", "Marine Engineering", "Financials", "Facilities"], required: true }, // Category
    image: { type: String }, // Image URL of Service
    available: { type: Boolean, default: true }, // Availability Status
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema);
