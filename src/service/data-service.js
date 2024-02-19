const prisma = require("../model/prisma");

exports.findDataRequestAll = async () => {
  const result = await prisma.order.findMany({
    where: {
      approveAt: null,
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
  });
  return result;
};

exports.findDataCompleteAll = async () => {
  const result = await prisma.order.findMany({
    where: {
      serviceCompleteAt: { not: null },
      completeAt: null,
    },
  });
  return result;
};
