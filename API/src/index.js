import express from "express";
import conectarBdD from "../BD/config.js"
const app = express();
const port = process.env.PORT || 3000;
import rutuse from "../src/routes/users.js";
import rutpro from "../src/routes/productos.js";




// DOCUMENTACIÓN
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDos = require('./swagger-jsdoc');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());
app.use("/api", rutuse);
app.use("/api", rutpro);


import dotenv from "dotenv";
// import producto from "./models/producto";
dotenv.config();

conectarBdD();

app.get("/", (req, res) => {
    res.send("<h1>Bienvenido a mi API</h1>");
});

app.listen(port, () => {
    console.log(`Se inicio el servidor, y esta escuchando el puerto ${port}`);
});
