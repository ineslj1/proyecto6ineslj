/* require("dotenv").config();
const express = require("express");
// importar la función
const { connectDB } = require("./src/config/db");

const app = express();

// conectar con la bbdd
connectDB();

app.use("*", (req, res, next) => {
    return res.status(404).json("Route not found")
})

app.listen(3000, () => {
    console.log("http://localhost:3000");
}) */

require("dotenv").config();
const express = require('express');
const { connectDB } = require("./src/config/db.js");
const instrumentRoutes = require("./src/api/routes/instruments.js");
const familyRouter = require("./src/api/routes/family.js");
const usersRoutes = require("./src/api/routes/users.js");

const app = express();
app.use(express.json());

connectDB();

app.use("/api/v1/instruments", instrumentRoutes)
app.use("/api/v1/families", familyRouter)
app.use("/api/v1/users", usersRoutes);

app.use("*", (req, res, next) => {
  return res.status(404).json("Route not found");
})

app.listen(3000, () => {
  console.log("Servidor desplegado en: http://localhost:3000")
})
