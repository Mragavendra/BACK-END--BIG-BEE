// src/routes/typeOfAdvertising.routes.js
import express from "express";
import {
  createTypeOfAdvertising,
  getAllTypesOfAdvertising,
  getTypeOfAdvertisingById,
  updateTypeOfAdvertising,
  deleteTypeOfAdvertising,
} from "../controllers/typeOfAdvertising.controller.js";

const router = express.Router();

router.post("/create", createTypeOfAdvertising);
router.get("/", getAllTypesOfAdvertising);
router.get("/:id", getTypeOfAdvertisingById);
router.put("/:id", updateTypeOfAdvertising);
router.delete("/:id", deleteTypeOfAdvertising);

export default router;
