const prisma = require("../model/prisma");

exports.createCar = (data) => prisma.vehicle.create({ data });

exports.findCarByUserId = async (userId) => {
  const cars = await prisma.vehicle.findMany({
    where: {
      userId: {
        userId,
      },
      deletedAt: null,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return cars;
};
