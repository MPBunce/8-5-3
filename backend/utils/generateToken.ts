const jwt = require('jsonwebtoken');

const generateToken = (res: any, userId: any) => {

  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.cookie('jwt', token, {
    httpOnly: false,
    secure: false, // Use secure cookies in production
    sameSite: 'None', // Prevent CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });

};

export default generateToken;