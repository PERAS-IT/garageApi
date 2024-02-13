require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { limiter } = require("./middlewares/rate-limit");
const error = require("./middlewares/error");
const notFound = require("./middlewares/not-found");

const port = 9100;
const app = express();

app.use(cors);
app.use(express.json());
app.use(limiter);

app.use(notFound);
app.use(error);
app.listen(port, () => {
  console.log(`port is running on ${port}`);
});
