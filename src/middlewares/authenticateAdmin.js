const createError = require("../utility/create-error");
const catchError = require("../utility/catch-error");
const jwtService = require("../service/jwt-service");
const adminService = require("../service/admin-service");

const authenticateAdmin = catchError(async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization || !authorization.startsWith("Bearer ")) {
    createError("invalid authorization header", 401);
  }
  const token = authorization.split(" ")[1];
  const decodePayload = jwtService.verify(token);

  const admin = await adminService.findAdminById(decodePayload.userId);
  if (!admin) {
    createError("admin was not found", 401);
  }
  delete admin.password;
  req.admin = admin;
  console.log(req.admin);
  next();
});

module.exports = authenticateAdmin;
