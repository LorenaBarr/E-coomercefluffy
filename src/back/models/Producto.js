const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
  nombre: String,
  precio: Number,
  descripcion: String,
  imagen: String
});

module.exports = mongoose.model('Producto', ProductoSchema);

// models/Usuario.js
const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  contraseña: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);