const catchError = require("../utility/catch-error");
const createError = require("../utility/create-error");
const requestService = require("../service/request-service");

exports.createServiceRequest = catchError(async (req, res, next) => {
  req.body.mileStoneNumber = +req.body.mileStoneNumber;
  const data = req.body;
  data.vehicleId = +req.params.carId;
  if (!data) createError("request data for booking", 400);
  const result = await requestService.createService(data);
  res.status(200).json({ result });
});
