import React from "react";
import "../assets/css/propertyInfo.css";

const Card = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="card-icon">
        <i className="fa-solid fa-bed"></i>
      </div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
