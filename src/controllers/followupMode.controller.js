import FollowupMode from "../models/followupMode.model.js";

// Create
export const createFollowupMode = async (req, res) => {
  try {
    const { mode_name, description, is_active } = req.body;
    const followupMode = await FollowupMode.create({
      mode_name,
      description,
      is_active,
    });
    res.status(201).json(followupMode);
  } catch (err) {
    res.status(500).json({ message: "Error creating followup mode", error: err.message });
  }
};

// Get all
export const getAllFollowupModes = async (req, res) => {
  try {
    const followupModes = await FollowupMode.findAll();
    res.json(followupModes);
  } catch (err) {
    res.status(500).json({ message: "Error fetching followup modes", error: err.message });
  }
};

// Get by ID
export const getFollowupModeById = async (req, res) => {
  try {
    const { id } = req.params;
    const followupMode = await FollowupMode.findByPk(id);
    if (!followupMode) return res.status(404).json({ message: "Followup mode not found" });
    res.json(followupMode);
  } catch (err) {
    res.status(500).json({ message: "Error fetching followup mode", error: err.message });
  }
};

// Update
export const updateFollowupMode = async (req, res) => {
  try {
    const { id } = req.params;
    const { mode_name, description, is_active } = req.body;
    const followupMode = await FollowupMode.findByPk(id);
    if (!followupMode) return res.status(404).json({ message: "Followup mode not found" });

    followupMode.mode_name = mode_name;
    followupMode.description = description;
    followupMode.is_active = is_active;

    await followupMode.save();
    res.json({ message: "Followup mode updated successfully", followupMode });
  } catch (err) {
    res.status(500).json({ message: "Error updating followup mode", error: err.message });
  }
};

// Delete
export const deleteFollowupMode = async (req, res) => {
  try {
    const { id } = req.params;
    const followupMode = await FollowupMode.findByPk(id);
    if (!followupMode) return res.status(404).json({ message: "Followup mode not found" });

    await followupMode.destroy();
    res.json({ message: "Followup mode deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting followup mode", error: err.message });
  }
};
