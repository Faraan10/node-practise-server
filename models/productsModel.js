const mongoose = require("mongoose");

const productsModel = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: Number },
});

module.exports = mongoose.model("product", productsModel);
