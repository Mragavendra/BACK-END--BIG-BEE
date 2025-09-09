import { Employee } from '../models/employee.model.js';

// CREATE Employee
export const createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create employee', error });
  }
};

// GET All Employees
export const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.status(200).json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch employees', error });
  }
};

// GET Employee by ID
export const getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByPk(id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    res.status(200).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch employee', error });
  }
};

// UPDATE Employee
export const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByPk(id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });

    await employee.update(req.body);
    res.status(200).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update employee', error });
  }
};

// DELETE Employee
export const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByPk(id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });

    await employee.destroy();
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete employee', error });
  }
};
