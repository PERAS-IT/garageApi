const catchError = require("../utility/catch-error");

exports.createServiceRequest = catchError((req, res, next) => {
  const data = req.body;
  data.vehicleId = req.params;
});
