module.exports = (req, res, next) => {
  // Check if authMiddleware already verified and attached req.user
  if (!req.user) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  if (req.user.role !== 'superadmin') {
    return res.status(403).json({ message: 'Access denied' });
  }

  next();
};