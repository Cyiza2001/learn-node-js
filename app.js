const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => {
  res.send("Home Page ya Djibuji");
});

app.listen(5000, () => {
  console.log("server is listening on the port 5000...");
});
