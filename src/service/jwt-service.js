const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY || "1150kfc";
const JWT_EXPIRE = process.env.JWT_EXPIRE || 1;

exports.sign = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: JWT_EXPIRE });
};

exports.verify = (token) => {
  return jwt.verify(token, SECRET_KEY);
};
