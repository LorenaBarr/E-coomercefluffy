import express from 'express';
import { obtenerTodosLosProductos } from '../controllers/ProductsController.js';
import {obtenerProductosExclusivos} from '../controllers/exclusiveProductsController.js'

const router = express.Router();

router.get('/productos', obtenerTodosLosProductos);

router.get('/exclusive-products', obtenerProductosExclusivos);


export default router;

