import PerformanceMIS from "../models/performanceMis.model.js";

// ✅ Create Performance
export const createPerformance = async (req, res) => {
  try {
    const performance = await PerformanceMIS.create(req.body);
    res.status(201).json({ success: true, data: performance });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get all Performances
export const getPerformances = async (req, res) => {
  try {
    const performances = await PerformanceMIS.findAll();
    res.status(200).json({ success: true, data: performances });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get Performance by ID
export const getPerformanceById = async (req, res) => {
  try {
    const performance = await PerformanceMIS.findByPk(req.params.id);
    if (!performance) return res.status(404).json({ success: false, message: "Performance not found" });
    res.status(200).json({ success: true, data: performance });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Update Performance
export const updatePerformance = async (req, res) => {
  try {
    const { id } = req.params;
    const performance = await PerformanceMIS.findByPk(id);
    if (!performance) return res.status(404).json({ success: false, message: "Performance not found" });

    await performance.update(req.body);
    res.status(200).json({ success: true, data: performance });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Delete Performance
export const deletePerformance = async (req, res) => {
  try {
    const { id } = req.params;
    const performance = await PerformanceMIS.findByPk(id);
    if (!performance) return res.status(404).json({ success: false, message: "Performance not found" });

    await performance.destroy();
    res.status(200).json({ success: true, message: "Performance deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
