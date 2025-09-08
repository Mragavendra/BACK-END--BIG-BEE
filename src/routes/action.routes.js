// routes/action.routes.js
import express from "express";
import {
  createAction,
  getActions,
  getActionById,
  updateAction,
  deleteAction,
} from "../controllers/action.controller.js";

const router = express.Router();

router.post("/create", createAction);       // Create
router.get("/", getActions);          // Get all
router.get("/:id", getActionById);    // Get one
router.put("/:id", updateAction);     // Update
router.delete("/:id", deleteAction);  // Delete

export default router;
