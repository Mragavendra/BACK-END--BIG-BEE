// src/models/marketingFunnelReview.model.js
import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js";

const MarketingFunnelReview = sequelize.define(
  "MarketingFunnelReview",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    enquiry_no: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    funnel_status: {
      type: DataTypes.ENUM("open", "in-progress", "closed"),
      allowNull: false,
    },
    action: {
      type: DataTypes.ENUM("call", "email", "meeting", "follow-up"),
      allowNull: false,
    },
    last_followup_date: {
      type: DataTypes.DATEONLY,
    },
    lost_order_date: {
      type: DataTypes.DATEONLY,
    },
    next_followup_date: {
      type: DataTypes.DATEONLY,
    },
    new_followup_date: {
      type: DataTypes.DATEONLY,
    },
    quotation_date: {
      type: DataTypes.DATEONLY,
    },
    quotation_v_no: {
      type: DataTypes.STRING(50),
    },
    closure_target: {
      type: DataTypes.DATEONLY,
    },
    quotation_value: {
      type: DataTypes.DECIMAL(15, 2),
    },
    lead_source: {
      type: DataTypes.ENUM("website", "referral", "advertisement", "event"),
    },
  },
  {
    tableName: "marketing_funnel_review", // your DB table name
    timestamps: false, // since we are using manual dates
  }
);

export default MarketingFunnelReview;
