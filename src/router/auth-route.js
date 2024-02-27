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
  getMe,
  getAdmin,
} = require("../controllers/auth-controller");
const authenticate = require("../middlewares/authenticate");
const authenticateAdmin = require("../middlewares/authenticateAdmin");

const authRouter = express.Router();

authRouter.post("/register", validateRegister, registerController);
authRouter.post(
  "/register/admin",
  validateAdminRegister,
  registerAdminController
);
authRouter.post("/login", validateLogin, loginController);
authRouter.post("/login/admin", validateLoginAdmin, loginAdminController);
authRouter.get("/me", authenticate, getMe);
authRouter.get("/admin", authenticateAdmin, getAdmin);
module.exports = authRouter;
