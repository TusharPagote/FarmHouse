import React from "react";
import '../../assets/css/modal.css'

export default function EnquiryForm() {
  return (
    <div>
      <h3>Enquire now</h3>
      <p className="input-section">
        <i className="fa-solid fa-user"></i>
        <input type="text" placeholder="Name" name="name" required />
      </p>
      <p className="input-section">
        <i className="fa-solid fa-envelope"></i>
        <input type="email" placeholder="Email" name="email" required />
      </p>
      <p className="input-section">
        <i className="fa-solid fa-users-line"></i>
        <input
          type="number"
          placeholder="How many guest"
          name="Guest"
          required
        />
      </p>
      <p className="input-section">
        <i className="fa-solid fa-city"></i>
        <input type="text" placeholder="City" name="city" required />
      </p>
      <p className="input-section">
        <i className="fa-solid fa-phone"></i>
        <input type="number" placeholder="Phone Number" name="phone" required />
      </p>
    </div>
  );
}
