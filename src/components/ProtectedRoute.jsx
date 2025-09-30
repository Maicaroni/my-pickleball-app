import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children, requiredRole = null, allowedRoles = [] }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  // Show loading while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Check if user is authenticated
  if (!user) {
    // Redirect to login with return URL
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  // Check role-based access
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  // Check if user has any of the allowed roles
  if (allowedRoles.length > 0) {
    const userRoles = Array.isArray(user.roles) ? user.roles : [user.role];
    const hasAllowedRole = allowedRoles.some(role => userRoles.includes(role));
    
    if (!hasAllowedRole) {
      return <Navigate to="/" replace />;
    }
  }

  return children;
};

export default ProtectedRoute;