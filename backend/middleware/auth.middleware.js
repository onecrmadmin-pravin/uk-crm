import { verifyAccessToken } from "../utils/token.js";

/**
 * @desc Protect routes using JWT (cookie-based)
 */
//this create the protect middleware and run before the protected routes
export const protect = (req, res, next) => {
  try {
    const token = req.cookies?.accessToken;//this will extract the token from brouser 

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized - No token",
      });
    }

    const decoded = verifyAccessToken(token);
//nelow line create and this will create user object that can used in anu middleware and controller 
    req.user = {
      id: decoded.id,
      role: decoded.role,
    };

    next();//passes to next controller and middleware
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized - Invalid or expired token",
    });
  }
};