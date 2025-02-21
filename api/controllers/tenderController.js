const Tender = require("../models/Tender");

// Create a new tender (Admin Only)
exports.createTender = async (req, res) => {
  try {
    const { name, description, deadline, bidRange } = req.body;
    
    // Get file paths from uploaded files
    const documentPaths = req.files ? req.files.map((file) => file.path) : [];

    const tender = await Tender.create({
      name,
      description,
      deadline,
      bidRange,
      documents: documentPaths,
    });

    res.status(201).json({ message: "Tender created successfully", tender });
  } catch (error) {
    res.status(500).json({ error: "Failed to create tender" });
  }
};

// Get all tenders
exports.getAllTenders = async (req, res) => {
  try {
    const tenders = await Tender.find();
    res.json(tenders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tenders" });
  }
};

// Get a tender by ID
exports.getTenderById = async (req, res) => {
  try {
    const tender = await Tender.findById(req.params.id);
    if (!tender) return res.status(404).json({ error: "Tender not found" });
    res.json(tender);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tender" });
  }
};
