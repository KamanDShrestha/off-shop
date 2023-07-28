//implementing routes for the products
import express from 'express';
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';
//router through express framework
const router = express.Router();

//route for serving all the products
//as all the prior URL is already handled, so handling the specific routes for api/products
router.get(
  '/',
  asyncHandler(async (req, res) => {
    //getting the products from the database
    const products = await Product.find({});
    res.json(products);
  })
);

//route for serving a specific products
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    //getting the specific products from the database using id
    const product = await Product.findById(req.params.id);

    if (product) {
      return res.json(product);
    }
    return res.status(404).json({ message: 'Product not found' });
  })
);

export default router;
