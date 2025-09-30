// Input validation and sanitization utilities

// Email validation
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Password validation
export const validatePassword = (password) => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

// Phone number validation
export const validatePhone = (phone) => {
  const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
  return phoneRegex.test(phone);
};

// Name validation (no special characters except spaces, hyphens, apostrophes)
export const validateName = (name) => {
  const nameRegex = /^[a-zA-Z\s\-']{2,50}$/;
  return nameRegex.test(name);
};

// Sanitize HTML to prevent XSS
export const sanitizeHtml = (input) => {
  if (typeof input !== 'string') return input;
  
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

// Sanitize input for SQL injection prevention (basic)
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  
  return input
    .replace(/['"\\;]/g, '') // Remove quotes, backslashes, semicolons
    .trim();
};

// Validate and sanitize form data
export const validateFormData = (data, rules) => {
  const errors = {};
  const sanitizedData = {};

  Object.keys(rules).forEach(field => {
    const value = data[field];
    const rule = rules[field];

    // Check if required field is present
    if (rule.required && (!value || value.toString().trim() === '')) {
      errors[field] = `${field} is required`;
      return;
    }

    // Skip validation if field is not required and empty
    if (!rule.required && (!value || value.toString().trim() === '')) {
      sanitizedData[field] = '';
      return;
    }

    let sanitizedValue = value;

    // Apply sanitization
    if (rule.sanitize) {
      sanitizedValue = sanitizeHtml(sanitizedValue);
    }

    // Apply validation
    if (rule.type === 'email' && !validateEmail(sanitizedValue)) {
      errors[field] = 'Please enter a valid email address';
    } else if (rule.type === 'password' && !validatePassword(sanitizedValue)) {
      errors[field] = 'Password must be at least 8 characters with uppercase, lowercase, and number';
    } else if (rule.type === 'phone' && !validatePhone(sanitizedValue)) {
      errors[field] = 'Please enter a valid phone number';
    } else if (rule.type === 'name' && !validateName(sanitizedValue)) {
      errors[field] = 'Name can only contain letters, spaces, hyphens, and apostrophes';
    } else if (rule.minLength && sanitizedValue.length < rule.minLength) {
      errors[field] = `${field} must be at least ${rule.minLength} characters`;
    } else if (rule.maxLength && sanitizedValue.length > rule.maxLength) {
      errors[field] = `${field} must not exceed ${rule.maxLength} characters`;
    }

    sanitizedData[field] = sanitizedValue;
  });

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    data: sanitizedData
  };
};

// Rate limiting helper (client-side)
export const createRateLimiter = (maxRequests, timeWindow) => {
  const requests = [];
  
  return () => {
    const now = Date.now();
    
    // Remove old requests outside the time window
    while (requests.length > 0 && requests[0] <= now - timeWindow) {
      requests.shift();
    }
    
    // Check if we've exceeded the limit
    if (requests.length >= maxRequests) {
      return false;
    }
    
    // Add current request
    requests.push(now);
    return true;
  };
};

// Token validation
export const validateToken = (token) => {
  if (!token) return false;
  
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return false;
    
    const payload = JSON.parse(atob(parts[1]));
    const currentTime = Date.now() / 1000;
    
    return payload.exp > currentTime;
  } catch (error) {
    return false;
  }
};