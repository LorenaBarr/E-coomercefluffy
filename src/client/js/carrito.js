document.addEventListener('DOMContentLoaded', () => {
    const carritoContainer = document.getElementById('carrito-container');

    function mostrarProductosEnCarrito() {
        // Obtener el carrito desde el localStorage
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        // Limpiar el contenedor del carrito
        carritoContainer.innerHTML = '';

        // Mostrar los productos del carrito
        carrito.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('producto-en-carrito');

            productoDiv.innerHTML = `
                <div>
                    <h2>${producto.nombre}</h2>
                    <p>Precio: $${producto.precio.toFixed(2)}</p>
                    <p>Cantidad: ${producto.cantidad}</p>
                    <button class="agregar-cantidad-btn" data-id="${producto.id}">Agregar cantidad</button>
                    <button class="eliminar-producto-btn" data-id="${producto.id}">Eliminar producto</button>
                </div>
            `;

            // Agregar event listener para el botón de agregar cantidad
            productoDiv.querySelector('.agregar-cantidad-btn').addEventListener('click', () => {
                // Lógica para incrementar la cantidad del producto en el carrito
                // Puedes implementar esto según tus necesidades específicas
            });

            // Agregar event listener para el botón de eliminar producto
            productoDiv.querySelector('.eliminar-producto-btn').addEventListener('click', () => {
                // Lógica para eliminar el producto del carrito
                // Puedes implementar esto según tus necesidades específicas
            });

            carritoContainer.appendChild(productoDiv);
        });

        // Calcular el total de la compra
        const totalCompra = carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);

        // Mostrar el total de la compra
        const totalHTML = `
            <h3>Total de la compra: $${totalCompra.toFixed(2)}</h3>
        `;
        carritoContainer.innerHTML += totalHTML;
    }

    // Mostrar los productos en el carrito al cargar el DOM
    mostrarProductosEnCarrito();
});