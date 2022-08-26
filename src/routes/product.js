const { Router } = require('express');

const router = Router();

const ProductsController = require('../controllers/products_controller');

router.get('/', ProductsController.getProducts);
router.put('/update/:_id', ProductsController.updateProduct);

module.exports = router;
