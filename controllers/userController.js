const User = require("../models/");

const register = async (req, res) => {
  try {
    const { name, email, password, number } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).json({ msg: "User already exists" });
      return;
    }

    const createUser = await User.create({
      name,
      email,
      password,
      number,
    });

    res.status(201).json(createUser);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
