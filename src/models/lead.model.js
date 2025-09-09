import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js";

const Lead = sequelize.define("Lead", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  enquiry_no: {
    type: DataTypes.STRING(10),
    unique: true,
    allowNull: false,
  },
  lead_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  lead_type: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  lead_source: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  notes: {
    type: DataTypes.TEXT,
  },
  prospect: {
    type: DataTypes.STRING(100),
  },
  contact_person: {
    type: DataTypes.STRING(100),
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: { isEmail: true },
  },
  mobile: {
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
  bde: {
    type: DataTypes.ENUM("BDE1", "BDE2"),
    defaultValue: null,
  },
  client_servicing_person: {
    type: DataTypes.ENUM("Person1", "Person2"),
    defaultValue: null,
  },
  active_status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
}, {
  tableName: "leads",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
});

export default Lead;
