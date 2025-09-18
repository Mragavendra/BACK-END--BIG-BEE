// src/controllers/auth.controller.js
import { pool } from "../config/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    if (rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    await pool.query("INSERT INTO users (email, password) VALUES (?, ?)", [
      email,
      hashedPassword,
    ]);

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check user
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    if (rows.length === 0) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const user = rows[0];

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Determine role based on email
    let role = 'marketing'; // Default role
    if (email === 'admin@gmail.com') {
      role = 'admin';
    } else if (email === 'marketingteam@gmail.com') {
      role = 'marketing';
    } else if (email === 'businessanddevelopmentteam@gmail.com') {
      role = 'business_development';
    }
    // Add more email-based roles as needed

    // Sign token
    const token = jwt.sign(
      { 
        id: user.id, 
        role: role,
        email: email
      }, 
      process.env.JWT_SECRET, 
      {
        expiresIn: "1h",
      }
    );

    // Send role back in response
    res.json({ 
      message: "Login successful", 
      token: token,
      role: role,
      email: email
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};