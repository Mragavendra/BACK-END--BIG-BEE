// controllers/marketingChannel.controller.js
import MarketingChannel from "../models/MarketingChannel.js";

// Create new channel
export const createChannel = async (req, res) => {
  try {
    const channel = await MarketingChannel.create(req.body);
    res.status(201).json(channel);
  } catch (error) {
    res.status(500).json({ message: "Error creating channel", error });
  }
};

// Get all channels
export const getAllChannels = async (req, res) => {
  try {
    const channels = await MarketingChannel.findAll();
    res.json(channels);
  } catch (error) {
    res.status(500).json({ message: "Error fetching channels", error });
  }
};

// Get channel by ID
export const getChannelById = async (req, res) => {
  try {
    const channel = await MarketingChannel.findByPk(req.params.id);
    if (!channel) return res.status(404).json({ message: "Channel not found" });
    res.json(channel);
  } catch (error) {
    res.status(500).json({ message: "Error fetching channel", error });
  }
};

// Update channel
export const updateChannel = async (req, res) => {
  try {
    const channel = await MarketingChannel.findByPk(req.params.id);
    if (!channel) return res.status(404).json({ message: "Channel not found" });

    await channel.update(req.body);
    res.json({ message: "Channel updated successfully", channel });
  } catch (error) {
    res.status(500).json({ message: "Error updating channel", error });
  }
};

// Delete channel
export const deleteChannel = async (req, res) => {
  try {
    const channel = await MarketingChannel.findByPk(req.params.id);
    if (!channel) return res.status(404).json({ message: "Channel not found" });

    await channel.destroy();
    res.json({ message: "Channel deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting channel", error });
  }
};
