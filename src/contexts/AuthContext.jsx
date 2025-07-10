import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState({
    isVisible: false,
    message: '',
    type: 'success'
  });

  // Dummy user data for testing
  const dummyCredentials = {
    email: 'john.doe@gmail.com',
    password: 'password123'
  };

  const dummyUser = {
    id: 'user123',
    email: 'john.doe@gmail.com',
    firstName: 'John',
    lastName: 'Doe',
    name: 'John Doe',
    avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=29ba9b&color=fff&size=40',
    roles: ['user'],
    joinDate: '2024-01-15',
    isVerified: true
  };

  useEffect(() => {
    // Check if user is already logged in (from localStorage)
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const showNotification = (message, type = 'success') => {
    setNotification({
      isVisible: true,
      message,
      type
    });
  };

  const hideNotification = () => {
    setNotification(prev => ({
      ...prev,
      isVisible: false
    }));
  };

  const authenticate = (email, password) => {
    // Check credentials against dummy data
    return email === dummyCredentials.email && password === dummyCredentials.password;
  };

  const login = (userData, token) => {
    // Store user data and token
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', token);
    setUser(userData);
    showNotification(`Welcome back, ${userData.firstName}!`, 'success');
  };

  const loginWithCredentials = (email, password) => {
    if (authenticate(email, password)) {
      const dummyToken = 'dummy-jwt-token-12345';
      login(dummyUser, dummyToken);
      return { success: true };
    } else {
      return { 
        success: false, 
        error: 'Invalid email or password. Please try again.' 
      };
    }
  };

  const logout = () => {
    // Clear user data and token
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    showNotification('User logged out', 'info');
  };

  // Function to simulate login with dummy data (for testing)
  const loginWithDummyData = () => {
    const dummyToken = 'dummy-jwt-token-12345';
    login(dummyUser, dummyToken);
  };

  const value = {
    user,
    login,
    loginWithCredentials,
    logout,
    loginWithDummyData,
    authenticate,
    loading,
    isAuthenticated: !!user,
    notification,
    showNotification,
    hideNotification,
    dummyCredentials // For reference (don't expose in production)
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth }; 