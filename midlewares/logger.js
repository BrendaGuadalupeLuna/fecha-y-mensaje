const logger = (req, res, next) => {
    const currentDateTime = new Date().toLocaleString();
    console.log(`[${currentDateTime}] Acceso a la ruta: ${req.originalUrl}`);
    next();
};

module.exports = logger;
