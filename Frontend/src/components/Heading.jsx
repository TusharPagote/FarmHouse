import React from "react";

const Heading = ({ title, subtitle, isCenter = false }) => {
  return (
    <>
      <div
        className="heading"
        style={{ textAlign: !isCenter ? "center" : "start" }}
      >
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </>
  );
};

export default Heading;
