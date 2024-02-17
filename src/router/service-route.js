const express = require("express");

const routerService = express.Router();

routerService.post("/:carId");

module.exports = routerService;
