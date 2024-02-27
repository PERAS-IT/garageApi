const express = require("express");
const carController = require("../controllers/cars-controller");
const upload = require("../middlewares/upload");
const authenticate = require("../middlewares/authenticate");
const carsRouter = express.Router();

carsRouter.post("/", upload.single("image"), carController.createCar);
carsRouter.get("/", authenticate, carController.getCarByUserId);
carsRouter.patch("/:carId", carController.softDeleteCarByCarId);
carsRouter.put("/:carId", carController.editCarByCarId);
carsRouter.get("/:carId", carController.checkCarHistory);
module.exports = carsRouter;
