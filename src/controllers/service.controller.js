import { Service } from "../models/service.model.js";

// Create a new service
export const createService = async (req, res) => {
  try {
    const { service_type, description, is_active } = req.body;
    const service = await Service.create({ service_type, description, is_active });
    res.status(201).json(service);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating service", error: error.message });
  }
};

// Get all services
export const getServices = async (req, res) => {
  try {
    const services = await Service.findAll();
    res.json(services);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching services", error: error.message });
  }
};

// Get a single service by id
export const getServiceById = async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.id);
    if (!service) return res.status(404).json({ message: "Service not found" });
    res.json(service);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching service", error: error.message });
  }
};

// Update a service by id
export const updateService = async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.id);
    if (!service) return res.status(404).json({ message: "Service not found" });

    const { service_type, description, is_active } = req.body;
    await service.update({ service_type, description, is_active });
    res.json(service);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating service", error: error.message });
  }
};

// Delete a service by id
export const deleteService = async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.id);
    if (!service) return res.status(404).json({ message: "Service not found" });

    await service.destroy();
    res.json({ message: "Service deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting service", error: error.message });
  }
};
