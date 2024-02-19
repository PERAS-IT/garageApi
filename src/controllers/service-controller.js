const catchError = require("../utility/catch-error");
const createError = require("../utility/create-error");
const requestService = require("../service/request-service");
const updateService = require("../service/update-service");

exports.createServiceRequest = catchError(async (req, res, next) => {
  req.body.mileStoneNumber = +req.body.mileStoneNumber;
  const data = req.body;
  data.vehicleId = +req.params.carId;
  if (!data) createError("request data for booking", 400);
  const result = await requestService.createService(data);
  res.status(200).json({ result });
});

exports.updateReceiveController = catchError(async (req, res, next) => {
  await updateService.updateReceive(req.params, req.body.adminId);
  res.status(200).json({ message: "update Receive Success" });
});

exports.updateServiceController = catchError(async (req, res, next) => {
  await updateService.updateServiceComplete(req.params, req.body.adminId);
  res.status(200).json({ message: "update Service Success" });
});

exports.updateCompleteController = catchError(async (req, res, next) => {
  await updateService.updateComplete(req.params);
  res.status(200).json({ message: "update Complete Success" });
});

exports.getAllRequestListCtrl = catchError(async (req, res, next) => {});
exports.getAllServiceListCtrl = catchError(async (req, res, next) => {});
exports.getAllCompleteListCtrl = catchError(async (req, res, next) => {});

exports.getRequestSevenDayCtrl = catchError(async (req, res, next) => {});
exports.getServiceSevenDayCtrl = catchError(async (req, res, next) => {});
exports.getCompleteSevenDayCtrl = catchError(async (req, res, next) => {});
