//ES module integrated through changing the type in package.json
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { connect } from 'mongoose';
import connectDB from './config/db.js';
import router from './routes/productRoutes.js';

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

//using the productRoutes when the request has URL of api/products
app.use('/api/products', router);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
