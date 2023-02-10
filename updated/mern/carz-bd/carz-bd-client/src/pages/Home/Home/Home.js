import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Banner />
      <About />
      <Services />
    </div>
  );
};

export default Home;
