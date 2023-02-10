import React from "react";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2">
          <img
            src="https://i.ibb.co/HCpPS7H/foto-sushi-6anudmp-ILw4-unsplash.jpg"
            className="ml-10 relative top-1 max-w-md rounded-lg shadow-2xl"
            alt=""
          />
          <img
            src="https://i.ibb.co/whh3nYY/austin-distel-7uo-Mmz-Pd2-JA-unsplash.jpg"
            className="ml-40 bottom-10 relative max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <p className="text-green-400 text-2xl">About Us</p>
          <h1 className="text-5xl font-bold">
            We are qualified <br /> & of experience <br /> in this field{" "}
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-success text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
