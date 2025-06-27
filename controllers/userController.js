const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (err) {
    res.status(400).json({ msg: "Server error" });
  }
};

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

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const exists = await User.findOne({ email });
    if (!exists) {
      res.status(400).json({ msg: "User not found" });
      return;
    }
    const comparePassword = await bcrypt.compare(password, exists.password);

    if (!comparePassword) {
      res.status(401).json({ msg: "Invalid credentials" });
      return;
    }

    const token = jwt.sign(
      {
        id: exists._id,
        email: exists.email,
      },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      id: exists._id,
      name: exists.name,
      email: exists.email,
      number: exists.number,
      token,
    });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = { register, login };
