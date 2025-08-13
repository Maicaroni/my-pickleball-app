import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

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
  const [notification, setNotification] = useState({
    isVisible: false,
    message: '',
    type: 'success',
  });

  // Load user/token from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
    }
    setLoading(false);
  }, []);

  // Central function to set user, token, axios header, and localStorage
  const setAuth = (userData, token) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  const showNotification = (message, type = 'success') => {
    setNotification({ isVisible: true, message, type });
  };

  const hideNotification = () => {
    setNotification((prev) => ({ ...prev, isVisible: false }));
  };

  const loginWithCredentials = async (email, password, rememberMe = true) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      const { token, user } = res.data;

      const storage = rememberMe ? localStorage : sessionStorage;
      storage.setItem('user', JSON.stringify(user));
      storage.setItem('token', token);

      // Clear token from other storage to avoid conflict
      if (rememberMe) sessionStorage.removeItem('token');
      else localStorage.removeItem('token');

      setAuth(user, token);
      showNotification(`Welcome back, ${user.firstName}!`, 'success');

      return { success: true };
    } catch (err) {
      console.error('Login error:', err.response?.data || err.message);
      return {
        success: false,
        error: err.response?.data?.message || 'Login failed. Please try again.',
      };
    }
  };

  const register = async (formData) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      const { token, user } = res.data;

      setAuth(user, token);
      showNotification(`Welcome, ${user.firstName}! Your account has been created.`, 'success');

      return { success: true };
    } catch (err) {
      console.error('Registration error:', err.response?.data || err.message);
      return {
        success: false,
        error: err.response?.data?.message || 'Registration failed. Please try again.',
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
    showNotification('You have been logged out', 'info');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loginWithCredentials,
        register,
        logout,
        loading,
        isAuthenticated: !!user,
        notification,
        showNotification,
        hideNotification,
        setAuth, // <-- expose setAuth here
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
