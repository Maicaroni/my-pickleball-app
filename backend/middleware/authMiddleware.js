<<<<<<< HEAD
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authorization token missing" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "pickleballSecret");

    // ✅ Fetch user without password
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user; // ✅ Attach user object for later use
    next();
  } catch (err) {
    console.error("JWT verification error:", err.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = authMiddleware;
=======
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log('Authorization header:', authHeader); // DEBUG

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.log('No token or invalid auth header, treating as guest'); // DEBUG
    req.user = null; // guest user
    return next();
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
    req.user = null; // treat as guest if token is invalid
    next();
  }
};
>>>>>>> origin/frontend
