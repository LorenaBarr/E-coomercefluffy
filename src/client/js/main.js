document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/productos')
    .then(response => response.json())
    .then(data => {
      // Lógica para mostrar productos en la página
      console.log('Productos desde MongoDB:', data);
    });
});
