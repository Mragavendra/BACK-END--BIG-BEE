import express from "express";
import {
  createMarketingFunnelReview,
  getAllMarketingFunnelReviews,
  getMarketingFunnelReviewById,
  updateMarketingFunnelReview,
  deleteMarketingFunnelReview,
} from "../controllers/marketingFunnelReviewController.js";

const router = express.Router();

// Create new funnel review
router.post("/create", createMarketingFunnelReview);

// Get all funnel reviews
router.get("/", getAllMarketingFunnelReviews);

// Get single funnel review by ID
router.get("/:id", getMarketingFunnelReviewById);

// Update funnel review
router.put("/:id", updateMarketingFunnelReview);

// Delete funnel review
router.delete("/:id", deleteMarketingFunnelReview);

export default router;
