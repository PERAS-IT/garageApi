const prisma = require("../model/prisma");

exports.findUserByEmail = (email) => {
  return prisma.user.findUnique({
    where: {
      email: email,
    },
  });
};

exports.findUserByPhoneNumber = (phoneNumber) => {
  return prisma.user.findUnique({
    where: {
      phoneNumber: phoneNumber,
    },
  });
};

exports.createUser = (data) => prisma.user.create({ data });

exports.findUserByEmailOrPhoneNumber = (emailOrPhoneNumber) => {
  console.log(emailOrPhoneNumber);
  return prisma.user.findFirst({
    where: {
      OR: [{ email: emailOrPhoneNumber }, { phoneNumber: emailOrPhoneNumber }],
    },
  });
};
