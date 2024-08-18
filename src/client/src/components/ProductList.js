import React, { useEffect, useState } from 'react';

function ProductList() {
  const [productos, setProductos] = useState([]);

useEffect(() => {
  fetch('/api/productos')
    .then(response => response.json())
    .then(data => setProductos(data))
    .catch(error => console.error('Error fetching productos:', error));
}, []);


  return (
    <div className="product-list">
      {productos.map(producto => (
        <div key={producto._id} className="product-card">
          <h3>{producto.nombre}</h3>
          <img src={producto.imagen} alt={producto.nombre} />
          <p>{producto.descripcion}</p>
          <p>Precio: ${producto.precio}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
