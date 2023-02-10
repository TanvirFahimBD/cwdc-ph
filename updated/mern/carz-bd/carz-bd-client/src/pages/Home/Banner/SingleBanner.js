import React from "react";
import "./Banner.css";

const SingleBanner = ({ banner }) => {
  const { prev, id, next, img } = banner;
  return (
    <div id={id} className="carousel-item relative w-full">
      <img src={img} className="w-full" alt="" />
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
      <div className="absolute w-1/2 left-10 right-5 top-1/4">
        <p className="text-white text-5xl mb-3 font-bold">
          CarzBd ipsum dolor sit <br />
          consectetur adipisicing elit. <br />
          Voluptates fuga ad
        </p>
        <p className="text-white text-2xl  mb-3">
          CarzBd ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
          fuga ad molestiae similique consequuntur iure ipsam nulla quis
          possimus dolorem, rerum aperiam
        </p>
        <button className="btn btn-success  mr-3 text-white ">
          Contact Now
        </button>
        <button className="btn btn-outline btn-success text-white ">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default SingleBanner;
