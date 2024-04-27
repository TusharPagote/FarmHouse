import React from "react";

const FarmhouseCard = ({
  id,
  name,
  location,
  category,
  price,
  onEdit,
  onDelete,
  onView,
}) => {
  return (
    <div className="farmhouse-card">
      <div className="farmhouse-info">
        <div className="farmhouse-id">ID: {id}</div>
        <div className="buttons">
          <button onClick={onEdit}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      </div>
      <div
        className="farmhouse-name"
        style={{ fontWeight: "600", marginTop: "10px" }}
      >
        {name}
      </div>
      <div className="farmhouse-location" style={{ color: "grey" }}>
        {location}
      </div>{" "}
      <div className="farmhouse-category" style={{ color: "grey" }}>
        {category}
      </div>
      <div className="bottom-container">
        <div className="farmhouse-price">Price: {price}</div>
        <button className="view-button" onClick={onView}>
          View
        </button>
      </div>
    </div>
  );
};

export default FarmhouseCard;
