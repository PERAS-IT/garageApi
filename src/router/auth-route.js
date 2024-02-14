const express = require("express");
const { validateRegister } = require("../middlewares/validator/validate-auth");
const { registerController } = require("../controllers/auth-controller");

const authRouter = express.Router();

authRouter.post("/register", validateRegister, registerController);

module.exports = authRouter;
