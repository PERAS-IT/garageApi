const prisma = require("../model/prisma");

exports.findAdminByUserName = (userName) => {
  return prisma.admin.findFirst({
    where: {
      userName: userName,
    },
  });
};

exports.findAdminById = (id) => {
  return prisma.admin.findFirst({
    where: {
      id,
    },
  });
};

exports.createAdmin = (data) => {
  return prisma.admin.create({ data });
};
