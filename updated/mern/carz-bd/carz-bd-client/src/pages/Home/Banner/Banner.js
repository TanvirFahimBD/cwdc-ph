import React from "react";
import SingleBanner from "./SingleBanner";

const Banner = () => {
  const banners = [
    {
      prev: 4,
      id: 1,
      next: 2,
      img: "https://i.ibb.co/yfP34jb/service-6.jpg",
    },
    {
      prev: 1,
      id: 2,
      next: 3,
      img: "https://i.ibb.co/xCD7x13/service-4.jpg",
    },
    {
      prev: 2,
      id: 3,
      next: 4,
      img: "https://i.ibb.co/7btX8vF/service-1.jpg",
    },
    {
      prev: 3,
      id: 4,
      next: 1,
      img: "https://i.ibb.co/tMm95yc/service-5.jpg",
    },
  ];

  return (
    <div className="carousel w-full">
      {banners.map((banner) => (
        <SingleBanner banner={banner} />
      ))}
    </div>
  );
};

export default Banner;
