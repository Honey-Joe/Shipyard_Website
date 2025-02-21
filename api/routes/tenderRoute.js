const express = require("express");
const {
  createTender,
  getAllTenders,
  getTenderById
} = require("../controllers/tenderController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const upload = require("../middleware/uploadMiddleware"); // Import upload middleware

const router = express.Router();

router.post("/", authMiddleware, adminMiddleware, upload.array("documents", 5), createTender);
router.get("/", getAllTenders);
router.get("/:id", getTenderById);

module.exports = router;
