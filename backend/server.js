//ES module integrated through changing the type in package.json
import express from 'express';
import products from './data/products.js';

const port = 8000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

//route for serving all the products
app.get('/api/products', (req, res) => {
  res.json(products);
});

//route for serving a specific products
app.get(`/api/products/:name`, (req, res) => {
  const product = products.find((p) => p.name === req.params.name);
  res.json(product);
});

app.listen(port, () => {
  console.log('Running on port 5000');
});