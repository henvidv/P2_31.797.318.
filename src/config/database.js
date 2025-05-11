const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('.C:\Users\Henvi\OneDrive\Documentos\GitHub\P2_31.797.318');

app.use(express.json()); // Para manejar datos JSON en las solicitudes
const pagos=require('./src/config/index.js')

router.get('./formulario',pagos.showform);

router.post('/guardar',pagos.createitems);

router.get('/items',pagos.listitems);

router.get('/editar/:id', pagos.showForm);

// Procesar actualización (UPDATE)
router.post('/actualizar/:id', pagos.updateItem);

// Eliminar item (DELETE)
router.get('/eliminar/:id', pagos.deleteItem);

module.exports = router;

const contacts=require('./src/config/index.js')

router.get('./formulario',contacts.showform);

router.post('/guardar',contacts.createitems);

router.get('/items',contacts.listitems);

router.get('/editar/:id', contacts.showForm);

// Procesar actualización (UPDATE)
router.post('/actualizar/:id', contacts.updateItem);

// Eliminar item (DELETE)
router.get('/eliminar/:id', contacts.deleteItem);

module.exports = router;