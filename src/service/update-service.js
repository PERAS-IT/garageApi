const prisma = require("../model/prisma");

exports.updateReject = async (orderId, adminId) => {
  const result = await prisma.order.update({
    where: {
      id: orderId,
    },
    data: {
      adminId: adminId,
      approveAt: new Date(),
      statusOrder: "reject",
    },
  });
  return result;
};

exports.updateReceive = async (orderId, adminId) => {
  const result = await prisma.order.update({
    where: {
      id: orderId,
    },
    data: {
      adminId: adminId,
      approveAt: new Date(),
      statusOrder: "inService",
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
      serviceCompleteAt: new Date(),
      statusOrder: "waitingReceive",
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
      completeAt: new Date(),
      statusOrder: "complete",
    },
  });
  return result;
};

exports.editOrderByOrderId = async (orderId, data) => {
  const result = await prisma.order.update({
    where: {
      id: orderId,
    },
    data: {
      statusOrder: data.statusOrder,
      detailRequest: data.detailRequest,
      createdAt: data.createdAt,
      approveAt: data.approveAt,
      completeAt: data.completeAt,
      serviceCompleteAt: data.serviceCompleteAt,
    },
  });
};
