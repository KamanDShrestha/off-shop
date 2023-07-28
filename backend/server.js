//ES module integrated through changing the type in package.json
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import products from './data/products.js';
import { connect } from 'mongoose';
import connectDB from './config/db.js';
const port = process.env.PORT || 8001;

connectDB(); //connecting to the database
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello world!');
});

//route for serving all the products
app.get('/api/products', (req, res) => {
  res.json(products);
});

//route for serving a specific products
app.get('/api/products/:name', (req, res) => {
  const product = products.find((p) => p.name === req.params.name);
  res.json(product);
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
