const express = require("express");
const serviceController = require("../controllers/service-controller");

const routerService = express.Router();

routerService.post("/:carId", serviceController.createServiceRequest);

routerService.patch(
  "/reject/:orderId",
  serviceController.updateRejectController
);
routerService.patch(
  "/receive/:orderId",
  serviceController.updateReceiveController
);
routerService.patch(
  "/service/:orderId",
  serviceController.updateServiceController
);
routerService.patch(
  "/complete/:orderId",
  serviceController.updateCompleteController
);

// get list router
routerService.get(
  "/getAllRequestList",
  serviceController.getAllRequestListCtrl
);
routerService.get(
  "/getAllServiceList",
  serviceController.getAllServiceListCtrl
);
routerService.get(
  "/getAllCompleteList",
  serviceController.getAllCompleteListCtrl
);

//get data 7 day
routerService.get(
  "/getRequestInSevenDay",
  serviceController.getRequestSevenDayCtrl
);
routerService.get(
  "/getServiceInSevenDay",
  serviceController.getServiceSevenDayCtrl
);
routerService.get(
  "/getCompleteInSevenDay",
  serviceController.getCompleteSevenDayCtrl
);

module.exports = routerService;
