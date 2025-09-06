// src/models/LeadType.js
import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js";

export const LeadType = sequelize.define(
  "LeadType",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    lead_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
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
    tableName: "lead_types", // must match MySQL table
    timestamps: false,       // because we handle timestamps manually
  }
);
