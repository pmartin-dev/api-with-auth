const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//Environment
dotenv.config();

//Connect DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
  console.log("connected to DB!");
});

//Import routes
const authRoute = require("./routes/auth");

//Middlewares
app.use(express.json());

//Routes middlewares
app.use("/api/user", authRoute);

app.listen(3000, () => {
  console.log("Serveur en écoute sur le port 3000");
});
