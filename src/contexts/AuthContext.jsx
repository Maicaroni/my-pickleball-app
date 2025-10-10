
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { validateToken, sanitizeInput } from '../utils/validation';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = () => {
      try {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          const userData = JSON.parse(storedUser);
          
          // Validate token before setting user
          if (userData.token && validateToken(userData.token)) {
            setUser(userData);
            // Set axios default header
            axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
          } else {
            // Invalid or expired token, clear storage
            localStorage.removeItem('user');
            delete axios.defaults.headers.common['Authorization'];
          }
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
        localStorage.removeItem('user');
        delete axios.defaults.headers.common['Authorization'];
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // Add a function to update user profile data
  const updateUserProfile = (profileData) => {
    if (user) {
      const updatedUser = { ...user, ...profileData };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  const login = async (email, password) => {
    try {
      // Sanitize inputs
      const sanitizedEmail = sanitizeInput(email);
      const sanitizedPassword = sanitizeInput(password);

      const response = await axios.post('/api/auth/login', {
        email: sanitizedEmail,
        password: sanitizedPassword,
      });

      const { token, user: userInfo, profile } = response.data;
      
      // Validate token before storing
      if (token && validateToken(token)) {
        // Merge user and profile data
        const mergedUserData = {
          token,
          ...userInfo,
          ...(profile || {}), // Merge profile data if it exists
        };
        
        setUser(mergedUserData);
        localStorage.setItem('user', JSON.stringify(mergedUserData));
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        return { success: true, data: mergedUserData };
      } else {
        throw new Error('Invalid token received');
      }
    } catch (error) {
      console.error('Login error:', error);
      return { 
        success: false, 
        error: error.response?.data?.message || 'Login failed' 
      };
    }
  };

  const register = async (userData) => {
    try {
      // Sanitize all input data
      const sanitizedData = {};
      Object.keys(userData).forEach(key => {
        if (key !== 'password') {
          sanitizedData[key] = sanitizeInput(userData[key]);
        } else {
          sanitizedData[key] = userData[key]; // Don't sanitize password
        }
      });

      const response = await axios.post('/api/auth/register', sanitizedData);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Registration error:', error);
      return { 
        success: false, 
        error: error.response?.data?.message || 'Registration failed' 
      };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    delete axios.defaults.headers.common['Authorization'];
  };

  const refreshToken = async () => {
    try {
      const response = await axios.post('/api/auth/refresh');
      const { token, user: userInfo, profile } = response.data;
      
      if (token && validateToken(token)) {
        // Merge user and profile data
        const mergedUserData = {
          token,
          ...userInfo,
          ...(profile || {}), // Merge profile data if it exists
        };
        
        setUser(mergedUserData);
        localStorage.setItem('user', JSON.stringify(mergedUserData));
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        return true;
      }
      return false;
    } catch (error) {
      console.error('Token refresh failed:', error);
      logout();
      return false;
    }
  };

  const value = {
    user,
    loading,
    isAuthenticated: !!user && !!user.token,
    login,
    register,
    logout,
    refreshToken,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

