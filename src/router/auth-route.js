const express = require("express");
const {
  validateRegister,
  validateLogin,
  validateAdminRegister,
  validateLoginAdmin,
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
authRouter.post("/login/admin", validateLoginAdmin, loginAdminController);
module.exports = authRouter;
