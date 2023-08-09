import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  //sending this a cookie
  res.cookie('jwt', token, {
    httpOnly: true,
    maxAge: 1 * 24 * 60 * 60 * 1000, // 1day
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
  });
};

export default generateToken;
