const prisma = require("../model/prisma");

exports.createCar = (data) => prisma.vehicle.create({ data });

exports.createOrder = (data) => prisma.order.create({ data });

exports.findCarByUserId = async (userId) => {
  const cars = await prisma.vehicle.findMany({
    where: {
      userId: {
        in: [userId],
      },
      deletedAt: null,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      orders: true,
    },
  });
  return cars;
};

exports.deleteByCarId = async (carId) => {
  const car = await prisma.vehicle.update({
    where: {
      id: carId,
    },
    data: {
      deletedAt: new Date(),
    },
  });
};
