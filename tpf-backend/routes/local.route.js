const localCtrl = require('../controllers/local.controller');
const express = require('express');
const router = express.Router();
const autCtrl = require('./../controllers/auth.controller');

router.get('/generarNumeroLocal', autCtrl.verifyToken, localCtrl.generarNumeroLocal);

router.post('/', autCtrl.verifyToken, localCtrl.createLocal);
router.post('/buscar', autCtrl.verifyToken, localCtrl.findByFiltros);

router.get('/', localCtrl.getLocales);

router.get('/rubros', localCtrl.getLocalesByRubro);

router.get('/:id', localCtrl.getLocal);

router.put('/:id', autCtrl.verifyToken, localCtrl.editLocal);

router.delete('/:id', autCtrl.verifyToken, localCtrl.deleteLocal);

router.get('/nombrelocal/:nombreLocal', localCtrl.getLocalByNombreLocal);

module.exports = router;