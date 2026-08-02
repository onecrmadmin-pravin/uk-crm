import express from "express";
import {
  addStage,
  fetchStages,
} from "../controllers/stage.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

/**
 * @route   POST /api/stages
 * @desc    Create stage (Protected)
 */
// router.post("/", protect, addStage);
router.post("/", addStage);
/**
 * @route   GET /api/stages
 * @desc    Get all stages (Protected)
 */
// router.get("/", protect, fetchStages);
router.get("/",fetchStages);
export default router;//useed to add and fetch all stages