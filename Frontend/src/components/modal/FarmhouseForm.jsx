// import React from "react";
// import "../../assets/css/modal.css";

// export default function FarmhouseForm() {
//   return (
//     <div>
//       <h3>Add New Farmhouse</h3>
//       <p className="input-section">
//         <i className="fa-solid fa-user"></i>
//         <input
//           type="text"
//           placeholder="Name"
//           name="name"
//           value="Tushar"
//           required
//         />
//       </p>
//       <p className="input-section">
//         <i className="fa-solid fa-envelope"></i>
//         <input type="text" placeholder="Location" name="location" required />
//       </p>

//       <p className="input-section">
//         <i className="fa-solid fa-city"></i>
//         <input type="text" placeholder="Category" name="category" required />
//       </p>
//       <p className="input-section">
//         <i className="fa-solid fa-phone"></i>
//         <input type="number" placeholder="Price" name="price" required />
//       </p>
//       <p className="input-section">
//         <i className="fa-solid fa-city"></i>
//         <input type="text" placeholder="Type" name="type" required />
//       </p>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import "../../assets/css/modal.css";

export default function FarmhouseForm({ defaultValues = {} }) {
  const [name, setName] = useState(defaultValues.name || "");
  const [location, setLocation] = useState(defaultValues.location || "");
  const [category, setCategory] = useState(defaultValues.category || "");
  const [weekday_price, setWeekdayPrice] = useState(
    defaultValues.weekday_price || ""
  );
  const [price, setPrice] = useState(defaultValues.price || "");
  const [type, setType] = useState(defaultValues.type || "");

  useEffect(() => {
    setName(defaultValues.name || "");
    setLocation(defaultValues.location || "");
    setCategory(defaultValues.category || "");
    setWeekdayPrice(defaultValues.weekday_price || "");
    setPrice(defaultValues.price || "");
    setType(defaultValues.type || "");
  }, [defaultValues]);

  return (
    <div>
      <h3>{defaultValues.id ? "Edit Farmhouse" : "Add New Farmhouse"}</h3>
      <p className="input-section">
        <i className="fa-solid fa-user"></i>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </p>
      <p className="input-section">
        <i class="fa-solid fa-location-dot"></i>
        <input
          type="text"
          placeholder="Location"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </p>
      <p className="input-section">
        <i class="fa-solid fa-list"></i>
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </p>
      <p className="input-section">
        <i class="fa-solid fa-indian-rupee-sign"></i>
        <input
          type="number"
          placeholder="Weekday Price"
          name="Weekday Price"
          value={weekday_price}
          onChange={(e) => setWeekdayPrice(e.target.value)}
          required
        />
        <p style={{ paddingRight: "15px" }}>
          <i class="fa-solid fa-grip-lines-vertical"></i>
        </p>
        <i class="fa-solid fa-indian-rupee-sign"></i>
        <input
          type="number"
          placeholder="Weekend Price"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </p>
      <p className="input-section">
        <i className="fa-solid fa-city"></i>
        <input
          type="text"
          placeholder="Type"
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
      </p>
    </div>
  );
}
