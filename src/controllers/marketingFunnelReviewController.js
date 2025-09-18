import MarketingFunnelReview from "../models/marketingFunnelReview.model.js";

// Create
export const createMarketingFunnelReview = async (req, res) => {
  try {
    const review = await MarketingFunnelReview.create(req.body);
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all
export const getAllMarketingFunnelReviews = async (req, res) => {
  try {
    const reviews = await MarketingFunnelReview.findAll();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get by ID
export const getMarketingFunnelReviewById = async (req, res) => {
  try {
    const review = await MarketingFunnelReview.findByPk(req.params.id);
    if (!review) return res.status(404).json({ error: "Not found" });
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update
export const updateMarketingFunnelReview = async (req, res) => {
  try {
    const review = await MarketingFunnelReview.findByPk(req.params.id);
    if (!review) return res.status(404).json({ error: "Not found" });

    await review.update(req.body);
    res.status(200).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete
export const deleteMarketingFunnelReview = async (req, res) => {
  try {
    const review = await MarketingFunnelReview.findByPk(req.params.id);
    if (!review) return res.status(404).json({ error: "Not found" });

    await review.destroy();
    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
