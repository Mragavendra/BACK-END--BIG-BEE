import Status from "../models/status.model.js";

// Create Status
export const createStatus = async (req, res) => {
  try {
    const { status_name, description, is_active } = req.body;
    const status = await Status.create({ status_name, description, is_active });
    res.status(201).json(status);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Status
export const getAllStatus = async (req, res) => {
  try {
    const statuses = await Status.findAll();
    res.json(statuses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Status by ID
export const getStatusById = async (req, res) => {
  try {
    const status = await Status.findByPk(req.params.id);
    if (!status) return res.status(404).json({ message: "Status not found" });
    res.json(status);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Status
export const updateStatus = async (req, res) => {
  try {
    const status = await Status.findByPk(req.params.id);
    if (!status) return res.status(404).json({ message: "Status not found" });

    const { status_name, description, is_active } = req.body;
    await status.update({ status_name, description, is_active });

    res.json({ message: "Status updated successfully", status });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Status
export const deleteStatus = async (req, res) => {
  try {
    const status = await Status.findByPk(req.params.id);
    if (!status) return res.status(404).json({ message: "Status not found" });

    await status.destroy();
    res.json({ message: "Status deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
