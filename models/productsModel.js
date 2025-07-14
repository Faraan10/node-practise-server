const mongoose = require("mongoose");

const productsModel = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String },
    quantity: { type: Number, default: 1 },
    stock: { type: Number, required: true },
    images: [{ type: String }],
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productsModel);
