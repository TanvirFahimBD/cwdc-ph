import React from "react";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div>
      <small>All rights reserved. © {year}</small>
    </div>
  );
};

export default Footer;
