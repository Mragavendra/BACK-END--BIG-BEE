import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js";

const Order = sequelize.define(
  "Order",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    order_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    order_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    order_value: {
      type: DataTypes.DECIMAL(15, 2),
    },
    quotation_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    quotation_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    prospect: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    contact_person: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    mobile_number: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    department: {
      type: DataTypes.STRING(50),
    },
    designation: {
      type: DataTypes.STRING(50),
    },
    address_line1: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    landmark: {
      type: DataTypes.STRING(100),
    },
    street: {
      type: DataTypes.STRING(100),
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    pincode: {
      type: DataTypes.STRING(6),
      allowNull: false,
    },
    base_amount: {
      type: DataTypes.DECIMAL(15, 2),
    },
    gst_percent: {
      type: DataTypes.DECIMAL(5, 2),
    },
    gst_value: {
      type: DataTypes.DECIMAL(15, 2),
    },
    discount: {
      type: DataTypes.DECIMAL(15, 2),
    },
    final_total: {
      type: DataTypes.DECIMAL(15, 2),
    },
    event_date: {
      type: DataTypes.DATEONLY,
    },
    event_location: {
      type: DataTypes.STRING(255),
    },
    service: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    bde: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    client_servicing_person: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    active_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
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
    tableName: "orders",
    timestamps: false, // Since we are manually handling created_at and updated_at
  }
);

export default Order;
