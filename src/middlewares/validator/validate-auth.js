import validate from "./validator";
const Joi = require("joi");

export const registerSchema = Joi.object({
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
      "string.empty": "Pass is required",
      "string.pattern.base":
        "Password must be least 6 characters and contain only alphabet",
    }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "string.empty": "confirm Password is required",
    "any.only": "confirmPassword must be same password",
  }),
});

export const validateRegister = validate(registerSchema);
