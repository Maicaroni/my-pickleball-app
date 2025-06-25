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

  // Dummy user data for testing
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

  const login = (userData, token) => {
    // Store user data and token
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', token);
    setUser(userData);
  };

  const logout = () => {
    // Clear user data and token
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
  };

  // Function to simulate login with dummy data (for testing)
  const loginWithDummyData = () => {
    const dummyToken = 'dummy-jwt-token-12345';
    login(dummyUser, dummyToken);
  };

  const value = {
    user,
    login,
    logout,
    loginWithDummyData,
    loading,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth }; 