import express from "express";
import {
    crearproveedor, buscarproveedor, buscarproveedoresp, editarproveedor, editarestadoproveedor, borrarproveedor
   } from "../controllers/proveedorcontroller.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Proveedor:
 *          type: object
 *          properties:
 *              codigo:
 *                  type: integer
 *                  description: Id autogenerado en la BdD
 *              id_proveedor:
 *                  type: integer
 *                  description: numero de documento del proveedor de la coleccion
 *              Nombre:
 *                  type: String
 *                  description: Nombre del proveedor en la colección
 *              Celular:
 *                  type: Number
 *                  description: Número de celular del proveedor de la colección
 *              Correo:
 *                  type: String
 *                  description: Correo del proveedor de la colección
 *              Estado:
 *                  type: Boolean
 *                  description: Estado de actividad del proveedor de la colección
 *          required:
 *              - id_proveedor
 *              - Nombre
 *              - Celular
 *              - Correo
 *              - Estado
 *          example:
 *              id_proveedor: 1075289173
 *              Nombre: Javier Ramirez
 *              Celular: 3127615200
 *              Correo: javier@gmail.com
 *              Estado: Activo
 */


router.post("/", crearproveedor);

router.get("/", buscarproveedor);

router.get("/", buscarproveedoresp);

router.put("/", editarproveedor);

router.put("/", editarestadoproveedor);

router.delete("/", borrarproveedor);

export default router;