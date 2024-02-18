const fs = require("fs/promises");
const carService = require("../service/car-service");
const uploadService = require("../service/upload-service");
const catchError = require("../utility/catch-error");
const { ok } = require("assert");

exports.createCar = catchError(async (req, res, next) => {
  const data = JSON.parse(req.body.data);
  data.userId = req.user.id;

  if (req.file) {
    data.image = await uploadService.upload(req.file.path);
  }
  const car = await carService.createCar(data);
  fs.unlink(req.file.path);
  res.status(201).json({ car });
});

exports.getCarByUserId = catchError(async (req, res, next) => {
  const cars = await carService.findCarByUserId(req.user.id);
  res.status(200).json({ cars });
});

exports.softDeleteCarByCarId = catchError(async (req, res, next) => {
  const car = await carService.deleteByCarId(+req.params.carId);
  res.status(200).json({ message: "Car Delete Success" });
});

exports.editCarByCarId = catchError(async (req, res, next) => {
  const data = req.body;
  console.log(data);
  const car = await carService.editCarByCarId(+req.params.carId, data);
  res.status(200).json({ car });
});
