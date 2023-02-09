import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-center">
      <Link to="/" className="mx-3">
        Home
      </Link>
      <Link to="/user/add">Add User</Link>
    </div>
  );
};

export default Header;
