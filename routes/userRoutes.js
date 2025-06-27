const express = require("express");
const router = express.Router();
const { getUsers, register } = require("../controllers/userController");

router.get("/", getUsers);

router.post("/register", register);

module.exports = router;
