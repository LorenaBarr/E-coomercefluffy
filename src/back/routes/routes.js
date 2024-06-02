const express = require('express');
const router = express.Router();

const productsController = require('../controllers/ProductsController');
const userController = require('../controllers/UserController');

// Rutas para productos
router.get('/productos', productsController.obtenerTodosLosProductos);
router.post('/productos', productsController.agregarNuevoProducto);
// Agrega más rutas para productos según sea necesario

// Rutas para usuarios
router.get('/usuarios', userController.obtenerTodosLosUsuarios);
router.post('/usuarios', userController.agregarNuevoUsuario);
// Agrega más rutas para usuarios según sea necesario

module.exports = router;
