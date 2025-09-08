// src/models/campaignType.model.js
import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js";  

const CampaignType = sequelize.define(
  "CampaignType",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    campaign_type: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: "campaign_type", // ✅ matches your SQL table
    timestamps: true,           // ✅ enables createdAt & updatedAt
    createdAt: "created_at",    // ✅ custom column name
    updatedAt: "updated_at",    // ✅ custom column name
  }
);

export default CampaignType;
