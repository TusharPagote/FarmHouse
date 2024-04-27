// /* eslint-disable react/jsx-pascal-case */
// import React from "react";
// import "./product.css";
// import DemoCarousel from "./image_component";

// const PropertyInfo = () => (
//   <>
//     <div className="property-page">
//       <div className="property-image-section">
//         <DemoCarousel />
//       </div>
//       <div className="property-box">
//         <div className="property-info">
//           <h3>Genaral Information</h3>
//           <table className="property-info-table">
//             <tbody>
//               <tr>
//                 <td className="property-info-label">Room Detail:</td>
//                 <td className="property-info-value">
//                   This farmhouse has 4 air-conditioned bedrooms.
//                 </td>
//               </tr>
//               <tr>
//                 <td className="property-info-label">No. of Rooms:</td>
//                 <td className="property-info-value">2</td>
//               </tr>
//               <tr>
//                 <td className="property-info-label">Price:</td>
//                 <td className="property-info-value">Rs.5600</td>
//               </tr>
//               <tr>
//                 <td className="property-info-label">Furnished:</td>
//                 <td className="property-info-value">Yes</td>
//               </tr>
//               <tr>
//                 <td className="property-info-label">Location:</td>
//                 <td className="property-info-value">
//                   Kailod Kartal, Risi Nagar, Tilak Path, Indore, Madhya Pradesh.
//                 </td>
//               </tr>
//               <tr>
//                 <td className="property-info-label">Note:</td>
//                 <td className="property-info-value">
//                   Note : Check-In 2:00 PM and Check-out time will be 12:00 PM!
//                 </td>
//               </tr>
//             </tbody>
//           </table>

//           <div style={{ fontWeight: "600", marginTop: "10px" }}>
//             About This Property
//           </div>

//           <div style={{ fontSize: "0.8rem" }}>
//             This is a beautiful farmhouse in Kailod Kartal, Risi Nagar, Tilak
//             Path, Indore, Madhya Pradesh. It is a very nicely developed and well
//             maintained farmhouse where you will get a lot of fun, activities and
//             family time. This farmhouse has 15000 sq. feet of lawn area, 1
//             air-conditioned hall, 4 air-conditioned rooms and 10 washrooms. In
//             this farmhouse you can host open-air lawn parties, birthday parties,
//             bachelors parties & get-togethers.
//           </div>

//           <button className="property-button">Enquiry</button>
//         </div>
//       </div>
//     </div>
//   </>
// );

// export default PropertyInfo;

import React, { useRef } from "react";
import "../../assets/css/propertyInfo.css";
import ImageCarousel from "./image_component";
// import Card from "../../components/Card";
import { useLocation } from "react-router-dom";
// import MessageModal from "../../components/modal/MessageModal";
import FeatureCard from "../../components/FeatureCard";
// import MessageModel from "../home/message/MessageModule";
// import EnquiryModal from "../../components/modal/MessageModal";
import Button from "../../components/Button";
import EnquiryForm from "../../components/modal/EnquiryForm";
import FormModal from "../../components/modal/FormModal";
// import EnquiryForm from "./Enquiry/EnquiryForm";

function PropertyInfo() {
  const dialog = useRef();

  const location = useLocation();
  const { id } = location.state || {};

  function handleClick() {
    dialog.current.open();
  }
  return (
    <>
      <FormModal
        ref={dialog}
        endpont="enquiries"
        message="Your enquiry has been successfully submitted."
      >
        <EnquiryForm />
      </FormModal>
      <div className="property-page">
        <div className="property-image-section">
          <ImageCarousel />
        </div>
        <div className="gap"></div>
        <div className="property-box">
          <div className="property-info">
            <table className="property-info-table">
              <tbody>
                <tr>
                  <td className="property-info-sublabel">
                    Mon - Thus (Price / Night) {id}
                  </td>
                  <td className="property-info-value"> 18000 /-</td>
                </tr>
                <tr>
                  <td className="property-info-sublabel">
                    Fri - Sun (Price / Night)
                  </td>
                  <td className="property-info-value"> 18000 /-</td>
                </tr>
              </tbody>
            </table>
            <div className="divider"></div>
            <p style={{ fontSize: "0.9rem", textAlign: "center" }}>
              Note : Check-In 12:00 PM and Check-out time will be 12:00 PM!
            </p>
            <div className="divider"></div>
            <p style={{ fontSize: "0.9rem", textAlign: "center" }}>
              Address: Gate No. 3, P.O. Bichhiya, Kanha Tiger Reserve, Near
              Sarhi, Madhya Pradesh.
            </p>
            <div className="divider"></div>
            <div
              style={{
                fontWeight: "600",
                marginTop: "10px",
              }}
            >
              What this place offers
            </div>
            <FeatureCard
              title="Free cancellation for 48 hours"
              description="Get a full refund if you change your mind."
            />
            <FeatureCard
              title="Great location"
              description="00% of recent guests gave the location a 5-star rating."
            />
            <div style={{ marginTop: "25px" }}></div>
            <Button
              onClick={handleClick}
              className="btn1"
              style={{ marginTop: "15px", width: "100%" }}
            >
              Enquiry
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyInfo;

// function PropertyInfo() {
//   const [showModal, setShowModal] = useState(false);
//   const location = useLocation();
//   const { id } = location.state || {};
//   const dialog = useRef();

//   function handleClick() {
//     setShowModal(true);
//     dialog.current.open();
//   }

//   function handleCloseModal() {
//     setShowModal(false);
//   }

//   return (
//     <>
//       <MessageModel
//         message="Your enquiry has been successfully submitted."
//         onClose={handleCloseModal}
//       />

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

//             <form>
//               <button
//                 onClick={handleClick}
//                 className="btn1"
//                 style={{ marginTop: "15px", width: "100%" }}
//               >
//                 Enquiry
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//       {/* {showModal && <EnquiryForm onClose={handleCloseModal} />} */}
//     </>
//   );
// }

// export default PropertyInfo;
