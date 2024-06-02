const dataService = require('../dataService');

// Controlador para obtener todos los usuarios
function obtenerTodosLosUsuarios(req, res) {
    const usuarios = dataService.leerUsuarios();
    res.json(usuarios);
}

// Controlador para agregar un nuevo usuario
function agregarNuevoUsuario(req, res) {
    const nuevoUsuario = req.body; // Suponiendo que los datos del nuevo usuario están en el cuerpo de la solicitud
    const usuarioCreado = dataService.agregarUsuario(nuevoUsuario);
    res.status(201).json(usuarioCreado);
}

module.exports = {
    obtenerTodosLosUsuarios,
    agregarNuevoUsuario,
};
