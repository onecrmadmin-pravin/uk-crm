import rateLimit from "express-rate-limit";

/**
 * @desc Global API Rate Limiter
 */
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes for windows 
  max: 100, // limit each IP within 15 min
  standardHeaders: true,// send standerd header with each req responce like ratelimite reset how many remaining   
  legacyHeaders: false,// use only new standerd headers
  message: {
    success: false,
    message: "Too many requests, please try again later",
  },//default msg when rate limit exceeded
});

/**
 * @desc Strict Auth Rate Limiter (Login/Register)
 */
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many attempts, please try again later",
  },
});