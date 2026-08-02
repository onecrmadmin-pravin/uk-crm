/**
 * @desc Validate request using Joi schema
 */
export const validate = (schema) => {
  return (req, res, next) => {
    try {
      const { error, value } = schema.validate(req.body, {
        abortEarly: false,//this tell joi to not stop as first error
        stripUnknown: true,
      });

      if (error) {
        const message = error.details.map((d) => d.message).join(", ");//collect all errro msg all at once 
        return res.status(400).json({
          success: false,
          message,
        });
      }

      req.body = value;
      next();
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Validation error",
      });
    }
  };
};