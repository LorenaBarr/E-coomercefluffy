import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from './routes/routes.js';
import './db.js';
import { obtenerTodosLosProductos } from './controllers/ProductsController.js';

const app = express();

app.use(express.json());
app.use('/api', routes);

// Configurar el directorio estático para servir los archivos compilados de React
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.get("/product",obtenerTodosLosProductos);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
