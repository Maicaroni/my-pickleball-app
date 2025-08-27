
import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";


const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState({
    isVisible: false,

    message: "",
    type: "success",
  });

  // Load user/token from localStorage on mount
useEffect(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    const parsedUser = JSON.parse(storedUser);
    if (parsedUser?.token) {
      setUser(parsedUser);
      axios.defaults.headers.common["Authorization"] = `Bearer ${parsedUser.token}`;
    } else {
      console.warn("⚠ No token found in localStorage user data");
    }
  }
  setLoading(false);
}, []);



  // Central function to set user + token + localStorage + axios header
  const setAuth = (userData, token) => {
    const combinedData = { ...userData, token };
    setUser(combinedData);
    localStorage.setItem("user", JSON.stringify(combinedData));
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  };

  const showNotification = (message, type = "success") => {

    setNotification({ isVisible: true, message, type });
  };

  const hideNotification = () => {
    setNotification((prev) => ({ ...prev, isVisible: false }));
  };

  // ✅ Login function
  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      const { token, user: userData } = res.data;

      if (!token) {
        return { success: false, error: "Login failed: no token returned" };
      }

      setAuth(userData, token);
      return { success: true };
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      return {
        success: false,
        error: err.response?.data?.message || "Login failed. Please try again.",

      };
    }
  };
  // ✅ Register function
  const register = async (formData) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", formData);
      const { token, user: userData } = res.data;

      setAuth(userData, token);
      showNotification(`Welcome, ${userData.firstName}! Your account has been created.`, "success");

      return { success: true };
    } catch (err) {
      console.error("Registration error:", err.response?.data || err.message);
      return {
        success: false,
        error: err.response?.data?.message || "Registration failed. Please try again.",
      };
    }
  };

  // ✅ Logout function
  const logout = () => {
    localStorage.removeItem("user");
    delete axios.defaults.headers.common["Authorization"];
    setUser(null);
    showNotification("You have been logged out", "info");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
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

