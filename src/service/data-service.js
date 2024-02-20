const { object } = require("joi");
const prisma = require("../model/prisma");

exports.findDataRequestAll = async () => {
  const result = await prisma.order.findMany({
    where: {
      approveAt: null,
    },
    include: {
      vehicle: true,
    },
  });
  return result;
};

exports.findDataServiceAll = async () => {
  const result = await prisma.order.findMany({
    where: {
      approveAt: { not: null },
      serviceCompleteAt: null,
    },
    include: {
      vehicle: true,
    },
  });
  return result;
};

exports.findDataCompleteAll = async () => {
  const result = await prisma.order.findMany({
    where: {
      serviceCompleteAt: { not: null },
      completeAt: null,
    },
    include: {
      vehicle: true,
    },
  });
  return result;
};

exports.findDataSevenDayRequest = async () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const sevenDayAgo = new Date(today);
  sevenDayAgo.setDate(tomorrow.getDate() - 7);

  const dataWithInSevenDay = await prisma.order.findMany({
    where: {
      createdAt: {
        gte: sevenDayAgo,
        lte: tomorrow,
      },
    },
  });
  const summary = {};
  dataWithInSevenDay.forEach((data) => {
    const date = data.createdAt.toISOString().split("T")[0];
    if (!summary[date]) {
      summary[date] = 0;
    }
    summary[date] += 1;
  });
  const arrSummary = Object.entries(summary).map(([date, total]) => ({
    date,
    total,
  }));
  console.log(arrSummary);
  return arrSummary;
};

exports.findDataSevenDayService = async () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const sevenDayAgo = new Date(today);
  sevenDayAgo.setDate(tomorrow.getDate() - 7);

  const dateWithInSevenDay = await prisma.order.findMany({
    where: {
      approveAt: {
        gte: sevenDayAgo,
        lte: tomorrow,
      },
    },
  });

  const summary = {};
  dateWithInSevenDay.forEach((data) => {
    const date = data.createdAt.toISOString().split("T")[0];
    if (!summary[date]) {
      summary[date] = 0;
    }
    summary[date] += 1;
  });
  const arrSummary = Object.entries(summary).map(([date, total]) => ({
    date,
    total,
  }));
  console.log(arrSummary);
  return arrSummary;
};

exports.findDataSevenDayService = async () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const sevenDayAgo = new Date(today);
  sevenDayAgo.setDate(tomorrow.getDate() - 7);

  const dateWithInSevenDay = await prisma.order.findMany({
    where: {
      approveAt: {
        gte: sevenDayAgo,
        lte: tomorrow,
      },
    },
  });
  const summary = {};
  dateWithInSevenDay.forEach((data) => {
    const date = data.approveAt.toISOString().split("T")[0];
    if (!summary[date]) {
      summary[date] = 0;
    }
    summary[date] += 1;
  });
  const arrSummary = Object.entries(summary).map(([date, total]) => ({
    date,
    total,
  }));
  console.log(arrSummary);
  return arrSummary;
};

exports.findDataSevenDayComplete = async () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const sevenDayAgo = new Date(today);
  sevenDayAgo.setDate(tomorrow.getDate() - 7);

  const dateWithInSevenDay = await prisma.order.findMany({
    where: {
      serviceCompleteAt: {
        gte: sevenDayAgo,
        lte: tomorrow,
      },
    },
  });

  const summary = {};
  dateWithInSevenDay.forEach((item) => {
    const date = item.serviceCompleteAt.toISOString().split("T")[0];
    if (!summary[date]) {
      summary[date] = 0;
    }
    summary[date] += 1;
  });
  const arrSummary = Object.entries(summary).map(([date, total]) => ({
    date,
    total,
  }));
  console.log(arrSummary);
  return arrSummary;
};
