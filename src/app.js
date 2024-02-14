require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { limiter } = require("./middlewares/rate-limit");
const error = require("./middlewares/error");
const notFound = require("./middlewares/not-found");

const authRouter = require("./router/auth-route");

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(limiter);
app.use(morgan("dev"));
app.use("/auth", authRouter);
app.use(notFound);
app.use(error);
app.listen(port, () => {
  console.log(`port is running on ${port}`);
});
