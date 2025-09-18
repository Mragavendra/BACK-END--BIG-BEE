import express from "express";
import {
  createMarketingLead,
  getAllMarketingLeads,
  getMarketingLeadById,
  updateMarketingLead,
  deleteMarketingLead,
} from "../controllers/marketingLead.controller.js";

const router = express.Router();

// CRUD Routes
router.post("/create", createMarketingLead); // Create
router.get("/", getAllMarketingLeads); // Get all
router.get("/:id", getMarketingLeadById); // Get by ID
router.put("/:id", updateMarketingLead); // Update
router.delete("/:id", deleteMarketingLead); // Delete

export default router;
