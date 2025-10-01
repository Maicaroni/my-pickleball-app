import axios from 'axios';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 30000, // Increased timeout to 30 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
apiClient.interceptors.request.use(
  (config) => {
    // Get token from localStorage
    const storedUser = localStorage.getItem('user');
    const superAdminToken = localStorage.getItem('superadminToken');
    
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        if (userData.token) {
          config.headers.Authorization = `Bearer ${userData.token}`;
        }
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
        localStorage.removeItem('user');
      }
    } else if (superAdminToken) {
      config.headers.Authorization = `Bearer ${superAdminToken}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle auth errors
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('user');
      localStorage.removeItem('superadminToken');
      localStorage.removeItem('superadminId');
      localStorage.removeItem('superadminEmail');
      
      // Clear axios default headers
      delete axios.defaults.headers.common['Authorization'];
      
      // Redirect to login if not already there
      if (!window.location.pathname.includes('/signin') && 
          !window.location.pathname.includes('/superadmin/login')) {
        window.location.href = window.location.pathname.includes('/superadmin') 
          ? '/superadmin/login' 
          : '/signin';
      }
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;