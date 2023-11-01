import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { Navigate } from 'react-router-dom';
import Navbar from '../global/Navbar';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useAuth();
  return isLoggedIn ? (
    <div>
      <Navbar />
      {children}
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
