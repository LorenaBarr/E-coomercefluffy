import React, { useEffect, useState } from 'react';

function ExclusiveProductList() {
  const [productos, setProductos] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    fetch('/api/exclusive-products')
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error('Error fetching productos exclusivos:', error));
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
    <div className="exclusive-product-list">
      {productos.map(producto => (
        <div key={producto.id} className="product-card">
          <h3>{producto.title}</h3>
          <img src={producto.image} alt={producto.title} />
          <p>{producto.description}</p>
          <p>Precio: ${producto.price}</p>
          <button
            className={`favorite-btn ${favoritos.includes(producto.id) ? 'selected' : ''}`}
            onClick={() => toggleFavorito(producto.id)}
          >
            ❤️
          </button>
          <span className="favorite-text">
            {favoritos.includes(producto.id) ? 'Quitar de favoritos' : 'Añadir a favoritos'}
          </span>
        </div>
      ))}
    </div>
  );
}

export default ExclusiveProductList;

