const express = require("express");
const router = express.Router();
const { getProducts } = require("../controllers/productsController");

router.get("/products", getProducts);
// router.post("/products");

module.exports = router;
