require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { limiter } = require("./middlewares/rate-limit");
const error = require("./middlewares/error");
const notFound = require("./middlewares/not-found");

const authRouter = require("./router/auth-route");
const authenticate = require("./middlewares/authenticate");
const authenticateAdmin = require("./middlewares/authenticateAdmin");
const carsRouter = require("./router/car-route");
const routerService = require("./router/service-route");
const historyRoute = require("./router/history-route");
const adminRoute = require("./router/admin-route");

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(limiter);
app.use(morgan("dev"));
app.use("/public", express.static("public"));

app.use("/auth", authRouter);
app.use("/cars", authenticate, carsRouter);
app.use("/service", authenticate, routerService);
app.use("/admin", authenticateAdmin, adminRoute);
app.use("/history", authenticateAdmin, historyRoute);

app.use(notFound);
app.use(error);
app.listen(PORT, () => {
  console.log(`port is running on ${PORT}`);
});
