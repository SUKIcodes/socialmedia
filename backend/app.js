const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

require("dotenv").config({ path: "backend/config/config.env" });

// IMPORTING ROUTES
const post = require("./routes/post");
const user = require("./routes/user");

//USING ROUTES
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
app.use("/api/v1", post);
app.use("/api/v1", user);

module.exports = app;
