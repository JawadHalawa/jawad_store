// src/components/AdminRoute.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ element }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const isAdmin = useSelector(state => state.auth.isAdmin);

  return isAuthenticated && isAdmin ? element : <Navigate to="/signin" />;
};

export default AdminRoute;
