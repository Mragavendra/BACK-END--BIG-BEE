// src/controllers/leadType.controller.js
import { LeadType } from "../models/LeadType.js";

// Get all lead types
export const getLeadTypes = async (req, res) => {
  try {
    const leadTypes = await LeadType.findAll();
    res.json(leadTypes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get single lead type
export const getLeadType = async (req, res) => {
  try {
    const leadType = await LeadType.findByPk(req.params.id);
    if (!leadType) return res.status(404).json({ message: "Not found" });
    res.json(leadType);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Create new lead type
export const createLeadType = async (req, res) => {
  try {
    const { lead_type, description, active_status } = req.body;
    const newLeadType = await LeadType.create({ lead_type, description, active_status });
    res.status(201).json(newLeadType);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Update lead type
export const updateLeadType = async (req, res) => {
  try {
    const { lead_type, description, active_status } = req.body;
    const leadType = await LeadType.findByPk(req.params.id);
    if (!leadType) return res.status(404).json({ message: "Not found" });

    leadType.lead_type = lead_type;
    leadType.description = description;
    leadType.active_status = active_status;

    await leadType.save();
    res.json(leadType);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete lead type
export const deleteLeadType = async (req, res) => {
  try {
    const leadType = await LeadType.findByPk(req.params.id);
    if (!leadType) return res.status(404).json({ message: "Not found" });

    await leadType.destroy();
    res.json({ message: "Lead type deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
