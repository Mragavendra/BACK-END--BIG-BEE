import express from "express";
import {
  createStatus,
  getAllStatus,
  getStatusById,
  updateStatus,
  deleteStatus,
} from "../controllers/status.controller.js";

const router = express.Router();

router.post("/create", createStatus);
router.get("/", getAllStatus);
router.get("/:id", getStatusById);
router.put("/:id", updateStatus);
router.delete("/:id", deleteStatus);

export default router;
