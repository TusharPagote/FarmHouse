// import React from "react";

// const FarmhouseCard = ({
//   id,
//   name,
//   location,
//   category,
//   price,
//   onEdit,
//   onDelete,
//   onView,
// }) => {
//   return (
//     <div className="farmhouse-card">
//       <div className="farmhouse-info">
//         <div className="farmhouse-id">ID: {id}</div>
//         <div className="buttons">
//           <button onClick={onEdit}>Edit</button>
//           <button onClick={onDelete}>Delete</button>
//         </div>
//       </div>
//       <div
//         className="farmhouse-name"
//         style={{ fontWeight: "600", marginTop: "10px" }}
//       >
//         {name}
//       </div>
//       <div className="farmhouse-location" style={{ color: "grey" }}>
//         {location}
//       </div>{" "}
//       <div className="farmhouse-category" style={{ color: "grey" }}>
//         {category}
//       </div>
//       <div className="bottom-container">
//         <div className="farmhouse-price">Price: {price}</div>
//         <button className="view-button" onClick={onView}>
//           View
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FarmhouseCard;

import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import FormModal from "../../../components/modal/FormModal";
import FarmhouseForm from "../../../components/modal/FarmhouseForm";
import { getDataById } from "../../../assets/data/http";

const FarmhouseCard = ({
  id,
  name,
  location,
  category,
  price,
  onEdit,
  onDelete, // Accept onDelete prop
  onView,
}) => {
  const dialog = useRef();
  const [entry, setEntry] = useState(null);
  const [defaultValues, setDefaultValues] = useState(null);

  const handleEdit = async () => {
    try {
      const data = await getDataById(id, "list");
      setDefaultValues(data);
      console.log(data);
      dialog.current.open();
    } catch (error) {
      // setError(error.message);
    }
  };

  function handleDelete() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  }
  return (
    <>
      <FormModal
        id={id}
        ref={dialog}
        endpont="list"
        message="Your enquiry has been successfully submitted."
      >
        <FarmhouseForm defaultValues={defaultValues || {}} />
      </FormModal>
      <div className="farmhouse-card">
        <div className="farmhouse-info">
          <div className="farmhouse-id">ID: {id}</div>
          <div className="buttons">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>{" "}
            {/* Call onDelete on click */}
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
    </>
  );
};

export default FarmhouseCard;
