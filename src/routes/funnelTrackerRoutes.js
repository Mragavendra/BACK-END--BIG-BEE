import express from "express";
import {
  getAllLeads,
  getLeadById,
  createLead,
  updateLead,
  deleteLead,
} from "../controllers/funnelTrackerController.js";

const router = express.Router();

router.get("/", getAllLeads);
router.get("/:id", getLeadById);
router.post("/create", createLead);
router.put("/:id", updateLead);
router.delete("/:id", deleteLead);

export default router;
