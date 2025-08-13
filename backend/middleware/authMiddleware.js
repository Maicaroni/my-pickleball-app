const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log('Authorization header:', authHeader); // DEBUG

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.log('No token or invalid auth header'); // DEBUG
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  const token = authHeader.split(' ')[1];
  console.log('Token:', token); // DEBUG

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'pickleballSecret');
    console.log('Decoded token:', decoded); // DEBUG
    req.user = { id: decoded.id, email: decoded.email };
    next();
  } catch (err) {
    console.error('JWT verification error:', err.message);
    return res.status(401).json({ message: 'Token is not valid' });
  }
};
