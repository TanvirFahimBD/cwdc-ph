import React from "react";

const Services = ({ service }) => {
  const { picture, name, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full my-4">
      <figure>
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-success text-white">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
