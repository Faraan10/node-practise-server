const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const connection = require("./dbConnection");

connection();
app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT);
});
