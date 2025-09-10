import { FunnelTracker } from "../models/FunnelTracker.js";

// GET all leads
export const getAllLeads = async (req, res) => {
  try {
    const leads = await FunnelTracker.findAll();
    res.json(leads);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET lead by ID
export const getLeadById = async (req, res) => {
  try {
    const { id } = req.params;
    const lead = await FunnelTracker.findByPk(id);
    if (!lead) return res.status(404).json({ message: "Lead not found" });
    res.json(lead);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// CREATE lead
export const createLead = async (req, res) => {
  try {
    const newLead = await FunnelTracker.create(req.body);
    res.status(201).json({ message: "Lead created successfully", lead: newLead });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create lead", error });
  }
};

// UPDATE lead
export const updateLead = async (req, res) => {
  try {
    const { id } = req.params;
    const lead = await FunnelTracker.findByPk(id);
    if (!lead) return res.status(404).json({ message: "Lead not found" });

    await lead.update(req.body);
    res.json({ message: "Lead updated successfully", lead });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update lead", error });
  }
};

// DELETE lead
export const deleteLead = async (req, res) => {
  try {
    const { id } = req.params;
    const lead = await FunnelTracker.findByPk(id);
    if (!lead) return res.status(404).json({ message: "Lead not found" });

    await lead.destroy();
    res.json({ message: "Lead deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete lead", error });
  }
};
