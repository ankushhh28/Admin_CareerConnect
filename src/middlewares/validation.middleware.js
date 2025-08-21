function ValidationMiddleware(schema) {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      allowUnknown: true,
      convert: true,
    });

    if (error) {
      const details = error.details?.map((d) => d.message) || [error.message];

      return res.status(400).json({
        status: 'error',
        statusCode: 400,
        message: details.join(', '),
      });
    }

    Object.assign(req, value);
    return next();
  };
}

module.exports = ValidationMiddleware;
