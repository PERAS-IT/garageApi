const prisma = require("../model/prisma");

exports.findAdminByUserName = (userName) => {
  return prisma.admin.findFirst({
    where: {
      userName: userName,
    },
  });
};

exports.createAdmin = (data) => {
  return prisma.admin.create({ data });
};
