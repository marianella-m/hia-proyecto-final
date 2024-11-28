const alquilerCtrl = require('../controllers/alquiler.controller');
const express = require('express');
const router = express.Router();
const autCtrl = require('./../controllers/auth.controller');

//Ruta para generar cuotas para todos los alquileres
router.post('/generarCuotas', alquilerCtrl.generarCuotas);

//Ruta para generar cuotas para todos los alquileres
router.post('/verificarCuotasVencidas', alquilerCtrl.verificarCuotasVencidas);


//Ruta para generar un número de alquiler
router.get('/generarNumeroAlquiler', autCtrl.verifyToken, alquilerCtrl.generarNumeroAlquiler);

// Ruta para obtener alquileres de un usuario
router.get('/propietario', autCtrl.verifyToken, alquilerCtrl.getByPropietario);

// Ruta para obtener un alquiler por número de alquiler
router.get('/numero/:numeroAlquiler', autCtrl.verifyToken, alquilerCtrl.getByNumero);

// Ruta para obtener un alquiler por ID
router.get('/:id', autCtrl.verifyToken, alquilerCtrl.getById);

// Ruta para obtener todos los alquileres
router.get('/', autCtrl.verifyToken, alquilerCtrl.getAll);

// Ruta para obtener alquileres por rango de fecha
router.get('/fecha', autCtrl.verifyToken, alquilerCtrl.getByDate);

// Ruta para crear un alquiler
router.post('/', autCtrl.verifyToken, alquilerCtrl.create);

// Ruta para eliminar un alquiler por ID
router.delete('/:id', autCtrl.verifyToken, alquilerCtrl.delete);

// Ruta para editar un alquiler por ID
router.put('/:id', autCtrl.verifyToken, alquilerCtrl.edit);

//RUTAS CUOTA

//Ruta para agregar una cuota
router.post('/:id/cuota', autCtrl.verifyToken, alquilerCtrl.addCuota);

// Ruta para eliminar una cuota
router.delete('/:id/cuota/:idCuota', autCtrl.verifyToken, alquilerCtrl.deleteCuota);

//Ruta para modificar una cuota
router.put('/:id/cuota/:idCuota', autCtrl.verifyToken, alquilerCtrl.updateCuota);

module.exports = router;