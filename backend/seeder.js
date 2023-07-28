//seeding the data into the database
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

//two function for importing and destroying data

//mongoose returns a promise so need to use async, await
const importData = async () => {
  try {
    //deleting all the records before importing the data
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    //after deleting the existing records, importing the data using insertMany
    const createdUsers = await User.insertMany(users);

    //getting the admin after inserting
    const adminUser = createdUsers[0]._id;

    //inserting the admin object in all these products
    const sampleProducts = products.map((product) => ({
      ...product,
      user: adminUser,
    }));

    //inserting the products into the database
    await Product.insertMany(sampleProducts);
    console.log('Data Imported! Nicee!');
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

//for destroying the data in the collections
const destroyData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
