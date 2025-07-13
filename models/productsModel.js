const mongoose = require("mongoose");

const productsModel = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, default: 1 },
  stock: { type: Number, required: true },
  images: [{ type: String }],
});

module.exports = mongoose.model("product", productsModel);
