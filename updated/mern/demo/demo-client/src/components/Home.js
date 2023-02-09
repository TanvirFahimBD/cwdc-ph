import React from "react";
import Header from "./Header";
import Users from "./Users";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const users = useLoaderData();
  return (
    <div className="App">
      <Header />
      <Users allUsers={users} />
    </div>
  );
};

export default Home;
