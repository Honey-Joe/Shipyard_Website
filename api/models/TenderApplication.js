const mongoose = require("mongoose");

const tenderApplicationSchema = new mongoose.Schema(
  {
    tenderId: { type: mongoose.Schema.Types.ObjectId, ref: "Tender" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    companyName: String,
    bidAmount: Number,
    documents: [String],
    status: { type: String, default: "Under Review" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TenderApplication", tenderApplicationSchema);
