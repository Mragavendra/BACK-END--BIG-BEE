// src/routes/leadType.routes.js
import express from "express";
import {
  getLeadTypes,
  getLeadType,
  createLeadType,
  updateLeadType,
  deleteLeadType,
} from "../controllers/leadType.controller.js";

const router = express.Router();

router.get("/", getLeadTypes);
router.get("/:id", getLeadType);
router.post("/create", createLeadType);
router.put("/:id", updateLeadType);
router.delete("/:id", deleteLeadType);

export default router;
