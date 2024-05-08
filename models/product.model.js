const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the product name"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const product = mongoose.model("Product", productSchema);
module.exports = product;
