const express = require("express");
const router = express.Router();
import { getProducts } from "../controllers/productsController";

router.get("/products", getProducts);
router.post("/products");
