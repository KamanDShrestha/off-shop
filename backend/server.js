//ES module integrated through changing the type in package.json
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
//using custom error handler
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const port = process.env.PORT || 8001;

connectDB(); //connecting to the database
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// allowing cors to be used
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

//body parser middleware to get the body of the request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//for parsing the cookie
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello world!');
});

//using the productRoutes when the request has URL of api/products
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use(errorHandler);
app.use(notFound);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
