// src/models/FunnelTracker.js
import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js";

export const FunnelTracker = sequelize.define(
  "FunnelTracker",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    // Basic Lead Details
    enquiry_no: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    lead_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    funnel_status: {
      type: DataTypes.ENUM("hot", "warm", "cold"),
      allowNull: false,
    },
    action: {
      type: DataTypes.ENUM("follow-up", "quote", "meeting"),
      allowNull: false,
    },
    last_follow_up_date: DataTypes.DATEONLY,
    next_follow_up_date: DataTypes.DATEONLY,
    lost_order_date: DataTypes.DATEONLY,

    // Follow Up Details
    follow_up_last_date: DataTypes.DATEONLY,
    follow_up_next_date: DataTypes.DATEONLY,
    follow_up_notes: DataTypes.TEXT,

    // Customer Details
    prospect: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    contact_person: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    mobile_number: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    department: DataTypes.STRING(50),
    designation: DataTypes.STRING(50),

    // Address
    address_line1: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    landmark: DataTypes.STRING(100),
    street: DataTypes.STRING(100),
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

    // Quotation Details
    quotation_date: DataTypes.DATEONLY,
    quotation_no: DataTypes.STRING(20),
    quotation_value: DataTypes.DECIMAL(15, 2),
    closure_target: DataTypes.STRING(100),

    // Lead Qualification
    lead_source: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    event_date: DataTypes.DATEONLY,
    event_location: DataTypes.STRING(100),
    service: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    // Internal Assignment
    bde: {
      type: DataTypes.ENUM("john-doe", "jane-smith", "mike-johnson"),
      allowNull: false,
    },
    client_servicing_person: {
      type: DataTypes.ENUM("sarah-wilson", "david-brown", "lisa-garcia"),
      allowNull: false,
    },

    // Additional Briefs & Comments
    briefs: DataTypes.TEXT,
    comments: DataTypes.TEXT,

    // Control
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
    tableName: "funnel_tracker", // must match MySQL table name
    timestamps: false,           // manual timestamps
  }
);
