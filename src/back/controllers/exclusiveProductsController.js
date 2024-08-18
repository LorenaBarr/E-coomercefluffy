import fetch from 'node-fetch';

// Obtener productos exclusivos desde FakeStore API
export const obtenerProductosExclusivos = async (req, res) => {
  try {
    const response = await fetch('https://fakestoreapi.com/products?limit=5');
    const productosExclusivos = await response.json();
    res.json(productosExclusivos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
