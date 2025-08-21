const Joi = require('joi');

const registerData = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  department: Joi.string().min(2).max(50),
  password: Joi.string().min(6).required(),
  role: Joi.string().optional(),
}).required();

module.exports = { registerData };
