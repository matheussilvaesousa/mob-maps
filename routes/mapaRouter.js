const express = require('express');
const router = express.Router();

const mapaController = require('../controllers/MapaController')

router.get('/', mapaController.viewFormMapa);
router.get('/enviar-problema', mapaController.viewFormEnviarProblema)

module.exports = router;
