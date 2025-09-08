// src/models/typeOfAdvertising.model.js
import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js";

const TypeOfAdvertising = sequelize.define(
  "TypeOfAdvertising",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    channel: {
      type: DataTypes.STRING,
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
    tableName: "type_of_advertising", // ✅ matches your table
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default TypeOfAdvertising;
