import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const SuperAdminRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('superadminToken');
      const adminId = localStorage.getItem('superadminId');
      
      if (token && adminId) {
        // Additional validation: check if token is not expired
        try {
          const tokenPayload = JSON.parse(atob(token.split('.')[1]));
          const currentTime = Date.now() / 1000;
          
          if (tokenPayload.exp > currentTime) {
            setIsAuthenticated(true);
          } else {
            // Token expired, clear storage
            localStorage.removeItem('superadminToken');
            localStorage.removeItem('superadminId');
            localStorage.removeItem('superadminEmail');
            setIsAuthenticated(false);
          }
        } catch (error) {
          // Invalid token format
          localStorage.removeItem('superadminToken');
          localStorage.removeItem('superadminId');
          localStorage.removeItem('superadminEmail');
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
      
      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/superadmin/login" state={{ from: location }} replace />;
  }

  return children;
};

export default SuperAdminRoute;