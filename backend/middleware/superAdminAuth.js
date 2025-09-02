const jwt = require('jsonwebtoken');
const SuperAdmin = require('../models/SuperAdmin');

const superAdminAuth = () => {
  return async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authorization token missing' });
      }

      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'pickleballSecret');
      console.log('🔹 SuperAdmin JWT decoded:', decoded);

      // Make sure your token has adminId
      const adminId = decoded.adminId || decoded._id;
      const admin = await SuperAdmin.findById(adminId).select('-password');

      if (!admin) {
        console.log('❌ SuperAdmin not found in DB');
        return res.status(404).json({ message: 'SuperAdmin not found' });
      }

      req.superadmin = admin;
      next();
    } catch (err) {
      console.error('❌ SuperAdmin JWT error:', err.message);
      res.status(401).json({ message: 'Invalid or expired token' });
    }
  };
};

module.exports = superAdminAuth;
