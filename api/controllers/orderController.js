const Order = require("../models/Order");

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const { userId, serviceId, shipType, budget, preferredTechnology } = req.body;
    const newOrder = await Order.create({ userId, serviceId, shipType, budget, preferredTechnology });
    res.status(201).json({ message: "Order placed successfully", order: newOrder });
  } catch (error) {
    res.status(500).json({ error: "Failed to create order" });
  }
};

// Get all orders (Admin only)
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("userId", "name email").populate("serviceId", "name");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};

// Get user's orders
exports.getUserOrders = async (req, res) => {
  try {
    const userId = req.user.userId;
    const orders = await Order.find({ userId }).populate("serviceId", "name");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user's orders" });
  }
};

// Update order status (Admin only)
exports.updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(req.params.orderId, { status }, { new: true });
    if (!updatedOrder) return res.status(404).json({ error: "Order not found" });

    res.json({ message: "Order status updated successfully", order: updatedOrder });
  } catch (error) {
    res.status(500).json({ error: "Failed to update order status" });
  }
};

// Delete an order (Admin only)
exports.deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.orderId);
    if (!deletedOrder) return res.status(404).json({ error: "Order not found" });

    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete order" });
  }
};
