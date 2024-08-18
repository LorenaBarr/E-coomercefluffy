import React, { useEffect, useState } from 'react';

function ProductList() {
  const [productos, setProductos] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

useEffect(() => {
  fetch('/api/productos')
    .then(response => response.json())
    .then(data => setProductos(data))
    .catch(error => console.error('Error fetching productos:', error));
}, []);

const toggleFavorito = (productoId) => {
    setFavoritos(prevFavoritos => {
      if (prevFavoritos.includes(productoId)) {
        return prevFavoritos.filter(id => id !== productoId);
      } else {
        return [...prevFavoritos, productoId];
      }
    });
  };

  return (
    <div className="product-list">
      {productos.map(producto => (
        <div key={producto._id} className="product-card">
          <h3>{producto.nombre}</h3>
          <img src={producto.imagen} alt={producto.nombre} />
          <p>{producto.descripcion}</p>
          <p>Precio: ${producto.precio}</p>
          <button
            className={`favorite-btn ${favoritos.includes(producto._id) ? 'selected' : ''}`}
            onClick={() => toggleFavorito(producto._id)}
          >
            ❤️
          </button>
          <span className="favorite-text">
            {favoritos.includes(producto._id) ? 'Quitar de favoritos' : 'Añadir a favoritos'}
          </span>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
