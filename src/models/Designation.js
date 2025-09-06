// models/Designation.js

import { DataTypes } from 'sequelize';
import { sequelize } from "../config/sequelize.js";

const Designation = sequelize.define('Designation', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  level: {
    type: DataTypes.ENUM('Intern', 'Junior', 'Senior', 'Manager', 'Director'),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
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
}, {
  tableName: 'designations',
  timestamps: false, // since you are manually handling created_at and updated_at
});

export default Designation;
