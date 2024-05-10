const express = require("express");
const product = require("./models/product.model.js");
const {
  getProducts,
  getProduct,
  postProduct,
  deleteProduct,
  putProduct,
} = require("./controllers/product.controllers.js");
const router = express.router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", postProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", putProduct);

module.exports = router;
