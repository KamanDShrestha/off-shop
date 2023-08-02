//implementing routes for the products
import express from 'express';

import {
  getProductById,
  getProducts,
} from '../controllers/productController.js';

//router through express framework
const router = express.Router();

//route for serving all the products
//as all the prior URL is already handled, so handling the specific routes for api/products
router.route('/').get(getProducts);

//route for serving a specific products
router.route('/:id').get(getProductById);

export default router;
