import React, { useEffect, useState } from 'react';

function ExclusiveProductList() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('/api/exclusive-products')
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error('Error fetching productos exclusivos:', error));
  }, []);

  return (
    <div className="exclusive-product-list">
      {productos.map(producto => (
        <div key={producto.id} className="product-card">
          <h3>{producto.title}</h3>
          <img src={producto.image} alt={producto.title} />
          <p>{producto.description}</p>
          <p>Precio: ${producto.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ExclusiveProductList;

