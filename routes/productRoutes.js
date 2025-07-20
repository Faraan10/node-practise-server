const express = require("express");
const router = express.Router();
const {
  getProducts,
  postProduct,
} = require("../controllers/productsController");

router.get("/products", getProducts);
// router.post("/products", postProduct);

module.exports = router;
