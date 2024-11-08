import proveedorSchema from "../models/proveedor.js";

/**
 * @swagger
 * /Proveedor:
 *      post:
 *          summary: Registra los nuevos proveedores de la conexion
 *          tags: [Proveedor]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/src/models/proveedor.js'
 *          responses:
 *              200:
 *                  description: Nuevo proveedor creado en la BdD *
 */
const crearproveedor = ( (req, res) => {
    const proveedor = proveedorSchema(req.body);
    proveedor
        .save()
        .then((data) => res.status(201).json(data))
        .catch((error) => res.json({ message:error }));
});

/**
 * @swagger
 * /Proveedor:
 *  get:
 *      summary: Retorna los registros de la entidad proveedor
 *      tags: [Proveedor]
 *      responses:
 *          200:
 *              description: Esta es la lista de los proveedores en la BdD
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/src/models/proveedor.js'
 */
const buscarproveedor = ( (req, resp) => {
    proveedorSchema
        .find()
        .then((data) => resp.status(226).json(data))
        .catch((error) => resp.json({ message:error }));
});

/**
 * @swagger
 * /Proveedor:
 *  get:
 *      summary: Retorna los registros de la entidad proveedor mediante su id
 *      tags: [Proveedor]
 *      responses:
 *          200:
 *              description: Esta es la lista de los proveedores en la BdD
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/src/models/proeveedor.js'
 */
const buscarproveedoresp = ( (req, resp) => {
    const{ id_proveedor } = req.params;
    proveedorSchema
        .findById(id_proveedor)
        .then((data) => resp.status(200).json(data))
        .catch((error) => resp.json({ message:error }));
});

/**
 * @swagger
 * /Proveedor/{id_proveedor}:
 *  put:
 *      summary: Actualiza un proveedor de la BdD
 *      tags: [Proveedor]
 *      parameters:
 *          -in : path
 *              name: id_proveedor
 *              description: Codigo del proveedor a eliminar
 *              schema:
 *                  type: integer
 *              required: true
 *      requestBody:
 *          required: true
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  $ref: ''#/src/models/proveedor.js'
 *      responses:
 *          200:
 *              description: proveedores actualizados en la BdD
 *              content
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: ''#/src/models/proveedor.js'
 *          404:
 *              description: No se encuentra en la lista de proveedor de la BdD
 */
const editarproveedor = ( (req, resp) => {
    const{ id_proveedor } = req.params;
    const{ Nombre, Celular, Correo } = req.body;
    proveedorSchema
        .updateOne({ _id: id_proveedor}, { $set: { Nombre, Celular, Correo } })
        .then((data) => resp.status(201).json(data))
        .catch((error) => resp.json({ message:error }));
});


/**
 * @swagger
 * /Proveedor/{id_proveedor}:
 *  put:
 *      summary: Actualiza el estado de un proveedor de la BdD
 *      tags: [Proveedor]
 *      parameters:
 *          -in : path
 *              name: id_proveedor
 *              description: Codigo del proveedor a eliminar
 *              schema:
 *                  type: integer
 *              required: true
 *      requestBody:
 *          required: true
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  $ref: ''#/src/models/proveedor.js'
 *      responses:
 *          200:
 *              description: estados de proveedores actualizados en la BdD
 *              content
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: ''#/src/models/proveedor.js'
 *          404:
 *              description: No se encuentra en la lista de proveedor de la BdD
 */
const editarestadoproveedor = ( (req, resp) => {
    const{ id_proveedor } = req.params;
    const{ Estado } = req.body;
    proveedorSchema
        .updateOne({ _id: id_proveedor}, { $set: { Estado } })
        .then((data) => resp.status(201).json(data))
        .catch((error) => resp.json({ message:error }));
});

/**
 * @swagger
 * /Proveedor/{id_proveedor}:
 *      delete:
 *          summary: Elimina un proveedor de la BdD
 *          tags: [users]
 *          parameters:
 *              - in : path
 *                  name: id_proveedor
 *                  description: Codigo del proveedor a eliminar
 *                  schema:
 *                      type: integer
 *                      required: true
 *                  responses:
 *                      200:
 *                          description: Proveedor eliminado en la BdD
 *                          content:
 *                              application/json:
 *                                  schema:
 *                                      type: object
 *                                      $ref: ''#/src/models/proveedor.js'
 *                      404:
 *                          description: No se encuentra en la lista de proveedores en la BdD
 */
const borrarproveedor = ( (req, resp) => {
    const{ id_proveedor } = req.params;
    proveedorSchema
        .deleteOne({ _id:id_proveedor })
        .then((data) => resp.status(200).json(data))
        .catch((error) => resp.json({ message:error }));
});

export {
 crearproveedor, buscarproveedor, buscarproveedoresp, editarproveedor, editarestadoproveedor, borrarproveedor
};
