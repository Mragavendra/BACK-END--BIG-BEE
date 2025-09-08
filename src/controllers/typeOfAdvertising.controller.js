// src/controllers/typeOfAdvertising.controller.js
import TypeOfAdvertising from "../models/typeOfAdvertising.model.js";

// Create new type of advertising
export const createTypeOfAdvertising = async (req, res) => {
  try {
    const { channel, description, is_active } = req.body;
    const newAd = await TypeOfAdvertising.create({ channel, description, is_active });
    res.status(201).json(newAd);
  } catch (error) {
    res.status(500).json({ message: "Error creating advertising type", error: error.message });
  }
};

// Get all advertising types
export const getAllTypesOfAdvertising = async (req, res) => {
  try {
    const ads = await TypeOfAdvertising.findAll();
    res.json(ads);
  } catch (error) {
    res.status(500).json({ message: "Error fetching advertising types", error: error.message });
  }
};

// Get single advertising type by ID
export const getTypeOfAdvertisingById = async (req, res) => {
  try {
    const { id } = req.params;
    const ad = await TypeOfAdvertising.findByPk(id);
    if (!ad) return res.status(404).json({ message: "Advertising type not found" });
    res.json(ad);
  } catch (error) {
    res.status(500).json({ message: "Error fetching advertising type", error: error.message });
  }
};

// Update advertising type
export const updateTypeOfAdvertising = async (req, res) => {
  try {
    const { id } = req.params;
    const { channel, description, is_active } = req.body;

    const ad = await TypeOfAdvertising.findByPk(id);
    if (!ad) return res.status(404).json({ message: "Advertising type not found" });

    await ad.update({ channel, description, is_active });
    res.json(ad);
  } catch (error) {
    res.status(500).json({ message: "Error updating advertising type", error: error.message });
  }
};

// Delete advertising type
export const deleteTypeOfAdvertising = async (req, res) => {
  try {
    const { id } = req.params;
    const ad = await TypeOfAdvertising.findByPk(id);
    if (!ad) return res.status(404).json({ message: "Advertising type not found" });

    await ad.destroy();
    res.json({ message: "Advertising type deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting advertising type", error: error.message });
  }
};
