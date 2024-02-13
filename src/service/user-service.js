const prisma = require("../model/prisma");

exports.findUserByEmail = (email) => {
  prisma.user.findFirst({
    where: {
      email: email,
    },
  });
};

exports.findUserByPhoneNumber = (phoneNumber) => {
  prisma.user.findFirst({
    where: {
      phoneNumber: phoneNumber,
    },
  });
};

exports.createUser = (user) => prisma.user.create({ user });
