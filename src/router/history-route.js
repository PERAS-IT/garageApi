const express = require("express");
const historyCtrl = require("../controllers/history-controller");
const historyRouter = express.Router();

// historyRouter.post("/:orderId", historyCtrl.createHistory);
historyRouter.get("/:startDate/:endDate", historyCtrl.getHistory);

module.exports = historyRouter;
