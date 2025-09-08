// controllers/category.controller.js
import Category from "../models/category.model.js";

// Get all categories
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json({ success: true, data: categories });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch categories", error: error.message });
  }
};

// Get single category by ID
export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) return res.status(404).json({ success: false, message: "Category not found" });
    res.json({ success: true, data: category });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch category", error: error.message });
  }
};

// Create new category
export const createCategory = async (req, res) => {
  try {
    const { funnel_stage, description, is_active } = req.body;
    const category = await Category.create({ funnel_stage, description, is_active });
    res.status(201).json({ success: true, data: category });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to create category", error: error.message });
  }
};

// Update category by ID
export const updateCategory = async (req, res) => {
  try {
    const { funnel_stage, description, is_active } = req.body;
    const category = await Category.findByPk(req.params.id);

    if (!category) return res.status(404).json({ success: false, message: "Category not found" });

    category.funnel_stage = funnel_stage ?? category.funnel_stage;
    category.description = description ?? category.description;
    category.is_active = is_active ?? category.is_active;

    await category.save();
    res.json({ success: true, data: category });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update category", error: error.message });
  }
};

// Delete category by ID
export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) return res.status(404).json({ success: false, message: "Category not found" });

    await category.destroy();
    res.json({ success: true, message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete category", error: error.message });
  }
};
