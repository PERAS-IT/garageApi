const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;
const JWT_EXPIRE = process.env.JWT_EXPIRE;

exports.sign = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: JWT_EXPIRE });
};
