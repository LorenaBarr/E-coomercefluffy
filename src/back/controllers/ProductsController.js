// controllers/ProductsController.js
const Producto = require('../models/Producto');

async function obtenerTodosLosProductos(req, res) {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (err) {
        res.status(500).send(err);
    }
}

async function agregarNuevoProducto(req, res) {
    const nuevoProducto = new Producto(req.body);
    try {
        const productoCreado = await nuevoProducto.save();
        res.status(201).json(productoCreado);
    } catch (err) {
        res.status(500).send(err);
    }
}

async function actualizarProducto(req, res) {
    try {
        const productoActualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(productoActualizado);
    } catch (err) {
        res.status(500).send(err);
    }
}

async function eliminarProducto(req, res) {
    try {
        await Producto.findByIdAndRemove(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = {
    obtenerTodosLosProductos,
    agregarNuevoProducto,
    actualizarProducto,
    eliminarProducto,
};
