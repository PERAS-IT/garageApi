const fs = require("fs/promises");
const carService = require("../service/car-service");
const uploadService = require("../service/upload-service");
const catchError = require("../utility/catch-error");

exports.createCar = catchError(async (req, res, next) => {
  const data = JSON.parse(req.body.data);
  data.userId = req.user.id;

  if (req.file) {
    data.image = await uploadService.upload(req.file.path);
  }
  const car = await carService.createCar(data);
  fs.unlink(req.file.path);
  res.status(201).json({ message: "Create car Success" });
});

exports.getCarByUserId = catchError(async (req, res, next) => {
  const cars = await carService.findCarByUserId(req.user.id);
  res.status(200).json({ cars });
});
