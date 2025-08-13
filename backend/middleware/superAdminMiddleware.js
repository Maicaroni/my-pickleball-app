const jwt = require('jsonwebtoken');
const SuperAdmin = require('../models/SuperAdmin');

module.exports = async (req, res, next) => {
  try {
    // Get token from header
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      console.log('No token provided');
      return res.status(401).json({ message: 'No token, access denied' });
    }

    // Verify token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      console.log('Token verification failed:', err.message);
      return res.status(401).json({ message: 'Token is invalid or expired' });
    }

    req.user = decoded; // decoded should contain { id, role }
    console.log('Decoded token:', decoded);

    // Check if user exists in DB
    const admin = await SuperAdmin.findById(req.user.id);
    if (!admin) {
      console.log('Superadmin not found in DB');
      return res.status(403).json({ message: 'Access denied: superadmin not found' });
    }

    // Check role
    if (admin.role !== 'superadmin') {
      console.log('User role is not superadmin:', admin.role);
      return res.status(403).json({ message: 'Access denied: not a superadmin' });
    }

    console.log('Superadmin verified:', admin.email);
    next();
  } catch (err) {
    console.error('Middleware error:', err);
    res.status(500).json({ message: 'Server error in superAdminMiddleware' });
  }
};
