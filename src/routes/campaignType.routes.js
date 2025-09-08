import express from "express";
import {
  createCampaignType,
  getAllCampaignTypes,
  getCampaignTypeById,
  updateCampaignType,
  deleteCampaignType,
} from "../controllers/campaignType.controller.js";

const router = express.Router();

router.post("/create", createCampaignType);
router.get("/", getAllCampaignTypes);
router.get("/:id", getCampaignTypeById);
router.put("/:id", updateCampaignType);
router.delete("/:id", deleteCampaignType);

export default router;
