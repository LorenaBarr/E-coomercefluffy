const fs = require('fs');
const path = require('path');

const productosFilePath = path.join(__dirname, 'data', 'productos.json');
const usuariosFilePath = path.join(__dirname, 'data', 'usuarios.json');

function leerProductos() {
    const productosData = fs.readFileSync(productosFilePath);
    return JSON.parse(productosData);
}

function agregarProducto(nuevoProducto) {
    const productos = leerProductos();
    nuevoProducto.id = productos.length + 1;
    productos.push(nuevoProducto);
    fs.writeFileSync(productosFilePath, JSON.stringify(productos, null, 2));
    return nuevoProducto;
}

function leerUsuarios() {
    const usuariosData = fs.readFileSync(usuariosFilePath);
    return JSON.parse(usuariosData);
}

function agregarUsuario(nuevoUsuario) {
    const usuarios = leerUsuarios();
    nuevoUsuario.id = usuarios.length + 1;
    usuarios.push(nuevoUsuario);
    fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios, null, 2));
    return nuevoUsuario;
}

module.exports = {
    leerProductos,
    agregarProducto,
    leerUsuarios,
    agregarUsuario,
};
