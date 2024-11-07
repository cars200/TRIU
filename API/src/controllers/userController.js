
import userSchema from "../models/user.js"


const crearUsu =  (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.status(201).json(data))
        .catch((error) => res.json({ message:error }));
};

const buscarUsu = (req, resp) => {
    userSchema
        .find()
        .then((data) => resp.status(226).json(data))
        .catch((error) => resp.json({ message:error }));
};

const buscar2Usu = (req, resp) => {
    const{ id } = req.params;
    userSchema
        .findById(id)
        .then((data) => resp.status(200).json(data))
        .catch((error) => resp.json({ message:error }));
};

const editarUsu = (req, resp) => {
    const{ id } = req.params;
    const{ nombre, edad, genero } = req.body;
    userSchema
        .updateOne({ _id: id}, { $set: { nombre, edad, genero } })
        .then((data) => resp.status(201).json(data))
        .catch((error) => resp.json({ message:error }));
};

const borrarUsu = (req, resp) => {
    const{ id } = req.params;
    userSchema
        .deleteOne({ _id:id })
        .then((data) => resp.status(200).json(data))
        .catch((error) => resp.json({ message:error }));
};

export {
 crearUsu, buscarUsu, buscar2Usu, editarUsu, borrarUsu
};
