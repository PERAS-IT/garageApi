const catchError = require("../utility/catch-error");
const historyService = require("../service/history-service");

exports.getHistory = catchError(async (req, res, next) => {
  console.log("+++++++++++*****req.body++++", req.params);
  const result = await historyService.searchHistory(req.params);
  res.status(200).json({ result });
});

exports.editHistory = catchError(async (req, res, next) => {});
