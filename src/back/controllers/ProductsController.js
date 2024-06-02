const dataService = require('../dataService');

// Controlador para obtener todos los productos
function obtenerTodosLosProductos(req, res) {
    const productos = dataService.leerProductos();
    res.json(productos);
}

// Controlador para agregar un nuevo producto
function agregarNuevoProducto(req, res) {
    const nuevoProducto = req.body; // Suponiendo que los datos del nuevo producto están en el cuerpo de la solicitud
    const productoCreado = dataService.agregarProducto(nuevoProducto);
    res.status(201).json(productoCreado);
}

module.exports = {
    obtenerTodosLosProductos,
    agregarNuevoProducto,
};
