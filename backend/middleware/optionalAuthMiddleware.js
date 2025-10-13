// Optional authentication middleware - sets req.user if token is present but doesn't fail if missing
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // for players and clubadmins
const SuperAdmin = require('../models/SuperAdmin'); // for superadmins

const optionalAuthMiddleware = (roles = []) => {
  return async (req, res, next) => {
    console.log("🔹 optionalAuthMiddleware triggered for:", req.method, req.path);

    const authHeader = req.headers.authorization;
    console.log("🔹 Auth header:", authHeader ? `Bearer ${authHeader.substring(7, 27)}...` : 'missing');
    
    // If no auth header, just continue without setting req.user
    if (!authHeader?.startsWith('Bearer ')) {
      console.log("🔹 No auth header, continuing without user");
      return next();
    }

    const token = authHeader.split(" ")[1];
    console.log("🔹 Extracted token:", token ? `${token.substring(0, 20)}...` : 'null');

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || "pickleballSecret");
      console.log("✅ JWT decoded:", { id: decoded.id, adminId: decoded.adminId });

      // Determine user type
      let user;
      if (decoded.adminId) {
        // superadmin
        user = await SuperAdmin.findById(decoded.adminId).select("-password");
        console.log("🔹 Found superadmin:", user ? user._id : 'not found');
      } else if (decoded.id) {
        // clubadmin or player
        user = await User.findById(decoded.id).select("-password");
        console.log("🔹 Found user:", user ? user._id : 'not found');
      }

      if (user) {
        req.user = user;
        console.log("✅ Optional auth successful, user set");
        
        // Check roles if specified and user is authenticated
        if (roles.length) {
          const userRoles = user.roles || (user.role ? [user.role] : []); // normalize to array
          if (!userRoles.some(role => roles.includes(role))) {
            console.log("❌ Role check failed", userRoles);
            return res.status(403).json({ 
              message: "Forbidden: insufficient role",
              error: "INSUFFICIENT_ROLE"
            });
          }
        }
      } else {
        console.log("🔹 User not found in DB, continuing without user");
      }

      next();
    } catch (err) {
      console.log("🔹 JWT verification failed, continuing without user:", err.message);
      // For optional auth, we don't fail on invalid tokens, just continue without user
      next();
    }
  };
};

module.exports = optionalAuthMiddleware;