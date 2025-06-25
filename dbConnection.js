const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("MongoDB connected");
  } catch (err) {
    console.log("Mongo Error", err);
  }
};

module.exports = connection;
