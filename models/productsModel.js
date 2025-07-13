const mongoose = require("mongoose");

const productsModel = mongoose.Schema({
  title: { type: String, required: true },
});

module.exports = mongoose.model("product", productsModel);
