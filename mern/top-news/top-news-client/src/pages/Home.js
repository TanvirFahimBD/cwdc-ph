import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./Shared/NewsCard";

const Home = () => {
  const news = useLoaderData();

  let content;
  if (news.length === 0) {
    content = <p>No news available...</p>;
  }

  if (news.length > 0) {
    content = (
      <div>
        {news.map((ct) => (
          <NewsCard ct={ct} key={ct._id} />
        ))}
      </div>
    );
  }

  return content;
};

export default Home;
