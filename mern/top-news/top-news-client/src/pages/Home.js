import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const news = useLoaderData();
  console.log("news", news);
  return <div>Home</div>;
};

export default Home;
