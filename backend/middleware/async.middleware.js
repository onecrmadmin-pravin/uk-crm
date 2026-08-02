/**
 * @desc Async wrapper to handle errors centrally
 */
//this will accept the function as argument to the handler
//this next passes error to the next middleware
export const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((err) => {
      // ensure statusCode exists
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);//this passes error to the global error handling middleware
    });
  };
};