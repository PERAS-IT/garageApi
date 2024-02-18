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

exports.updateReceive = catchError(async (req, res, next) => {
  await updateService.updateReceive(req.params);
  res.status(200).json({ message: "update Receive Success" });
});

exports.updateServiceController = catchError(async (req, res, next) => {
  await updateService.updateServiceComplete(req.params);
  res.status(200).json({ message: "update Service Success" });
});

exports.updateCompleteController = catchError(async (req, res, next) => {
  await updateService.updateComplete(req.params);
});
