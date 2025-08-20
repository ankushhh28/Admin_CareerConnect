const boom = require('@hapi/boom');

function ValidationMiddleware(schema) {
  return (req, res, next) => {
    const { error, value } = schema.validate(req, {
      allowUnknown: true,
      convert: true,
    });

    if (error) {
      return boom.badRequest(error.message);
    }

    Object.assign(req, value);
    return next();
  };
}

module.exports = ValidationMiddleware;
