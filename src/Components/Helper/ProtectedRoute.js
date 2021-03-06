import React, { useContext } from 'react';
import { Navigate, Route } from 'react-router';
import { UserContext } from '../../UserContext';

const ProtectedRoute = (props) => {
  const { login } = useContext(UserContext);

  if (login) return <Route {...props} />;
  else if (!login) return <Navigate to="/login" />;
  else return null;
};

export default ProtectedRoute;
