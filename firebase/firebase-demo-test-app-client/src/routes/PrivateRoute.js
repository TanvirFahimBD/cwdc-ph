import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { USER_CONTEXT } from "../contexts/UserContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(USER_CONTEXT);
  const location = useLocation();

  if (loading) {
    return <p> Loading...</p>;
  }

  if (user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
