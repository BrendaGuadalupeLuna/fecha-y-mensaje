const express = require('express');
const router = express.Ruta();

ruta.get('/', (req, res) => {
    console.log('Entraste a la Ruta 2');
    res.send('Ruta 2');
});

module.exports = ruta;
