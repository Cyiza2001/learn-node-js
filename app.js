const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => {
  res.send("Home Page ya Djibuji");
});
app.listen(5000, () => {
  console.log("server is listening on the port 5000...");
});
// app.get("/api/products", (req, res) => {
//   res.send("Data Received");
// });
mongoose
  .connect(
    "mongodb+srv://Alexandre:ndanyuzwe2@atlascluster.7z2yy0l.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(() => console.log("not connected!"));
