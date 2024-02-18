const prisma = require("../model/prisma");

exports.updateReceive = async (carId, adminId) => {
  await prisma.order.update({
    where: {
      id: carId,
    },
    data: {
      adminId: adminId,
      approveAt: new Date(),
      statusOrder: "In Service",
    },
  });
};

exports.updateServiceComplete = async (carId, adminId) => {
  await prisma.order.update({
    where: {
      id: carId,
    },
    data: {
      adminId: adminId,
      statusOrder: "wait receive",
    },
  });
};
