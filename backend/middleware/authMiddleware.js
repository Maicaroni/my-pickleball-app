// universal authMiddleware with role check
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // for players and clubadmins
const SuperAdmin = require('../models/SuperAdmin'); // for superadmins

const authMiddleware = (roles = []) => {
  return async (req, res, next) => {
    console.log("🔹 authMiddleware triggered for:", req.method, req.path);

    const authHeader = req.headers.authorization;
    console.log("🔹 Auth header:", authHeader ? `Bearer ${authHeader.substring(7, 27)}...` : 'missing');
    
    if (!authHeader?.startsWith('Bearer ')) {
      console.log("❌ Missing or invalid header");
      return res.status(401).json({ 
        message: "Authorization token missing",
        error: "MISSING_TOKEN"
      });
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

      if (!user) {
        console.log("❌ User not found in DB");
        return res.status(404).json({ 
          message: "User not found",
          error: "USER_NOT_FOUND"
        });
      }

      req.user = user;
      console.log("✅ Auth successful, proceeding to next middleware");

      // Check roles
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

      console.log("✅ Auth passed, calling next()");
      next();
    } catch (err) {
      console.error("❌ JWT verification error:", err.message);
      console.error("❌ Full JWT error:", err);
      
      // Provide more specific error messages
      let errorMessage = "Invalid or expired token";
      let errorCode = "INVALID_TOKEN";
      
      if (err.name === 'JsonWebTokenError') {
        errorMessage = "Invalid token signature";
        errorCode = "INVALID_SIGNATURE";
      } else if (err.name === 'TokenExpiredError') {
        errorMessage = "Token has expired";
        errorCode = "TOKEN_EXPIRED";
      } else if (err.name === 'NotBeforeError') {
        errorMessage = "Token not active";
        errorCode = "TOKEN_NOT_ACTIVE";
      }
      
      return res.status(401).json({ 
        message: errorMessage,
        error: errorCode,
        details: err.message
      });
    }
  };
};

module.exports = authMiddleware;
