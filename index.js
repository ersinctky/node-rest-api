const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config();

app.listen(8800, () => {
  console.log("Backend server is running");
});
