const prisma = require("../model/prisma");
exports.createHistory = (data) => prisma.history.create({ data });

//for Admin
exports.searchHistory = async (data) => {
  console.log(data);
  const startDate = new Date(data.startDate);
  const endDate = new Date(data.endDate);
  console.log(startDate);
  const result = await prisma.history.findMany({
    where: {
      createdAt: {
        gte: startDate,
        lte: endDate,
      },
    },
    include: {
      order: {
        include: {
          vehicle: true,
        },
      },
    },
  });
  return result;
};

//for user
exports.checkHistory = (id) => {
  const result = prisma.vehicle.findMany({
    where: {
      id: id,
    },
    include: {
      orders: {
        include: {
          history: true,
        },
      },
    },
    orderBy: {
      orders: {
        id: "DESC",
      },
    },
  });
  return result;
};
