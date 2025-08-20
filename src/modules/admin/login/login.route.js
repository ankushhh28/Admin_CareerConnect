const loginController = require('./login.controller');
const ValidationMiddleware = require('../../../middlewares/validation.middleware');
const loginSchema = require('./login.schema');

const router = require('express').Router();

router.post(
  '/',
  ValidationMiddleware(loginSchema.loginData),
  loginController.login
);

module.exports = router;
