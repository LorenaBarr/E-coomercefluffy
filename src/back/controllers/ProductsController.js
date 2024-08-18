import Producto from '../models/Producto.js';

export const obtenerTodosLosProductos = async (req, res) => {
  console.log("entro")
  try {
    const productos = await Producto.find({});
    res.json(productos);
    console.log(productos)
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
};
