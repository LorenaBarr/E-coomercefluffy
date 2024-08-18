import express from 'express';
import { obtenerTodosLosProductos } from '../controllers/ProductsController.js';

const router = express.Router();

router.get('/productos', obtenerTodosLosProductos);

export default router;

