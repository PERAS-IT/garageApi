const prisma = require("../model/prisma");

exports.searchOrderData = (data) => {
  const startDate = new Date(data.startDate);
  const endDate = new Date(data.endDate);
  return prisma.order.findMany({
    where: {
      createdAt: {
        gte: startDate,
        lte: endDate,
      },
    },
    include: {
      vehicle: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
};

// exports.searchHistoryData = () => {
//   return();
//}
