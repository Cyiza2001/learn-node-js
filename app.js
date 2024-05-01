const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/about", (req, res) => {
  res.send("Nzakayangana");
});
app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
