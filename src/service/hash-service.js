const bcrypt = require("bcryptjs");

exports.hash = (inputPlaintext) => bcrypt.hash(inputPlaintext, 10);

exports.compare = (plaintext, hashValue) => {
  return bcrypt.compare(plaintext, hashValue);
};
