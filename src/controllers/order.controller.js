import Order from "../models/Order.js";

// Create Order
export const createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Failed to create order", error });
  }
};

// Get all Orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders", error });
  }
};

// Get Order by ID
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch order", error });
  }
};

// Update Order
export const updateOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });

    await order.update(req.body);
    res.json({ message: "Order updated successfully", order });
  } catch (error) {
    res.status(500).json({ message: "Failed to update order", error });
  }
};

// Delete Order
export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });

    await order.destroy();
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete order", error });
  }
};
