import express from "express";
import {
 crearPro, buscarPro, buscarpro2, editarPro, borraPro
} from "../controllers/procontroller.js";

const router = express.Router();


router.post("/", crearPro);

router.get("/", buscarPro);

router.get("/", buscarpro2);

router.put("/", editarPro);

router.delete("/", borraPro);

export default router;


 