const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = (roles = []) => {
  return async (req, res, next) => {
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

      req.user = user; // ✅ Attach user

      // ✅ Role check (if roles are provided)
      if (roles.length && !roles.some(role => user.roles.includes(role))) {
      return res.status(403).json({ message: "Forbidden: insufficient role" });
    }


      next();
    } catch (err) {
      console.error("JWT verification error:", err.message);
      return res.status(401).json({ message: "Invalid or expired token" });
    }
  };
};

module.exports = authMiddleware;
