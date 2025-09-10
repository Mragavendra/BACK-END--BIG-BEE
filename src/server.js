import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import { pool } from "./config/db.js";

import leadTypeRoutes from "./routes/leadType.routes.js";
import designationRoutes from './routes/designation.routes.js';
import departmentRoutes from './routes/department.routes.js';
import leadSourceRoutes from './routes/leadSource.routes.js';
import categoryRoutes from "./routes/category.routes.js";
import actionRoutes from "./routes/action.routes.js";
import statusRoutes from "./routes/status.routes.js";
import followupModeRoutes from "./routes/followupMode.routes.js";
import companyRoutes from "./routes/company.routes.js";
import serviceRoutes from "./routes/service.routes.js";
import campaignTypeRoutes from "./routes/campaignType.routes.js";
import typeOfAdvertisingRoutes from "./routes/typeOfAdvertising.routes.js";
import marketingChannelRoutes from "./routes/marketingChannel.routes.js";
import employeeRoutes from './routes/employee.routes.js';
import leadRoutes from "./routes/lead.routes.js";
import funnelTrackerRoutes from "./routes/funnelTrackerRoutes.js";
import orderRoutes from "./routes/order.routes.js";
import performanceRoutes from "./routes/performanceMis.routes.js";



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
app.use("/api/categories", categoryRoutes);
app.use("/api/actions", actionRoutes);
app.use("/api/status", statusRoutes);
app.use("/api/followup-modes", followupModeRoutes);
app.use("/api/company", companyRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/campaign-types", campaignTypeRoutes);
app.use("/api/type-of-advertising", typeOfAdvertisingRoutes);
app.use("/api/marketing-channels", marketingChannelRoutes);
app.use('/api/employees', employeeRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/funnel-tracker", funnelTrackerRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/performance", performanceRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
