const { rateLimit } = require("express-rate-limit");

exports.limiter = rateLimit({
  windowMs: 1000 * 60,
  limit: 10000,
  message: { message: "to many request given period" },
});
