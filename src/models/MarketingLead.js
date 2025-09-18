// models/MarketingLead.js

import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js";

const MarketingLead = sequelize.define(
  "MarketingLead",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    enquiry_no: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    lead_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    lead_type: {
      type: DataTypes.ENUM("hot", "warm", "cold"),
      allowNull: false,
    },
    lead_source: {
      type: DataTypes.ENUM("website", "referral", "social", "email"),
      allowNull: false,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    prospect: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    contact_person: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    email_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    mobile_number: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    department: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    designation: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    address_line1: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    pincode: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    bde: {
      type: DataTypes.ENUM("bde1", "bde2", "bde3"),
      allowNull: true,
    },
    client_servicing_person: {
      type: DataTypes.ENUM("person1", "person2", "person3"),
      allowNull: true,
    },
    active_status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "marketing_leads",
    timestamps: false, // since you are manually handling created_at and updated_at
  }
);

export default MarketingLead;
