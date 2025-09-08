// models/MarketingChannel.js
import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js";

const MarketingChannel = sequelize.define(
  "MarketingChannel",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    channel_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    advertising_type: {
      type: DataTypes.ENUM(
        "Social Media",
        "Email Marketing",
        "Content Marketing",
        "PPC Advertising",
        "Influencer Marketing"
      ),
      allowNull: false,
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
    tableName: "marketing_channels",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default MarketingChannel;
