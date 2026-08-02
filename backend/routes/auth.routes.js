import express from "express";
import {
  register,
  login,
  refreshToken,
  logout,
  me,
  changePassword,
} from "../controllers/auth.controller.js";

import { protect } from "../middleware/auth.middleware.js";//checking user coockies and verify the access token
import { validate } from "../middleware/validate.middleware.js";//validating jooi schema using this 
import { authLimiter } from "../middleware/rateLimit.middleware.js";//file is used to set limit using ratelimiting 
import {
  registerSchema,
  loginSchema,
} from "../validators/auth.validator.js";

const router = express.Router();

/**
 * @route   POST /api/auth/register
 */
router.post(
  "/register",
  authLimiter,
  validate(registerSchema),
  register
);

/**
 * @route   POST /api/auth/login
 */
router.post(
  "/login",
  authLimiter,
  validate(loginSchema),
  login
);

/**
 * @route   POST /api/auth/refresh
 */
router.post("/refresh", refreshToken);

/**
 * @route   POST /api/auth/logout
 */
// router.post("/logout", protect, logout);
router.post("/logout", logout);
/**
 * @route   GET /api/auth/me
 */
// router.get("/me", protect, me);
router.get("/me", me);
/**
 * @route   POST /api/auth/change-password
 */
// router.post("/change-password", protect, changePassword);
router.post("/change-password", changePassword);
export default router;