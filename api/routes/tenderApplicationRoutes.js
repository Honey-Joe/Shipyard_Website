const express = require("express");
const {
  submitTenderApplication,
  getTenderApplications,
  getUserApplications,
  updateApplicationStatus,
  deleteTenderApplication
} = require("../controllers/tenderApplicationController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post("/", authMiddleware, upload.array("documents", 5), submitTenderApplication);
router.get("/my-applications", authMiddleware, getUserApplications);
router.get("/:tenderId", authMiddleware, adminMiddleware, getTenderApplications);
router.put("/:id", authMiddleware, adminMiddleware, updateApplicationStatus);
router.delete("/:id", authMiddleware, adminMiddleware, deleteTenderApplication);

module.exports = router;
