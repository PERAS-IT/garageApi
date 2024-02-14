const hashService = require("../service/hash-service");
const userService = require("../service/user-service");
const createError = require("../utility/create-error");
const jwtService = require("../service/jwt-service");
const catchError = require("../utility/catch-error");

exports.registerController = catchError(async (req, res, next) => {
  const existEmail = await userService.findUserByEmail(req.body.email);
  if (existEmail) {
    createError("EMAIL_IN_USE ", 400);
  }
  const existPhoneNumber = await userService.findUserByPhoneNumber(
    req.body.phoneNumber
  );

  if (existPhoneNumber) {
    createError("PHONE_IN_USE", 400);
  }

  req.body.password = await hashService.hash(req.body.password);

  const newUser = await userService.createUser(req.body);
  const payload = { userId: newUser.id };
  const accessToken = jwtService.sign(payload);
  delete newUser.password;
  console.log(newUser);

  res.status(201).json({ accessToken, newUser });
});
