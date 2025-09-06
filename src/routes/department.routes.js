import express from 'express';
import {
  createDepartment,
  getAllDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment
} from '../controllers/department.controller.js';

const router = express.Router();

// CRUD routes
router.post('/create', createDepartment);      // Create
router.get('/', getAllDepartments);           // Read all
router.get('/:id', getDepartmentById);        // Read one
router.put('/:id', updateDepartment);         // Update
router.delete('/:id', deleteDepartment);      // Delete

export default router;
