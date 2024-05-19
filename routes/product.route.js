const express = require("express");
const authenticateToken = require("../authMiddleWare");
const {
  getProducts,
  getProduct,
  postProduct,
  deleteProduct,
  putProduct,
} = require("../controllers/product.controllers");
const router = express.Router();

router.get("/", authenticateToken, getProducts);
router.get("/:id", authenticateToken, getProduct);
router.post("/", authenticateToken, postProduct);
router.delete("/:id", authenticateToken, deleteProduct);
router.put("/:id", authenticateToken, putProduct);

module.exports = router;
