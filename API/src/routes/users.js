import express from "express";
import {crearUsu, buscarUsu, buscar2Usu, editarUsu, borrarUsu} from "../controllers/userController.js";

const router = express.Router();


router.post("/", crearUsu);;

router.get("/", buscarUsu);

router.get("/", buscar2Usu);

router.put("/", editarUsu);

router.delete("/", borrarUsu);

export default router;
