const mongoose = require("mongoose");

const cartModel = new mongoose.Schema({});

module.exports = mongoose.model("Cart", cartModel);
