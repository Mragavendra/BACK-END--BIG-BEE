import express from "express";
import {
  createFollowupMode,
  getAllFollowupModes,
  getFollowupModeById,
  updateFollowupMode,
  deleteFollowupMode,
} from "../controllers/followupMode.controller.js";

const router = express.Router();

router.post("/create", createFollowupMode);
router.get("/", getAllFollowupModes);
router.get("/:id", getFollowupModeById);
router.put("/:id", updateFollowupMode);
router.delete("/:id", deleteFollowupMode);

export default router;
