const express = require("express");
const {
  validateRegister,
  validateLogin,
} = require("../middlewares/validator/validate-auth");
const {
  registerController,
  loginController,
} = require("../controllers/auth-controller");

const authRouter = express.Router();

authRouter.post("/register", validateRegister, registerController);
authRouter.post("/login", validateLogin, loginController);
module.exports = authRouter;
