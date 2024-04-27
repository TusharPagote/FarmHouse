import React from "react";
import "../../assets/css/modal.css";

export default function FarmhouseForm() {
  return (
    <div>
      <h3>Add New Farmhouse</h3>
      <p className="input-section">
        <i className="fa-solid fa-user"></i>
        <input type="text" placeholder="Name" name="name" required />
      </p>
      <p className="input-section">
        <i className="fa-solid fa-envelope"></i>
        <input type="text" placeholder="Location" name="location" required />
      </p>

      <p className="input-section">
        <i className="fa-solid fa-city"></i>
        <input type="text" placeholder="Category" name="category" required />
      </p>
      <p className="input-section">
        <i className="fa-solid fa-phone"></i>
        <input type="number" placeholder="Price" name="price" required />
      </p>
      <p className="input-section">
        <i className="fa-solid fa-city"></i>
        <input type="text" placeholder="Type" name="type" required />
      </p>
    </div>
  );
}
