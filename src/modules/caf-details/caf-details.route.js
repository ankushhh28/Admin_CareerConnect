const ValidationMiddleware = require("../../middlewares/validation.middleware");
const express = require("express");
const cafController = require("./caf-details.controller");
const { cafData } = require("./caf-details.schema");

const router = express.Router();

router.post(
  "/add-caf-details",
  ValidationMiddleware(cafData),
  cafController.addCafDetails
);

module.exports = router;
