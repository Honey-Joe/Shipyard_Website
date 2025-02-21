const mongoose = require("mongoose");

const exportRequestSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    stockId: { type: mongoose.Schema.Types.ObjectId, ref: "Stock" },
    companyName: String,
    destination: { country: String, port: String },
    expectedDeliveryDate: Date,
    transportMode: String,
    shippingPartner: String,
    exportLicenseRequired: Boolean,
    customsDocuments: [String],
    paymentMode: String,
    insuranceRequired: Boolean,
    status: { type: String, default: "Processing" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ExportRequest", exportRequestSchema);
