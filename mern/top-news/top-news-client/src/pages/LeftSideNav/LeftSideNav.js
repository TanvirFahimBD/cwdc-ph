import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [newsCategories, setNewsCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/news-categories")
      .then((res) => res.json())
      .then((data) => {
        setNewsCategories(data);
      });
  }, []);

  return (
    <div>
      <h4 className="fw-bold my-3">Categories</h4>
      <div className="text-start">
        {newsCategories.map((nc) => (
          <Link
            to={`/category/${nc.id}`}
            key={nc.id}
            className="text-decoration-none"
          >
            {nc.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
