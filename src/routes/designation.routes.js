// routes/designation.routes.js
import express from 'express';
import {
  createDesignation,
  getAllDesignations,
  getDesignationById,
  updateDesignation,
  deleteDesignation,
} from '../controllers/designation.controller.js';

const router = express.Router();

// CRUD routes
router.post('/create', createDesignation);           // Create
router.get('/', getAllDesignations);         // Read all
router.get('/:id', getDesignationById);      // Read one
router.put('/:id', updateDesignation);       // Update
router.delete('/:id', deleteDesignation);    // Delete

export default router;
