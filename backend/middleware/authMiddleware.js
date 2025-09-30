// universal authMiddleware with role check
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // for players and clubadmins
const SuperAdmin = require('../models/SuperAdmin'); // for superadmins

const authMiddleware = (roles = []) => {
  return async (req, res, next) => {
    console.log("🔹 authMiddleware triggered");

    const authHeader = req.headers.authorization;
    console.log("🔹 Auth header:", authHeader);
    
    if (!authHeader?.startsWith('Bearer ')) {
      console.log("❌ Missing or invalid header");
      return res.status(401).json({ message: "Authorization token missing" });
    }

    const token = authHeader.split(" ")[1];
    console.log("🔹 Extracted token:", token ? `${token.substring(0, 20)}...` : 'null');

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || "pickleballSecret");
      console.log("✅ JWT decoded:", decoded);

      // Determine user type
      let user;
      if (decoded.adminId) {
        // superadmin
        user = await SuperAdmin.findById(decoded.adminId).select("-password");
      } else if (decoded.id) {
        // clubadmin or player
        user = await User.findById(decoded.id).select("-password");
      }

      if (!user) {
        console.log("❌ User not found in DB");
        return res.status(404).json({ message: "User not found" });
      }

      req.user = user;

      // Check roles
// Check roles
if (roles.length) {
  const userRoles = user.roles || (user.role ? [user.role] : []); // normalize to array
  if (!userRoles.some(role => roles.includes(role))) {
    console.log("❌ Role check failed", userRoles);
    return res.status(403).json({ message: "Forbidden: insufficient role" });
  }
}


      console.log("✅ Auth passed, calling next()");
      next();
    } catch (err) {
      console.error("❌ JWT verification error:", err.message);
      return res.status(401).json({ message: "Invalid or expired token" });
    }
  };
};

module.exports = authMiddleware;
