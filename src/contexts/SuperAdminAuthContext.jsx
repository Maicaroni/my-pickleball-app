import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const SuperAdminAuthContext = createContext();

export const useSuperAdminAuth = () => {
  const context = useContext(SuperAdminAuthContext);
  if (!context) {
    throw new Error('useSuperAdminAuth must be used within a SuperAdminAuthProvider');
  }
  return context;
};

export const SuperAdminAuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = () => {
      try {
        const token = localStorage.getItem('superadminToken');
        const adminData = localStorage.getItem('superAdmin');
        
        if (token && adminData) {
          const parsedAdmin = JSON.parse(adminData);
          setAdmin(parsedAdmin);
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
      } catch (error) {
        console.error('Error initializing super admin auth:', error);
        logout();
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post('/api/superadmin/login', {
        email,
        password,
      });

      const { token, admin: adminData } = response.data;
      const adminWithRole = { ...adminData, role: 'superadmin' };

      localStorage.setItem('superadminToken', token);
      localStorage.setItem('superadminId', adminData._id);
      localStorage.setItem('superadminEmail', adminData.email);
      localStorage.setItem('superAdmin', JSON.stringify(adminWithRole));
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      setAdmin(adminWithRole);
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Login failed' 
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('superadminToken');
    localStorage.removeItem('superadminId');
    localStorage.removeItem('superadminEmail');
    localStorage.removeItem('superAdmin');
    delete axios.defaults.headers.common['Authorization'];
    setAdmin(null);
  };

  const getToken = () => {
    return localStorage.getItem('superadminToken');
  };

  const isAuthenticated = () => {
    return !!admin && !!getToken();
  };

  const value = {
    admin,
    loading,
    login,
    logout,
    getToken,
    isAuthenticated: isAuthenticated(),
  };

  return (
    <SuperAdminAuthContext.Provider value={value}>
      {children}
    </SuperAdminAuthContext.Provider>
  );
};