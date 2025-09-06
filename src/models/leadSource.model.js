// src/models/leadSource.model.js
import { DataTypes } from 'sequelize';
import { sequelize } from "../config/sequelize.js";

const LeadSource = sequelize.define(
  'LeadSource',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    type: {
      type: DataTypes.ENUM(
        'website',
        'referral',
        'social_media',
        'email_campaign',
        'event',
        'cold_call',
        'advertisement',
        'partner'
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
    tableName: 'lead_sources',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

export default LeadSource;
