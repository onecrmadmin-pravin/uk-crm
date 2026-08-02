import express from "express";
import {
  addCompany,
  fetchCompanies,
} from "../controllers/company.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

/**
 * @route   POST /api/companies
 * @desc    Create company (Protected)
 */
// router.post("/", protect, addCompany);
router.post("/", addCompany);
/**
 * @route   GET /api/companies
 * @desc    Get all companies (Protected)
 */
// router.get("/", protect, fetchCompanies);
router.get("/",fetchCompanies);
export default router;//just used protect in order to check user is present or not 