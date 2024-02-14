const validate = require("./validator");

const Joi = require("joi");

const registerSchema = Joi.object({
  firstName: Joi.string().required().trim().messages({
    "string.empty": "First Name is required",
  }),
  lastName: Joi.string().required().trim().messages({
    "string.empty": "Last Name is required",
  }),
  email: Joi.string().required().email({ tlds: false }).messages({
    "string.empty": "email is required",
    "any.require": "email is required ",
  }),

  phoneNumber: Joi.string()
    .required()
    .pattern(/^[0-9]{10}/)
    .messages({
      "string.empty": "mobile is required",
      "string.pattern.base": "mobile should 10 and contain only Number",
    }),

  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,}$/)
    .required()
    .messages({
      "string.empty": "password is required",
      "string.pattern.base":
        "Password must be least 6 characters and contain only alphabet",
    }),
});

const registerAdminSchema = Joi.object({
  userName: Joi.string().required().messages({
    "string.empty": "user name is required",
    "any.require": "user name is required",
  }),
  password: Joi.string()
    .pattern(/^[a-zA-z0-9]{6,}$/)
    .required()
    .messages({
      "string.empty": "password is required",
      "string.pattern.base":
        "Password must be least 6 characters and contain only alphabet",
    }),
});

const loginSchema = Joi.object({
  emailOrPhoneNumber: Joi.string().required().messages({
    "string.empty": "email or Phone Number is required",
    "any.required": "email or Phone Number is required",
  }),
  password: Joi.string().required().messages({
    "string.empty": "password is required",
    "any.required": "password is required",
  }),
});

exports.validateRegister = validate(registerSchema);
exports.validateAdminRegister = validate(registerAdminSchema);
exports.validateLogin = validate(loginSchema);
