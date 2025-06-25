const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { name, email, password, number } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).json({ msg: "User already exists" });
      return;
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const createUser = await User.create({
      name,
      email,
      password: hashPassword,
      number,
    });

    const token = jwt.sign(
      { id: createUser._id, email: createUser.email },
      process.env.SECRET_KEY,
      {
        expiresIn: "1d",
      }
    );
    res.status(201).json({ id: createUser._id, name, email, number, token });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = { register };
