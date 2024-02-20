const catchError = require("../utility/catch-error");
const createError = require("../utility/create-error");
const requestService = require("../service/request-service");
const updateService = require("../service/update-service");
const dataService = require("../service/data-service");

exports.createServiceRequest = catchError(async (req, res, next) => {
  req.body.mileStoneNumber = +req.body.mileStoneNumber;
  const data = req.body;
  data.vehicleId = +req.params.carId;
  if (!data) createError("request data for booking", 400);
  const result = await requestService.createService(data);
  res.status(200).json({ result });
});

exports.updateRejectController = catchError(async (req, res, next) => {
  await updateService.updateReject(+req.params.orderId, req.admin.id);
  res.status(200).json({ message: "Reject Success" });
});

exports.updateReceiveController = catchError(async (req, res, next) => {
  await updateService.updateReceive(+req.params.orderId, req.admin.id);
  res.status(200).json({ message: "update Receive Success" });
});

exports.updateServiceController = catchError(async (req, res, next) => {
  await updateService.updateServiceComplete(+req.params.orderId, req.admin.id);
  res.status(200).json({ message: "update Service Success" });
});

exports.updateCompleteController = catchError(async (req, res, next) => {
  await updateService.updateComplete(+req.params.orderId, req.admin.id);
  res.status(200).json({ message: "update Complete Success" });
});

// get data
exports.getAllRequestListCtrl = catchError(async (req, res, next) => {
  const result = await dataService.findDataRequestAll();

  res.status(200).json({ result });
});
exports.getAllServiceListCtrl = catchError(async (req, res, next) => {
  const result = await dataService.findDataServiceAll();
  res.status(200).json({ result });
});
exports.getAllCompleteListCtrl = catchError(async (req, res, next) => {
  const result = await dataService.findDataCompleteAll();
  res.status(200).json({ result });
});

//get data sevenDay
exports.getRequestSevenDayCtrl = catchError(async (req, res, next) => {
  const result = await dataService.findDataSevenDayRequest();
  res.status(200).json({ result });
});
exports.getServiceSevenDayCtrl = catchError(async (req, res, next) => {
  const result = await dataService.findDataSevenDayService();
  res.status(200).json({ result });
});
exports.getCompleteSevenDayCtrl = catchError(async (req, res, next) => {
  const result = await dataService.findDataSevenDayComplete();
  res.status(200).json({ result });
});
