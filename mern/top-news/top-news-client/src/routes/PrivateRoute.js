import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useUser();
  const location = useLocation();

  if (!user?.uid) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return children;
};

export default PrivateRoute;
