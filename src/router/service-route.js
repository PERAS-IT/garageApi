const express = require("express");
const serviceController = require("../controllers/service-controller");

const routerService = express.Router();

routerService.post("/:carId", serviceController.createServiceRequest);
routerService.patch("/receive/:carId", serviceController.updateReceive);
routerService.patch(
  "/service/:carId",
  serviceController.updateServiceController
);
routerService.patch(
  "/complete/:carId",
  serviceController.updateCompleteController
);
module.exports = routerService;
