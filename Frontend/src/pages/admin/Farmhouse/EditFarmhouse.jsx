// import React, { useRef } from "react";
// // import "../../assets/css/propertyInfo.css";
// import "../../../assets/css/propertyInfo.css";
// import ImageCarousel from "../../../components/image_component";
// import { useLocation } from "react-router-dom";
// import FormModal from "../../../components/modal/FormModal";
// import EnquiryForm from "../../../components/modal/EnquiryForm";
// import Button from "../../../components/Button";
// import FeatureCard from "../../../components/FeatureCard";

// function EditFarmhouse() {
//   const dialog = useRef();

//   const location = useLocation();
//   const { id } = location.state || {};

//   function handleClick() {
//     dialog.current.open();
//   }
//   return (
//     <>
//       <FormModal
//         ref={dialog}
//         endpont="enquiries"
//         message="Your enquiry has been successfully submitted."
//       >
//         <EnquiryForm />
//       </FormModal>
//       <div className="property-page">
//         <div className="property-image-section">
//           <ImageCarousel />
//         </div>
//         <div className="gap"></div>
//         <div className="property-box">
//           <div className="property-info">
//             <table className="property-info-table">
//               <tbody>
//                 <tr>
//                   <td className="property-info-sublabel">
//                     Mon - Thus (Price / Night) {id}
//                   </td>
//                   <td className="property-info-value"> 18000 /-</td>
//                 </tr>
//                 <tr>
//                   <td className="property-info-sublabel">
//                     Fri - Sun (Price / Night)
//                   </td>
//                   <td className="property-info-value"> 18000 /-</td>
//                 </tr>
//               </tbody>
//             </table>
//             <div className="divider"></div>
//             <p style={{ fontSize: "0.9rem", textAlign: "center" }}>
//               Note : Check-In 12:00 PM and Check-out time will be 12:00 PM!
//             </p>
//             <div className="divider"></div>
//             <p style={{ fontSize: "0.9rem", textAlign: "center" }}>
//               Address: Gate No. 3, P.O. Bichhiya, Kanha Tiger Reserve, Near
//               Sarhi, Madhya Pradesh.
//             </p>
//             <div className="divider"></div>
//             <div
//               style={{
//                 fontWeight: "600",
//                 marginTop: "10px",
//               }}
//             >
//               What this place offers
//             </div>
//             <FeatureCard
//               title="Free cancellation for 48 hours"
//               description="Get a full refund if you change your mind."
//             />
//             <FeatureCard
//               title="Great location"
//               description="00% of recent guests gave the location a 5-star rating."
//             />
//             <div style={{ marginTop: "25px" }}></div>
//             <Button
//               onClick={handleClick}
//               className="btn1"
//               style={{ marginTop: "15px", width: "100%" }}
//             >
//               Enquiry
//             </Button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default EditFarmhouse;

import React, { useState, useRef } from "react";
import "../../../assets/css/propertyInfo.css";
import ImageCarousel from "../../../components/image_component";
import { useLocation } from "react-router-dom";
import FormModal from "../../../components/modal/FormModal";
import EnquiryForm from "../../../components/modal/EnquiryForm";
import Button from "../../../components/Button";
import FeatureCard from "../../../components/FeatureCard";

function EditFarmhouse() {
  const dialog = useRef();
  const location = useLocation();
  const { id } = location.state || {};

  // State variables for each editable field
  const [priceWeekday, setPriceWeekday] = useState("18000 /-");
  const [priceWeekend, setPriceWeekend] = useState("18000 /-");
  const [checkInTime, setCheckInTime] = useState("12:00 PM");
  const [checkOutTime, setCheckOutTime] = useState("12:00 PM");
  const [note, setNote] = useState(
    "Note : Check-In 12:00 PM and Check-out time will be 12:00 PM!"
  );
  const [address, setAddress] = useState(
    "Gate No. 3, P.O. Bichhiya, Kanha Tiger Reserve, Near Sarhi, Madhya Pradesh."
  );
  const [offers, setOffers] = useState([
    {
      title: "Free cancellation for 48 hours",
      description: "Get a full refund if you change your mind.",
    },
    {
      title: "Great location",
      description: "00% of recent guests gave the location a 5-star rating.",
    },
  ]);

  function handleClick() {
    dialog.current.open();
  }

  // Function to update offers
  const handleOfferChange = (index, key, value) => {
    const newOffers = [...offers];
    newOffers[index][key] = value;
    setOffers(newOffers);
  };

  // Save function (optional)
  const handleSave = () => {
    // Handle save logic, e.g., send data to the server
    console.log("Saved:", {
      priceWeekday,
      priceWeekend,
      checkInTime,
      checkOutTime,
      note,
      address,
      offers,
    });
  };

  return (
    <div className="edit-farmhouse-page">
      <div className="edit-farmhouse-container">
        <div style={{ flex: "1" }}>
          <ImageCarousel />
          <div className="farmhouse-details">
            <h2>Farmhouse Details</h2>
            <div className="farmhouse-details-section">
              <label>Mon - Thurs (Price / Night)</label>
              <input
                type="text"
                value={priceWeekday}
                onChange={(e) => setPriceWeekday(e.target.value)}
              />
            </div>
            <div className="farmhouse-details-section">
              <label>Fri - Sun (Price / Night)</label>
              <input
                type="text"
                value={priceWeekend}
                onChange={(e) => setPriceWeekend(e.target.value)}
              />
            </div>
            <div className="farmhouse-details-section">
              <label>Check-In Time</label>
              <input
                type="text"
                value={checkInTime}
                onChange={(e) => setCheckInTime(e.target.value)}
              />
            </div>
            <div className="farmhouse-details-section">
              <label>Check-Out Time</label>
              <input
                type="text"
                value={checkOutTime}
                onChange={(e) => setCheckOutTime(e.target.value)}
              />
            </div>
            <div className="farmhouse-details-section">
              <label>Address</label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="upload-images">
            <h2>Upload Images</h2>
            <input type="file" multiple />
            <Button className="btn1" style={{ marginTop: "10px" }}>
              Upload Images
            </Button>
          </div>
        </div>
        <div style={{ flex: "1" }}>
          <div className="place-offers">
            <h2>What this place offers</h2>
            {offers.map((offer, index) => (
              <div key={index} className="offer-section">
                <input
                  type="text"
                  value={offer.title}
                  onChange={(e) =>
                    handleOfferChange(index, "title", e.target.value)
                  }
                />
                <textarea
                  value={offer.description}
                  onChange={(e) =>
                    handleOfferChange(index, "description", e.target.value)
                  }
                />
              </div>
            ))}
          </div>{" "}
          <div className="enquiry-actions">
            <h2>Enquiry Actions</h2>
            <div className="button-section">
              <Button
                onClick={handleSave}
                className="btn1"
                style={{ marginBottom: "10px" }}
              >
                Save Changes
              </Button>
              {/* <span style={{ width: "20px" }}></span> */}
              <Button className="btn1" style={{ marginBottom: "10px" }}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditFarmhouse;
