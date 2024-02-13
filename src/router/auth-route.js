const express = require("express");
const { validateRegister } = require("../middlewares/validator/validate-auth");
const { registerController } = require("../controllers/auth-controller");

const router = express.Router();

router.post("./register", validateRegister, registerController);

module.exports = router;
