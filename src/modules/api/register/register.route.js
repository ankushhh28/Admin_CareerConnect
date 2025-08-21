const express = require('express');
const registerController = require('./register.controller');
const ValidationMiddleware = require('../../../middlewares/validation.middleware');
const { registerData } = require('./register.schema');

const router = express.Router();

router.post(
  '/',
  ValidationMiddleware(registerData),
  registerController.register
);

module.exports = router;
