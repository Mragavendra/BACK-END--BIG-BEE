// controllers/action.controller.js
import Action from "../models/action.model.js";

// ✅ Create new Action
export const createAction = async (req, res) => {
  try {
    const { action_name, description, is_active } = req.body;
    const action = await Action.create({ action_name, description, is_active });
    res.status(201).json({ success: true, data: action });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get all Actions
export const getActions = async (req, res) => {
  try {
    const actions = await Action.findAll();
    res.status(200).json({ success: true, data: actions });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get Action by ID
export const getActionById = async (req, res) => {
  try {
    const action = await Action.findByPk(req.params.id);
    if (!action) return res.status(404).json({ success: false, message: "Action not found" });
    res.status(200).json({ success: true, data: action });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Update Action
export const updateAction = async (req, res) => {
  try {
    const { id } = req.params;
    const { action_name, description, is_active } = req.body;

    const action = await Action.findByPk(id);
    if (!action) return res.status(404).json({ success: false, message: "Action not found" });

    await action.update({ action_name, description, is_active });
    res.status(200).json({ success: true, data: action });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Delete Action
export const deleteAction = async (req, res) => {
  try {
    const { id } = req.params;
    const action = await Action.findByPk(id);
    if (!action) return res.status(404).json({ success: false, message: "Action not found" });

    await action.destroy();
    res.status(200).json({ success: true, message: "Action deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
