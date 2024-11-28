//defino controlador para el manejo de CRUD
const promocionCtrl = require('../controllers/promocion.controller');
const autCtrl = require('./../controllers/auth.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de Promocion

// Ruta para guardar una Promocion
router.post('/', autCtrl.verifyToken, promocionCtrl.save);

// Ruta para obtener todas las Promociones
router.get('/', autCtrl.verifyToken, promocionCtrl.getAll);

// Ruta para obtener una Promocion por ID
router.get('/:id', autCtrl.verifyToken, promocionCtrl.getById);

// Ruta para obtener una Promocion por ID de alquiler
router.get('/alquiler/:id', autCtrl.verifyToken, promocionCtrl.getByAlquiler);

// Ruta para editar una Promocion por ID
router.put('/:id', autCtrl.verifyToken, promocionCtrl.edit);

// Ruta para eliminar una Promocion por ID
router.delete('/:id', autCtrl.verifyToken, promocionCtrl.delete);
//exportamos el modulo de rutas
module.exports = router;