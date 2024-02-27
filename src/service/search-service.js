const prisma = require("../model/prisma");

exports.searchOrderData = (data) => {
  console.log(data);
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
