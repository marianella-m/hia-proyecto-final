//controladores para el manejo de CRUD
const novedadCtrl = require('../controllers/novedad.controller');
const autCtrl = require('./../controllers/auth.controller');

//manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de novedad
router.post('/', autCtrl.verifyToken,novedadCtrl.save);
router.get('/',  novedadCtrl.getAll);
router.get('/busqueda', autCtrl.verifyToken,novedadCtrl.search);
router.get('/usuario/:id', autCtrl.verifyToken,novedadCtrl.getByUsuario);
router.get('/alquiler/:id', autCtrl.verifyToken,novedadCtrl.getByAlquiler);
router.get('/:id',autCtrl.verifyToken,novedadCtrl.getById);
router.delete('/:id', autCtrl.verifyToken,novedadCtrl.delete);
router.put('/:id', autCtrl.verifyToken,novedadCtrl.edit);

//exportamos el modulo de rutas
module.exports = router;