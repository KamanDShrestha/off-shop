import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

import generateToken from '../utils/generateToken.js';
//functions for invokation after getting the request

// @desc Auth user
// @route POST /api/user
// @access Public
const authUser = asyncHandler(async (req, res) => {
  console.log('here');

  console.log(req.body);
  const { email, password } = req.body;
  console.log(email);
  const user = await User.findOne({ email });
  console.log(user);
  if (user && (await user.matchPassword(password))) {
    //making a token through the user Id

    generateToken(res, user._id);

    res.send({
      id: user._id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error('The user cannot be authenticated.');
  }
});

// @desc Register user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  //taking the name, email and password from the req body
  const { name, email, password } = req.body;

  //checking if this already exists
  const alreadyExists = await User.findOne({ email });

  //if already exists, sending a error
  if (alreadyExists) {
    res.status(400);
    throw new Error('User already exists within our system');
  }

  //otherwise create a new user
  const user = await User.create({ name, email, password });

  //if successfully created then, send a res
  if (user) {
    generateToken(res, user._id);
    res.status(201);
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error('User can not be created. Please try again');
  }

  //encryting the password using pre and bcrypt in the userModel.js
});

// @desc Logout user
// @route GET /api/users
// @access Private
const logoutUser = asyncHandler(async (req, res) => {
  //expiring the cookie
  res.cookie('jwt', '', { httpOnly: true, expires: new Date(0) });
  res.status(200).json('logged out successfully');
});

// @desc get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  //getting the user from the database
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      id: user._id,
      email: user.email,
      createdAt: user.createdAt,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error('User not found');
  }
});

// @desc update profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.status(200).json({
      id: updatedUser._id,
      email: updatedUser.email,
      createdAt: updatedUser.createdAt,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error('User not found');
  }
});

// @desc update profile
// @route GET /api/users
// @access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send('get Users');
});

// @desc get users by id
// @route GET /api/users/:id
// @access Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  res.send('get Users by id');
});

// @desc delete profile
// @route DELETE /api/users/:id
// @access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send('delete user');
});

// @desc update profile by id
// @route PUT /api/users/:id
// @access Private/Admin
const updateUserById = asyncHandler(async (req, res) => {
  res.send('update user by  user');
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUserById,
};
