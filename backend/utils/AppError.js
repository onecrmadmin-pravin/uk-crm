/**
 * @desc Custom Application Error Class
 */
class AppError extends Error {
  constructor(message, statusCode = 500) {
//this is the new AppError("server error",500)
    super(message);// this send msg to original error class

    this.statusCode = statusCode;//check the status code like 404 400 500 etc
    this.isOperational = true;//this indicates that this is the expected app error 

    Error.captureStackTrace(this, this.constructor);//this is track of error which is used to locate error in which file
  }
}

export default AppError;