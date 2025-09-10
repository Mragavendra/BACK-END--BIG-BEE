import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js";

const PerformanceMIS = sequelize.define(
  "PerformanceMIS",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    billing_no: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    enquiry_no: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    invoice_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    project_name: {
      type: DataTypes.STRING(255),
    },
    basic_amt: {
      type: DataTypes.DECIMAL(12, 2),
    },
    tax: {
      type: DataTypes.DECIMAL(12, 2),
    },
    total_amt: {
      type: DataTypes.DECIMAL(12, 2),
    },
    payments: {
      type: DataTypes.JSON,
    },
    total_collected_amt: {
      type: DataTypes.DECIMAL(12, 2),
    },
    balance: {
      type: DataTypes.DECIMAL(12, 2),
      defaultValue: 0,
    },
    tds_amount: {
      type: DataTypes.DECIMAL(12, 2),
      defaultValue: 0,
    },
    credit_note: {
      type: DataTypes.DECIMAL(12, 2),
      defaultValue: 0,
    },
    balance_after_tds: {
      type: DataTypes.DECIMAL(12, 2),
      defaultValue: 0,
    },
  },
  {
    tableName: "performance_mis",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default PerformanceMIS;
