import helmet from "helmet";//used to protect this from commom web attack
import cors from "cors";
//this cors is cross origin resource sharing allow the frontend and backend to comminucate even if they are on different port
/**
 * @desc Security Middleware Setup
 */
export const securityMiddleware = (app) => {
  // Helmet for secure headers
  app.use(helmet());

  // CORS config
  app.use(
    cors({
      origin: process.env.FRONTEND_URL,
      credentials: true,
    })
  );
};// this origin is allowed to share transaction only on the frontend url