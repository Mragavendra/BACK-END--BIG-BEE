import Lead from "../models/lead.model.js";

// Create a new lead
export const createLead = async (req, res) => {
  try {
    const lead = await Lead.create(req.body);
    res.status(201).json({ message: "Lead created successfully", lead });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create lead", error });
  }
};

// Get all leads
export const getAllLeads = async (req, res) => {
  try {
    const leads = await Lead.findAll();
    res.status(200).json(leads);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch leads", error });
  }
};

// Get a lead by ID
export const getLeadById = async (req, res) => {
  try {
    const lead = await Lead.findByPk(req.params.id);
    if (!lead) return res.status(404).json({ message: "Lead not found" });
    res.status(200).json(lead);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch lead", error });
  }
};

// Update a lead
export const updateLead = async (req, res) => {
  try {
    const lead = await Lead.findByPk(req.params.id);
    if (!lead) return res.status(404).json({ message: "Lead not found" });
    await lead.update(req.body);
    res.status(200).json({ message: "Lead updated successfully", lead });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update lead", error });
  }
};

// Delete a lead
export const deleteLead = async (req, res) => {
  try {
    const lead = await Lead.findByPk(req.params.id);
    if (!lead) return res.status(404).json({ message: "Lead not found" });
    await lead.destroy();
    res.status(200).json({ message: "Lead deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete lead", error });
  }
};
