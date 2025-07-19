const Products = require("../models/productsModel");

const getProducts = async () => {
  try {
    const data = await Products.find({});
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

module.exports = getProducts;
