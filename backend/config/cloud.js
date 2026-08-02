import { v2 as cloudinary } from "cloudinary";
//this is the cloudinary setup for online storage
//
//import is used to bring code from another package or file.
// "cloudinary" is the official Cloudinary Node.js package.
// v2 is the latest API version of Cloudinary.
// as cloudinary renames v2 to cloudinary so you can use it easily in your code.
import dotenv from "dotenv";
// This imports the dotenv package.

// dotenv loads environment variables from a .env file into process.env.

// Without dotenv, your application cannot read values like:

// CLOUDINARY_CLOUD_NAME=abcd
// CLOUDINARY_API_KEY=123456
// CLOUDINARY_API_SECRET=xyz789


dotenv.config();
// This tells dotenv to load the .env file.
/**
 * @desc Cloudinary Configuration
 */
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
//this are the cloudinary setup
export default cloudinary;