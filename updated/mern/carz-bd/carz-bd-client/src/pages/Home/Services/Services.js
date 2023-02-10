import React, { useEffect, useState } from "react";
import Service from "../Services/Service";

const Services = () => {
  const [allServices, setAllServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        setAllServices(data);
      });
  }, []);

  return (
    <div>
      <div className="text-center my-10 w-1/2 mx-auto">
        <h1 className="text-2xl text-green-400">Service</h1>
        <h1 className="text-4xl font-bold mb-3">Our Service Area</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          nostrum, placeat eius ullam illum voluptate accusantium magni saepe
          enim veritatis necessitatibus sunt. Laborum, eligendi natus! Commodi
          quos optio quam saepe.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {allServices.map((service) => (
          <Service service={service} key={service._id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
