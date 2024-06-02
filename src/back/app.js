const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes/routes');

// Configura middleware para manejar el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Usa las rutas definidas en el archivo routes.js
app.use('/api', routes);

// Servir archivos estáticos desde la carpeta 'src/front'
app.use(express.static(path.join(__dirname, '../front')));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
