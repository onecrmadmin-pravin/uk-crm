import { logger } from "../utils/logger.js";

/**
 * @desc Global Error Handler
 */
export const errorHandler = (err, req, res, next) => {
  // log error
  logger.error(err.message, {
    stack: err.stack,//this will help to trace the error file and debugging
    url: req.originalUrl,//api endpoint where error happend
    method: req.method,//http method like get put ande push any
  });

  const statusCode = err.statusCode || 500;

  return res.status(statusCode).json({
    success: false,
    message: err.message || "Server Error",
  });
};// this will help to track and tracethe error