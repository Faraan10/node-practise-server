const mongoose = require("mongoose");

const productsModel = mongoose.Schema({});

module.exports = mongoose.model("product", productsModel);
