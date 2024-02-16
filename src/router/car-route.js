const express = require("express");
const carController = require("../controllers/cars-controller");
const upload = require("../middlewares/upload");

const carsRouter = express.Router();

carsRouter.post("/", upload.single("image"), carController.createCar);
carsRouter.get("/:userId");

module.exports = carsRouter;
