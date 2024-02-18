const prisma = require("../model/prisma");

exports.createService = async (data) => await prisma.order.create({ data });
