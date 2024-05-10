const express = require("express");
const mongoose = require("mongoose");
const product = require("./models/product.model.js");
// const productController = require("./controllers/product.controller.js");
const productRoutes = require("./routes/product.route.js");
const app = express();

app.use(express.json());
app.use("/api/products", productRoutes);

// app.get("/", (req, res) => {
//   res.send("Home Page ya Djibuji");
// });
// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await product.find();
//     res.status(200).json(products);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: err.message });
//   }
// });

// app.get("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const Product = await product.findById(id);

//     res.status(200).json(Product);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: err.message });
//   }
// });

// app.post("/api/products", async (req, res) => {
//   try {
//     console.log(req.body);
//     const Product = await product.create(req.body);
//     res.status(200).json(Product);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: err.message });
//   }
// });
//update products in the database
// app.put("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const Product = await product.findByIdAndUpdate(id, req.body);
//     if (!Product) return res.status(404).json({ message: "product not found" });
//     const updatedProduct = await product.findById(id);
//     res.status(200).json(updatedProduct);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: err.message });
//   }
// });
//delete a product from the database
// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const Product = await product.findByIdAndDelete(id, req.body);
//     if (!Product) return res.status(404).json({ message: "product not found" });
//     res.status(200).json({ message: "product deleted successfuly" });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: err.message });
//   }
// });
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
