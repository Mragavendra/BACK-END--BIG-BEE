// src/controllers/leadSource.controller.js
import LeadSource from '../models/leadSource.model.js';

// Create new lead source
export const createLeadSource = async (req, res) => {
  try {
    const { name, type, description, is_active } = req.body;
    const leadSource = await LeadSource.create({ name, type, description, is_active });
    res.status(201).json(leadSource);
  } catch (error) {
    res.status(500).json({ message: 'Error creating lead source', error: error.message });
  }
};

// Get all lead sources
export const getLeadSources = async (req, res) => {
  try {
    const leadSources = await LeadSource.findAll();
    res.status(200).json(leadSources);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching lead sources', error: error.message });
  }
};

// Get lead source by ID
export const getLeadSourceById = async (req, res) => {
  try {
    const { id } = req.params;
    const leadSource = await LeadSource.findByPk(id);
    if (!leadSource) {
      return res.status(404).json({ message: 'Lead source not found' });
    }
    res.status(200).json(leadSource);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching lead source', error: error.message });
  }
};

// Update lead source by ID
export const updateLeadSource = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, type, description, is_active } = req.body;

    const leadSource = await LeadSource.findByPk(id);
    if (!leadSource) {
      return res.status(404).json({ message: 'Lead source not found' });
    }

    await leadSource.update({ name, type, description, is_active });
    res.status(200).json(leadSource);
  } catch (error) {
    res.status(500).json({ message: 'Error updating lead source', error: error.message });
  }
};

// Delete lead source by ID
export const deleteLeadSource = async (req, res) => {
  try {
    const { id } = req.params;
    const leadSource = await LeadSource.findByPk(id);
    if (!leadSource) {
      return res.status(404).json({ message: 'Lead source not found' });
    }

    await leadSource.destroy();
    res.status(200).json({ message: 'Lead source deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting lead source', error: error.message });
  }
};
