import { DataTypes } from 'sequelize';
import { sequelize } from "../config/sequelize.js";

export const Employee = sequelize.define('Employee', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  employee_id: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  full_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  mobile_number: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  address_line1: DataTypes.STRING(255),
  landmark: DataTypes.STRING(255),
  street: DataTypes.STRING(255),
  state: DataTypes.STRING(100),
  city: DataTypes.STRING(100),
  pincode: DataTypes.STRING(20),
  department: {
    type: DataTypes.ENUM('Sales', 'Marketing', 'HR', 'Finance', 'IT'),
    allowNull: false,
  },
  designation: {
    type: DataTypes.ENUM('Intern', 'Junior', 'Senior', 'Manager', 'Director'),
    allowNull: false,
  },
  reports_to: {
    type: DataTypes.ENUM('John Doe', 'Jane Smith', 'Robert Brown', 'Alice Johnson', 'Michael Lee'),
    allowNull: false,
  },
  date_of_joining: DataTypes.DATEONLY,
  notes: {
    type: DataTypes.ENUM('Note 1', 'Note 2', 'Note 3', 'Note 4', 'Note 5'),
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  tableName: 'employees',
  timestamps: true, // createdAt, updatedAt
});
