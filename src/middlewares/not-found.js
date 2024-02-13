module.exports = (req, res, next) => {
  res.status(404).json({ message: "Resource was not found on this server" });
};
