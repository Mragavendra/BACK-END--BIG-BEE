// src/routes/leadSource.routes.js
import express from 'express';
import {
  createLeadSource,
  getLeadSources,
  getLeadSourceById,
  updateLeadSource,
  deleteLeadSource
} from '../controllers/leadSource.controller.js';

const router = express.Router();

router.post('/create', createLeadSource);
router.get('/', getLeadSources);
router.get('/:id', getLeadSourceById);
router.put('/:id', updateLeadSource);
router.delete('/:id', deleteLeadSource);

export default router;
