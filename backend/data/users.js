import bcrypt from 'bcryptjs';

//preparing the dummy data as the products will be dependent upon the user for seeding
const users = [
  {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Kaman',
    email: 'kaman@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Amrita',
    email: 'amrita@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
];

export default users;
