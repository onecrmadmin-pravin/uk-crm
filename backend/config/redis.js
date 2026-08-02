import IORedis from "ioredis";//import package
import { logger } from "../utils/logger.js";//custom logger instead of console.log everytome

let redis = null;
//null cause cant connected yet
/**
 * @desc Initialize Redis safely and creating asychronous function to connect to redis
 */
export const initRedis = async () => {
  try {
    if (!process.env.REDIS_URL) {
      logger.warn("Redis URL not provided, skipping Redis");
      return null;
    }
// this above if is checking is redis url is working or skip this otherwise

// in below create client with redis url 
    const client = new IORedis(process.env.REDIS_URL, {
      maxRetriesPerRequest: 2,//max retry is 2
      enableReadyCheck: true,//check if redis is available of not before each try

      // below line control number of attempt if redis is disconnects
      retryStrategy: (times) => {
        if (times > 3) return null;// stpop trying after three attempts
        return Math.min(times * 1000, 3000);// wait in span of 100 to 300 seconds
      },
    });

    client.on("connect", () => {
      logger.info("Redis connected");
    });

    client.on("error", (err) => {
      logger.error("Redis error", err.message);
    });

    // test connection
    await client.ping();

    redis = client;
    return redis;
  } catch (err) {
    logger.warn("Redis not available, continuing without Redis");
    redis = null;
    return null;
  }
};

export default redis;