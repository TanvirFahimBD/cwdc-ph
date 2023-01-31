import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import NewsCard from "../Shared/NewsCard";

const Category = () => {
  useTitle("Category");
  const category = useLoaderData();

  let content;
  if (category.length === 0) {
    content = <p>No news available...</p>;
  }

  if (category.length > 0) {
    content = (
      <div>
        {category.map((ct) => (
          <NewsCard ct={ct} key={ct._id} />
        ))}
      </div>
    );
  }

  return content;
};

export default Category;
