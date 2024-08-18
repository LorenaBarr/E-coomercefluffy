const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes/routes');



const app = express();
require('dotenv').config();



// Configura middleware para manejar el cuerpo de las solicitudes en formato JSON
app.use(express.json());
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

    // Configurar Content Security Policy
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline';");
  next();
});

// Usa las rutas definidas en el archivo routes.js
app.use('/api', routes);

// Servir archivos estáticos desde la carpeta 'src/front'
app.use(express.static(path.join(__dirname, '../front')));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
