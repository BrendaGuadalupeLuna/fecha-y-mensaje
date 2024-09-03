const express = require('express');
const app = express();

// Importar rutas
const ruta1 = require('./ruta/ruta1');
const ruta2 = require('./ruta/ruta2');

// Middleware
const logger = require('./middlewares/logger');

// Usar el middleware en todas las rutas
app.use(logger);

// Configurar rutas
app.use('/ruta1', ruta1);
app.use('/ruta2', ruta2);

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});


