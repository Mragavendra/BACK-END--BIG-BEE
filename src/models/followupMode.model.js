import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js";

const FollowupMode = sequelize.define(
  "FollowupMode",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    mode_name: {
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
    tableName: "followup_mode",
    timestamps: false, // disable auto `createdAt`, `updatedAt`
  }
);

export default FollowupMode;
