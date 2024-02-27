const catchError = require("../utility/catch-error");
const createError = require("../utility/create-error");
const updateService = require("../service/update-service");
const dataService = require("../service/data-service");
const searchService = require("../service/search-service");
const prisma = require("../model/prisma");

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

exports.searchOrderCtrl = catchError(async (req, res, next) => {
  const result = await searchService.searchOrderData(req.params);
  res.status(200).json({ result });
});

exports.createHistory = catchError(async (req, res, next) => {
  const data = req.body;
  data.orderId = +req.params.orderId;
  console.log("data", data);
  await prisma.$transaction([
    prisma.history.create({ data }),

    prisma.order.update({
      where: {
        id: +req.params.orderId,
      },
      data: {
        adminId: req.admin.id,
        serviceCompleteAt: new Date(),
        statusOrder: "waitingReceive",
      },
    }),
  ]);
  //   await historyService.createHistory(data);
  res.status(200).json({ message: "CreateHistory success" });
});

exports.editStatus = catchError(async (req, res, next) => {
  await updateService.editOrderByOrderId(+req.params.orderId, req.body);
  res.status(200).json({ message: "update Success" });
});
