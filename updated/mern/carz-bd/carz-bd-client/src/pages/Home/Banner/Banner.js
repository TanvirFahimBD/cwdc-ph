import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full img-gradient">
        <img
          src="https://i.ibb.co/tMm95yc/service-5.jpg"
          className="w-full"
          alt=""
        />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
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
            CarzBd ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptates fuga ad molestiae similique consequuntur iure ipsam nulla
            quis possimus dolorem, rerum aperiam
          </p>
          <button className="btn btn-success  mr-3 text-white ">
            Contact Now
          </button>
          <button className="btn btn-outline btn-success text-white ">
            Learn More
          </button>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/7btX8vF/service-1.jpg"
          className="w-full"
          alt=""
        />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/47cJkbr/service-2.jpg"
          className="w-full"
          alt=""
        />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/yfP34jb/service-6.jpg"
          className="w-full"
          alt=""
        />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
