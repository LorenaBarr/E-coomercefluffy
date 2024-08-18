document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/exclusive-products')
    .then(response => response.json())
    .then(data => {
      // Lógica para mostrar productos exclusivos en la página
      const productosContainer = document.getElementById('productos-exclusivos');
      data.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.innerHTML = `
          <h3>${producto.title}</h3>
          <img src="${producto.image}" alt="${producto.title}">
          <p>${producto.description}</p>
          <p>Precio: $${producto.price}</p>
        `;
        productosContainer.appendChild(productoDiv);
      });
    })
    .catch(error => console.error('Error fetching productos exclusivos:', error));
});
