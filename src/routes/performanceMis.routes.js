import express from "express";
import {
  createPerformance,
  getPerformances,
  getPerformanceById,
  updatePerformance,
  deletePerformance,
} from "../controllers/performanceMis.controller.js";

const router = express.Router();

// Routes
router.post("/create", createPerformance);       // Create
router.get("/", getPerformances);               // Get all
router.get("/:id", getPerformanceById);        // Get one
router.put("/:id", updatePerformance);         // Update
router.delete("/:id", deletePerformance);      // Delete

export default router;
