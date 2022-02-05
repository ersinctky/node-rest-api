const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDatabase = require("./helpers/database/connectDatabase");
const path = require("path");
const helmet = require("helmet");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");

const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

// environment variables

dotenv.config({
  path: "./config/.env",
});

app.use(cors());

// mongodb connection
connectDatabase();

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(8800, () => {
  console.log("Backend server is running");
});
