const Products = require("../models/productsModel");

const getProducts = async (req, res) => {
  try {
    const data = await Products.find({});
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

const postProduct = async (req, res) => {
  try {
  } catch (err) {}
};

module.exports = { getProducts, postProduct };
