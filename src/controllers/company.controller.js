import Company from "../models/company.model.js";

// Create new company
export const createCompany = async (req, res) => {
  try {
    const { company_name, description, is_active } = req.body;
    const newCompany = await Company.create({ company_name, description, is_active });
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all companies
export const getCompanies = async (req, res) => {
  try {
    const companies = await Company.findAll();
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get company by ID
export const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findByPk(req.params.id);
    if (!company) return res.status(404).json({ message: "Company not found" });
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update company by ID
export const updateCompany = async (req, res) => {
  try {
    const { company_name, description, is_active } = req.body;
    const company = await Company.findByPk(req.params.id);
    if (!company) return res.status(404).json({ message: "Company not found" });
    await company.update({ company_name, description, is_active });
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete company by ID
export const deleteCompany = async (req, res) => {
  try {
    const company = await Company.findByPk(req.params.id);
    if (!company) return res.status(404).json({ message: "Company not found" });
    await company.destroy();
    res.status(200).json({ message: "Company deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
