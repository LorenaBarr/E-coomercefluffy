import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
  id: Number,
  nombre: String,
  precio: Number,
  descripcion: String,
  imagen: String,
});

const Producto = mongoose.model('productos', productoSchema);

export default Producto;
