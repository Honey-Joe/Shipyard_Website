const express = require("express");
const { createOrder, getAllOrders, getUserOrders, updateOrderStatus, deleteOrder } = require("../controllers/orderController");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createOrder);
router.get("/", authMiddleware, adminMiddleware, getAllOrders);
router.get("/my-orders", authMiddleware, getUserOrders);
router.put("/:orderId", authMiddleware, adminMiddleware, updateOrderStatus);
router.delete("/:orderId", authMiddleware, adminMiddleware, deleteOrder);

module.exports = router;
