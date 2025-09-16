import CampaignType from "../models/campaignType.model.js";

// Create Campaign Type
export const createCampaignType = async (req, res) => {
  try {
    const { campaign_type, description, is_active } = req.body;
    const newCampaignType = await CampaignType.create({
      campaign_type,
      description,
      is_active,
    });
    res.status(201).json(newCampaignType);
  } catch (error) {
    console.error("Error creating campaign type:", error);
    res.status(500).json({ message: "Failed to create campaign type", error });
  }
};

// Get All Campaign Types
export const getAllCampaignTypes = async (req, res) => {
  try {
    const campaignTypes = await CampaignType.findAll();
    res.json(campaignTypes);
  } catch (error) {
    console.error("Error fetching campaign types:", error);
    res.status(500).json({ message: "Failed to fetch campaign types" });
  }
};

// Get Campaign Type by ID
export const getCampaignTypeById = async (req, res) => {
  try {
    const campaignType = await CampaignType.findByPk(req.params.id);
    if (!campaignType) {
      return res.status(404).json({ message: "Campaign Type not found" });
    }
    res.json(campaignType);
  } catch (error) {
    console.error("Error fetching campaign type:", error);
    res.status(500).json({ message: "Failed to fetch campaign type" });
  }
};


// Update Campaign Type
export const updateCampaignType = async (req, res) => {
  try {
    const { campaign_type, description, is_active } = req.body;
    const campaignType = await CampaignType.findByPk(req.params.id);

    if (!campaignType) {
      return res.status(404).json({ message: "Campaign Type not found" });
    }

    campaignType.campaign_type = campaign_type;
    campaignType.description = description;
    campaignType.is_active = is_active;

    await campaignType.save();
    res.json(campaignType);
  } catch (error) {
    console.error("Error updating campaign type:", error);
    res.status(500).json({ message: "Failed to update campaign type" });
  }
};

// Delete Campaign Type
export const deleteCampaignType = async (req, res) => {
  try {
    const campaignType = await CampaignType.findByPk(req.params.id);
    if (!campaignType) {
      return res.status(404).json({ message: "Campaign Type not found" });
    }

    await campaignType.destroy();
    res.json({ message: "Campaign Type deleted successfully" });
  } catch (error) {
    console.error("Error deleting campaign type:", error);
    res.status(500).json({ message: "Failed to delete campaign type" });
  }
};
