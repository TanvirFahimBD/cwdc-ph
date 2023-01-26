import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" container mx-auto d-flex justify-content-between  rounded-pill m-2 p-3 shadow-lg">
      <div className="text-warning ms-3">Top News</div>
      <div>
        <Link to="/" className="mx-3 text-decoration-none">
          Home
        </Link>
        <Link to="/top-products" className="mx-3 text-decoration-none ">
          News
        </Link>
        <Link to="/wish-list" className="mx-3 text-decoration-none ">
          Category
        </Link>
        <Link to="/cart" className="mx-3 text-decoration-none ">
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Header;
