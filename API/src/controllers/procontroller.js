import express from "express";
import productoSchema from "../models/producto.js";

const router = express.Router();


const crearPro = ( (req, res) => {
    const producto = userSchema(req.body);
    producto
        .save()
        .then((data) => res.status(201).json(data))
        .catch((error) => res.json({ message:error }));
});

const buscarPro = ( (req, resp) => {
    productoSchema
        .find()
        .then((data) => resp.status(226).json(data))
        .catch((error) => resp.json({ message:error }));
});

const buscarpro2 = ( (req, resp) => {
    const{ id } = req.params;
    productoSchema
        .findById(id)
        .then((data) => resp.status(200).json(data))
        .catch((error) => resp.json({ message:error }));
});

const editarPro = ( (req, resp) => {
    const{ id } = req.params;
    const{ nombre, categoria, stock } = req.body;
    productoSchema
        .updateOne({ _id: id}, { $set: { nombre, categoria, stock } })
        .then((data) => resp.status(201).json(data))
        .catch((error) => resp.json({ message:error }));
});

const borraPro = ( (req, resp) => {
    const{ id } = req.params;
    productoSchema
        .deleteOne({ _id:id })
        .then((data) => resp.status(200).json(data))
        .catch((error) => resp.json({ message:error }));
});

export {
 crearPro, buscarPro, buscarpro2, editarPro, borraPro
};
