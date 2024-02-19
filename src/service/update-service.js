const prisma = require("../model/prisma");

exports.updateReceive = async (carId, adminId) => {
  const result = await prisma.order.update({
    where: {
      id: carId,
    },
    data: {
      adminId: adminId,
      approveAt: new Date(),
      statusOrder: "In Service",
    },
  });
  return result;
};

exports.updateServiceComplete = async (orderId, adminId) => {
  const result = await prisma.order.update({
    where: {
      id: orderId,
    },
    data: {
      adminId: adminId,
      statusOrder: "wait receive",
    },
  });
  return result;
};

exports.updateComplete = async (orderId, adminId) => {
  const result = await prisma.order.update({
    where: {
      id: orderId,
    },
    data: {
      adminId: adminId,
      statusOrder: "complete",
    },
  });
  return result;
};
