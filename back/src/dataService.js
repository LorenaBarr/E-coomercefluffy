const fs = require('fs');
const path = require('path');

// Ruta al archivo JSON de usuarios
const usuariosFilePath = path.join(__dirname, '../../data/usuarios.json');

// Ruta al archivo JSON de productos
const productosFilePath = path.join(__dirname, '../../data/productos.json');

// Función para leer todos los usuarios
function leerUsuarios() {
    const usuariosData = fs.readFileSync(usuariosFilePath, 'utf8');
    return JSON.parse(usuariosData);
}

// Función para leer todos los productos
function leerProductos() {
    const productosData = fs.readFileSync(productosFilePath, 'utf8');
    return JSON.parse(productosData);
}

// Función para buscar un usuario por su ID
function buscarUsuarioPorId(id) {
    const usuarios = leerUsuarios();
    return usuarios.find(usuario => usuario.id === id);
}

// Función para buscar un producto por su ID
function buscarProductoPorId(id) {
    const productos = leerProductos();
    return productos.find(producto => producto.id === id);
}

// Función para agregar un nuevo usuario
function agregarUsuario(usuario) {
    const usuarios = leerUsuarios();
    const nuevoId = usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1;
    usuario.id = nuevoId;
    usuarios.push(usuario);
    fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios, null, 2));
    return usuario;
}

// Función para agregar un nuevo producto
function agregarProducto(producto) {
    const productos = leerProductos();
    const nuevoId = productos.length > 0 ? productos[productos.length - 1].id + 1 : 1;
    producto.id = nuevoId;
    productos.push(producto);
    fs.writeFileSync(productosFilePath, JSON.stringify(productos, null, 2));
    return producto;
}

// Función para actualizar un usuario existente
function actualizarUsuario(id, nuevosDatos) {
    const usuarios = leerUsuarios();
    const indice = usuarios.findIndex(usuario => usuario.id === id);
    if (indice !== -1) {
        usuarios[indice] = { ...usuarios[indice], ...nuevosDatos };
        fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios, null, 2));
        return true;
    }
    return false;
}

// Función para actualizar un producto existente
function actualizarProducto(id, nuevosDatos) {
    const productos = leerProductos();
    const indice = productos.findIndex(producto => producto.id === id);
    if (indice !== -1) {
        productos[indice] = { ...productos[indice], ...nuevosDatos };
        fs.writeFileSync(productosFilePath, JSON.stringify(productos, null, 2));
        return true;
    }
    return false;
}

// Función para eliminar un usuario
function eliminarUsuario(id) {
    const usuarios = leerUsuarios();
    const nuevosUsuarios = usuarios.filter(usuario => usuario.id !== id);
    fs.writeFileSync(usuariosFilePath, JSON.stringify(nuevosUsuarios, null, 2));
}

// Función para eliminar un producto
function eliminarProducto(id) {
    const productos = leerProductos();
    const nuevosProductos = productos.filter(producto => producto.id !== id);
    fs.writeFileSync(productosFilePath, JSON.stringify(nuevosProductos, null, 2));
}

module.exports = {
    leerUsuarios,
    leerProductos,
    buscarUsuarioPorId,
    buscarProductoPorId,
    agregarUsuario,
    agregarProducto,
    actualizarUsuario,
    actualizarProducto,
    eliminarUsuario,
    eliminarProducto
};