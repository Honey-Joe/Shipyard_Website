const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const { registerAdmin } = require("../controllers/authController");


const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/register-admin",  registerAdmin);
module.exports = router;
