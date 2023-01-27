import React from "react";
import { useLoaderData } from "react-router-dom";

const Category = () => {
  const category = useLoaderData();
  console.log("category", category);
  return <div>Category</div>;
};

export default Category;
