const hashService = require("../service/hash-service");
const userService = require("../service/user-service");
const adminService = require("../service/admin-service");
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

exports.registerAdminController = catchError(async (req, res, next) => {
  console.log(req.body);
  const existAdmin = await adminService.findAdminByUserName(req.body.userName);
  if (existAdmin) {
    createError("Admin in use", 400);
  }
  req.body.password = await hashService.hash(req.body.password);
  await adminService.createAdmin(req.body);
  res.status(200).json({ message: "create Admin success" });
});

exports.loginController = catchError(async (req, res, next) => {
  const existUser = await userService.findUserByEmailOrPhoneNumber(
    req.body.emailOrPhoneNumber
  );
  if (!existUser) {
    createError("invalid credential", 400);
  }
  const isMatchPass = await hashService.compare(
    req.body.password,
    existUser.password
  );
  if (!isMatchPass) {
    createError("invalid credential", 400);
  }
  const payload = { userId: existUser.id };
  const accessToken = jwtService.sign(payload);
  delete existUser.password;
  res.status(200).json({ accessToken, user: existUser });
});

exports.loginAdminController = catchError(async (req, res, next) => {
  const existAdmin = await adminService.findAdminByUserName(req.body.userName);
  if (!existAdmin) {
    createError("invalid credential", 400);
  }
  const isMatchPass = await hashService.compare(
    req.body.password,
    existAdmin.password
  );
  if (!isMatchPass) {
    createError("invalid credential", 400);
  }
  const payload = { userId: existAdmin.id };
  const accessToken = jwtService.sign(payload);
  delete existAdmin.password;
  res.status(200).json({ accessToken, user: existAdmin });
});

exports.getMe = (req, res, next) => {
  console.log(req.user, req.admin);
  // if (req.admin) res.status(200).json({ admin: req.admin });
  if (req.user) res.status(200).json({ user: req.user });
};

exports.getAdmin = (req, res, next) => {
  res.status(200).json({ admin: req.admin });
};
