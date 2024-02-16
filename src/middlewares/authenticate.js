const createError = require("../utility/create-error");
const catchError = require("../utility/catch-error");
const jwtService = require("../service/jwt-service");
const userService = require("../service/user-service");

const authenticate = catchError(async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization || !authorization.startsWith("Bearer ")) {
    createError("invalid authorization header", 401);
  }
  const token = authorization.split(" ")[1];
  const decodePayload = jwtService.verify(token);
  const user = await userService.findUserById(decodePayload.userId);
  if (!user) {
    createError("user was not found", 401);
  }
  delete user.password;
  req.user = user;
  next();
});

module.exports = authenticate;
