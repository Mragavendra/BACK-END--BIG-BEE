// controllers/designation.controller.js

import Designation from '../models/Designation.js';

// CREATE a new designation
export const createDesignation = async (req, res) => {
  try {
    const { name, level, description, is_active } = req.body;

    const designation = await Designation.create({
      name,
      level,
      description,
      is_active,
    });

    res.status(201).json({ message: 'Designation created', data: designation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// GET all designations
export const getAllDesignations = async (req, res) => {
  try {
    const designations = await Designation.findAll();
    res.status(200).json({ data: designations });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// GET a single designation by ID
export const getDesignationById = async (req, res) => {
  try {
    const { id } = req.params;
    const designation = await Designation.findByPk(id);

    if (!designation) {
      return res.status(404).json({ message: 'Designation not found' });
    }

    res.status(200).json({ data: designation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// UPDATE a designation by ID
export const updateDesignation = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, level, description, is_active } = req.body;

    const designation = await Designation.findByPk(id);

    if (!designation) {
      return res.status(404).json({ message: 'Designation not found' });
    }

    await designation.update({ name, level, description, is_active });

    res.status(200).json({ message: 'Designation updated', data: designation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// DELETE a designation by ID
export const deleteDesignation = async (req, res) => {
  try {
    const { id } = req.params;
    const designation = await Designation.findByPk(id);

    if (!designation) {
      return res.status(404).json({ message: 'Designation not found' });
    }

    await designation.destroy();
    res.status(200).json({ message: 'Designation deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
