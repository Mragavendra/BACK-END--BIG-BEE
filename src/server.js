import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import { pool } from "./config/db.js";

import leadTypeRoutes from "./routes/leadType.routes.js";
import designationRoutes from './routes/designation.routes.js';
import departmentRoutes from './routes/department.routes.js';
import leadSourceRoutes from './routes/leadSource.routes.js';


dotenv.config();
const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN?.split(",") || "*" }));
app.use(express.json());

// Health check
app.get("/health", async (_, res) => {
  try {
    const [r] = await pool.query("SELECT 1+1 AS two");
    res.json({ ok: true, db: r[0].two === 2 });
  } catch {
    res.status(500).json({ ok: false, db: false });
  }
});

app.use("/api/auth", authRoutes);
app.use("/api/lead-types", leadTypeRoutes);
app.use('/api/designations', designationRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/lead-sources', leadSourceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
