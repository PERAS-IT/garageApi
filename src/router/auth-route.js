const express = require("express");
const {
  validateRegister,
  validateLogin,
  validateAdminRegister,
} = require("../middlewares/validator/validate-auth");
const {
  registerController,
  loginController,
  loginAdminController,
  registerAdminController,
} = require("../controllers/auth-controller");

const authRouter = express.Router();

authRouter.post("/register", validateRegister, registerController);
authRouter.post(
  "/register/admin",
  validateAdminRegister,
  registerAdminController
);
authRouter.post("/login", validateLogin, loginController);
authRouter.post("/login/admin", validateLogin, loginAdminController);
module.exports = authRouter;
