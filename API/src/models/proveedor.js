import mongoose from "mongoose";

const proveedorSchema = mongoose.Schema({
    id_proveedor: {
        type: Number,
        required: true,
    },
    Nombre: {
        type: String,
        required: true,
    },
    Celular: {
        type: Number,
        required: true,
    },
    Correo: {
        type: String,
        required: true,
    },
    Estado: {
        type: Boolean,
        required: true,
    },
});

export default mongoose.model("Proveedor", proveedorSchema);