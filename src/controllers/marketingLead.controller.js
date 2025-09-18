// controllers/marketingLead.controller.js

import MarketingLead from "../models/MarketingLead.js";

// Create a new marketing lead
export const createMarketingLead = async (req, res) => {
  try {
    const leadData = req.body;
    const lead = await MarketingLead.create(leadData);
    res.status(201).json({ success: true, data: lead });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to create marketing lead" });
  }
};

// Get all marketing leads
export const getAllMarketingLeads = async (req, res) => {
  try {
    const leads = await MarketingLead.findAll();
    res.json({ success: true, data: leads });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch marketing leads" });
  }
};

// Get marketing lead by ID
export const getMarketingLeadById = async (req, res) => {
  try {
    const { id } = req.params;
    const lead = await MarketingLead.findByPk(id);
    if (!lead)
      return res
        .status(404)
        .json({ success: false, message: "Marketing lead not found" });

    res.json({ success: true, data: lead });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch marketing lead" });
  }
};

// Update marketing lead
export const updateMarketingLead = async (req, res) => {
  try {
    const { id } = req.params;
    const lead = await MarketingLead.findByPk(id);
    if (!lead)
      return res
        .status(404)
        .json({ success: false, message: "Marketing lead not found" });

    await lead.update(req.body);
    res.json({ success: true, data: lead });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to update marketing lead" });
  }
};

// Delete marketing lead
export const deleteMarketingLead = async (req, res) => {
  try {
    const { id } = req.params;
    const lead = await MarketingLead.findByPk(id);
    if (!lead)
      return res
        .status(404)
        .json({ success: false, message: "Marketing lead not found" });

    await lead.destroy();
    res.json({
      success: true,
      message: "Marketing lead deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to delete marketing lead" });
  }
};
