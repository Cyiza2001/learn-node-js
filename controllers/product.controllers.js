const product = require("../models/product.model");
const getProducts = async (req, res) => {
  try {
    const products = await product.find({});
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await product.findById(id);
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

const postProduct = async (req, res) => {
  try {
    console.log(req.body);
    const Product = await product.create(req.body);
    res.status(200).json(Product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const Product = await product.findByIdAndDelete(id, req.body);
    if (!Product) return res.status(404).json({ message: "product not found" });
    res.status(200).json({ message: "product deleted successfuly" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

const putProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const Product = await product.findByIdAndUpdate(id, req.body);
    if (!Product) return res.status(404).json({ message: "product not found" });
    const updatedProduct = await product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  postProduct,
  deleteProduct,
  putProduct,
};
