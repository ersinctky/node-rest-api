const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDatabase = require("./helpers/database/connectDatabase");
const path = require("path");
const helmet = require("helmet");
const dotenv = require("dotenv");
const morgan = require("morgan");

// environment variables

dotenv.config({
  path: "./config/.env",
});

// mongodb connection
connectDatabase();

app.listen(8800, () => {
  console.log("Backend server is running");
});
