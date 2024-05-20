const express = require("express");
const mongoose = require("mongoose");
const product = require("./models/product.model.js");
const productRoutes = require("./routes/product.route.js");
const authRoutes = require("./routes/auth.route.js");
const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

const app = express();

app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.set("view engine", "ejs");
app.get("/upload", (req, res) => {
  res.render("upload");
});
app.post("/upload", upload.single("image"), (req, res) => {
  res.send("image uploaded");
});
mongoose
  .connect(
    "mongodb+srv://Alexandre:ndanyuzwe2@atlascluster.7z2yy0l.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to the database!");
    app.listen(5000, () => {
      console.log("server is listening on the port 5000...");
    });
  })
  .catch(() => console.log("not connected!"));
