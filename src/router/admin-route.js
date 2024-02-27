const express = require("express");
const adminCtrl = require("../controllers/admin-controller");

const adminRoute = express.Router();

adminRoute.post("/history/:orderId", adminCtrl.createHistory);

adminRoute.patch("/reject/:orderId", adminCtrl.updateRejectController);
adminRoute.patch("/receive/:orderId", adminCtrl.updateReceiveController);
adminRoute.patch("/service/:orderId", adminCtrl.updateServiceController);
adminRoute.patch("/complete/:orderId", adminCtrl.updateCompleteController);
adminRoute.patch("/:orderId", adminCtrl.editStatus);

// get list router
adminRoute.get("/getAllRequestList", adminCtrl.getAllRequestListCtrl);
adminRoute.get("/getAllServiceList", adminCtrl.getAllServiceListCtrl);
adminRoute.get("/getAllCompleteList", adminCtrl.getAllCompleteListCtrl);

//get data 7 day
adminRoute.get("/getRequestInSevenDay", adminCtrl.getRequestSevenDayCtrl);
adminRoute.get("/getServiceInSevenDay", adminCtrl.getServiceSevenDayCtrl);
adminRoute.get("/getCompleteInSevenDay", adminCtrl.getCompleteSevenDayCtrl);

adminRoute.get("/:startDate/:endDate", adminCtrl.searchOrderCtrl);

module.exports = adminRoute;
