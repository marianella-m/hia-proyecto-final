//defino controlador para el manejo de CRUD
const cuotaCtrl = require('../controllers/cuota.controller');
const autCtrl = require('./../controllers/auth.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de cuota
//Ruta para generar una nueva cuota
router.post('/', autCtrl.verifyToken, cuotaCtrl.createCuota);

//Ruta para obtener todas las cuotas
router.get('/', autCtrl.verifyToken, cuotaCtrl.getCuotas);

//Ruta para obtener una cuota por id
router.get('/:id', autCtrl.verifyToken, cuotaCtrl.getCuotaById);

//Ruta para editar una cuota por id
router.put('/:id', autCtrl.verifyToken, cuotaCtrl.editCuota);

router.delete('/:id', autCtrl.verifyToken, cuotaCtrl.deleteCuota);

//Ruta para obtener cuotas por rango de fecha
router.post('/cuotasByDateRange', autCtrl.verifyToken, cuotaCtrl.getCuotasByDateRange);
//exportamos el modulo de rutas
module.exports = router;