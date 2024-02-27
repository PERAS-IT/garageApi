const express = require("express");
const serviceController = require("../controllers/service-controller");
const searchOrder = require("../service/search-service");

const routerService = express.Router();

routerService.post("/:carId", serviceController.createServiceRequest);

module.exports = routerService;
