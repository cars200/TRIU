import mongoose from "mongoose";

const productoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    categoria: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
});

export default mongoose.model("Producto", productoSchema);