const joi = require('joi');

const loginData = joi.object({
  body: joi.object().keys({
    email: joi.string().required(),
    password: joi.string().required(),
  }),
});

module.exports = {
  loginData,
};
