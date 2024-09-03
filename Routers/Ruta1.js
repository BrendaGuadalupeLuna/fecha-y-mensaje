const express = require('express');
const ruta = express.Ruta();

router.get('/', (req, res) => {
    console.log('Entraste a la Ruta 1');
    res.send('Ruta 1');
});

module.exports = ruta;
