const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Crear aplicación Express
const app = express();

// Configuración básica
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Configurar motor de vistas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Conectar a la base de datos (solo para inicializar)
require('./config/database');

// Configurar rutas
app.use('/', require('./routes/routes'));

// Manejo de errores 404
app.use((req, res) => {
    res.status(404).send('Página no encontrada');
});

// Exportar la aplicación para testing o uso en otros archivos
module.exports = app;