import express from "express";
import mongoose from "mongoose";


const conectarBdD = ()=>{
    mongoose
        .connect(process.env.MONGODB_URI)
        .then(() => {
            console.log("Conectado a MongoDB");
        })
        .catch((error) => {
            console.log(`Ocurrió el siguiente error al conectarse: ${error.message}`);
        });
}

  export default conectarBdD;