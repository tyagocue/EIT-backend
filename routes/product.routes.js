const express = require('express')
const router = express.Router();
const productController = require('./../controllers/product.controller')
// Obtener todos los productos
router.get('/products', productController.getAllProducts)
// Obtener productos por categoria
// Obtener un producto específico
// Añadir un producto
// Eliminar un producto
router.delete('/products', productController.deleteProduct)
// Modificar un producto

module.exports = router;