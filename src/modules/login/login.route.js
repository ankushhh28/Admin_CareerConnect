const express = require("express");
const loginController = require("./login.controller");
const ValidationMiddleware = require("../../middlewares/validation.middleware");
const { loginData } = require("./login.schema");

const router = express.Router();

router.post("/", ValidationMiddleware(loginData), loginController.login);

module.exports = router;
