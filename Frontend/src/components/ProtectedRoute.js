import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('authToken'); // Check if JWT token exists

  if (!token) {
    // If the token doesn't exist, redirect to the login page
    return <Navigate to="/" />;
  }

  // If the token exists, render the children components (protected content)
  return children;
};

export default ProtectedRoute;
