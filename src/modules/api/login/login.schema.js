const joi = require('joi');

const loginData = joi
  .object({
    email: joi.string().required(),
    password: joi.string().required(),
  })
  .required();

module.exports = { loginData };
