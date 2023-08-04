const morgan = require("morgan");

// Define the logging format
const logFormat =
  ":method :url :status :res[content-length] - :response-time ms";

// Create a reusable logging middleware
const loggerMiddleware = morgan("tiny");
console.log("---- morgan enabled ----");

module.exports = loggerMiddleware;
