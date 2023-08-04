const express = require("express");
const loggerMiddleware = require("./src/middlewares/logger");
require("dotenv").config();

// importing routes
const home = require("./src/routes/home");
const authentication = require("./src/routes/authentication");
const chat = require("./src/routes/chat");

const app = express();
const { NODE_ENV, PORT } = process.env;

// routes
app.use("/", home);
app.use("/auth", authentication);
app.use("/chat", chat);

if (NODE_ENV === "development") app.use(loggerMiddleware);

const port = PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`));
