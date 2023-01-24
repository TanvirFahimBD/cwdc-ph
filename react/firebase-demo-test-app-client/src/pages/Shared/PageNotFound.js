import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <p>PageNotFound</p>
      <Link to="/">Go Back To Home</Link>
    </div>
  );
};

export default PageNotFound;
