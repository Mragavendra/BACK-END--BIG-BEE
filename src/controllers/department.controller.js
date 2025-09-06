import { Department } from '../models/department.model.js';

// Create department
export const createDepartment = async (req, res) => {
  try {
    const { name, description, is_active } = req.body;
    const department = await Department.create({ name, description, is_active });
    res.status(201).json({ success: true, data: department });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to create department' });
  }
};

// Get all departments
export const getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.findAll();
    res.json({ success: true, data: departments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to fetch departments' });
  }
};

// Get department by ID
export const getDepartmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await Department.findByPk(id);
    if (!department) return res.status(404).json({ success: false, message: 'Department not found' });
    res.json({ success: true, data: department });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to fetch department' });
  }
};

// Update department
export const updateDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, is_active } = req.body;
    const department = await Department.findByPk(id);
    if (!department) return res.status(404).json({ success: false, message: 'Department not found' });

    await department.update({ name, description, is_active });
    res.json({ success: true, data: department });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to update department' });
  }
};

// Delete department
export const deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await Department.findByPk(id);
    if (!department) return res.status(404).json({ success: false, message: 'Department not found' });

    await department.destroy();
    res.json({ success: true, message: 'Department deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to delete department' });
  }
};
