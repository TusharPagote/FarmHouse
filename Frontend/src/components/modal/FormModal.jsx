import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import "../../assets/css/contact.css";
import { createPortal } from "react-dom";
import { addData } from "../../assets/data/http";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import "../../assets/css/modal.css";

const FormModal = forwardRef(function FormModal({ endpont, children }, ref) {
  const dialog = useRef();
  const formRef = useRef();
  const [verified, setVerified] = useState(true);

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(!verified);
  }

  useImperativeHandle(ref, () => ({
    open: () => {
      if (dialog.current) {
        dialog.current.showModal();
      }
    },
    close: () => {
      if (dialog.current) {
        dialog.current.close();
      }
    },
  }));

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(formRef.current);
    // const cover = fd.getAll("images/list/p-4.png");

    // Generate a random ID
    const randomId = generateRandomId();

    // Convert form data to an object
    const data = Object.fromEntries(fd.entries());

    // Include random ID and acquisition channels in the data object
    data.id = randomId;
    if (endpont === "list") {
      data.cover = "images/list/p-4.png";
    }

    // Validate phone number
    if (endpont === "enquiries" && data.phone.length !== 10) {
      return;
    }

    // Call sendEnquiry function to send data to the backend
    addData(data, endpont)
      .then((success) => {
        if (success) {
          console.log("Success to send data to enqyuries...");
          // Enquiry sent successfully
          // Open modal or show success message
          // dialog.current.open();
          Swal.fire({
            icon: "success",
            title: "Done !!",
            text: "Your enquiry has been sent successfully",
          });
        } else {
          console.log("Falied to send data to enqyuries...");
          // Failed to send enquiry
          // Handle error (e.g., show error message)
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      })
      .catch((error) => {
        // Handle error (e.g., show error message)
        console.error("Error sending enquiry:", error);
      });

    // Log the data
    console.log(data);

    // Clear form after submission

    formRef.current.reset();
    dialog.current.close();
  }

  function generateRandomId() {
    const randomId =
      Math.random().toString(36).substring(2) + Date.now().toString(36);
    return randomId.substring(0, 5); // Return the first 5 characters of the random ID
  }

  return createPortal(
    <dialog
      ref={dialog}
      className="result-modal shadow"
      style={{ width: "45%" }}
    >
      <div className="result-modal-container">
        <form ref={formRef} onSubmit={handleSubmit}>
          {children},
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button onClick={() => dialog.current.close()}>Close</button>
            <button type="submit" disabled={verified}>
              Submit Request
            </button>
          </div>
        </form>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChange}
          />
        </div>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
});

export default FormModal;

// import { forwardRef, useImperativeHandle, useRef } from "react";
// import { createPortal } from "react-dom";
// import "../../assets/css/EnquiryModal.css";
// import "../../assets/css/contact.css";
// import { sendEnquiry } from "../../assets/data/http";
// import Swal from "sweetalert2";
// // import InputSection from "./InputSection";

// const EnquiryModal = forwardRef(function MessageModel({ message }, ref) {
//   const dialog = useRef(null);
//   const formRef = useRef();

//   function handleSignup(event) {
//     event.preventDefault();

//     const fd = new FormData(formRef.current);

//     // Generate a random ID
//     const randomId = generateRandomId();

//     // Convert form data to an object
//     const data = Object.fromEntries(fd.entries());

//     // Include random ID and acquisition channels in the data object
//     data.id = randomId;

//     // Validate phone number
//     if (data.phone.length !== 10) {
//       return;
//     }

//     // Call sendEnquiry function to send data to the backend
//     sendEnquiry(data)
//       .then((success) => {
//         if (success) {
//           // Enquiry sent successfully
//           // Open modal or show success message
//           dialog.current.open();
//         } else {
//           // Failed to send enquiry
//           // Handle error (e.g., show error message)
//         }
//       })
//       .catch((error) => {
//         // Handle error (e.g., show error message)
//         console.error("Error sending enquiry:", error);
//       });

//     // Log the data
//     console.log(data);

//     // Clear form after submission

//     formRef.current.reset();
//     dialog.current.close();

//     Swal.fire({
//       icon: "success",
//       title: "Done !!",
//       text: "Your enquiry has been sent successfully",
//       // footer: '<a href="#">Why do I have this issue?</a>',
//     });
//   }

//   function generateRandomId() {
//     const randomId =
//       Math.random().toString(36).substring(2) + Date.now().toString(36);
//     return randomId.substring(0, 5); // Return the first 5 characters of the random ID
//   }

//   useImperativeHandle(ref, () => ({
//     open: () => {
//       if (dialog.current) {
//         dialog.current.showModal();
//       }
//     },
//     close: () => {
//       if (dialog.current) {
//         dialog.current.close();
//       }
//     },
//   }));

//   return createPortal(
//     <dialog ref={dialog} className="result-modal shadow">
//       <div className="">
//         <form ref={formRef} onSubmit={handleSignup}>
//           <h2>Enquire now</h2> <br />
//           <p className="input-section">
//             <i className="fa-solid fa-user"></i>
//             <input type="text" placeholder="Name" name="name" required />
//           </p>
//           {/* <InputSection icon="fa-solid fa-envelope" type="text" placeholder="Name" name="name"/> */}
//           <p className="input-section">
//             <i className="fa-solid fa-envelope"></i>
//             <input type="email" placeholder="Email" name="email" required />
//           </p>
//           <p className="input-section">
//             <i className="fa-solid fa-users-line"></i>
//             <input
//               type="number"
//               placeholder="How many guest"
//               name="Guest"
//               required
//             />
//           </p>
//           <p className="input-section">
//             <i className="fa-solid fa-city"></i>
//             <input type="text" placeholder="City" name="city" required />
//           </p>
//           <p className="input-section">
//             <i className="fa-solid fa-phone"></i>
//             <input
//               type="number"
//               placeholder="Phone Number"
//               name="phone"
//               required
//             />
//           </p>
//           <div style={{ display: "flex", justifyContent: "space-around" }}>
//             <button onClick={() => dialog.current.close()}>Close</button>
//             <button type="submit">Submit Request</button>
//           </div>
//         </form>
//       </div>
//     </dialog>,
//     document.getElementById("message")
//   );
// });

// export default EnquiryModal;

// // import { forwardRef, useImperativeHandle, useRef } from "react";
// // import { createPortal } from "react-dom";
// // import "../assets/css/EnquiryModal.css";
// // const EnquiryModal = forwardRef(function MessageModel({ message }, ref) {
// //   const dialog = useRef(null);
// //   useImperativeHandle(ref, () => ({
// //     open: () => {
// //       if (dialog.current) {
// //         dialog.current.showModal();
// //       }
// //     },
// //     close: () => {
// //       if (dialog.current) {
// //         dialog.current.close();
// //       }
// //     },
// //   }));
// //   return createPortal(
// //     <dialog ref={dialog} className="result-modal">
// //       <span style={{ fontSize: "5em", color: "black" }}>
// //         <i className="fa-solid fa-circle-check" style={{ color: "green" }}></i>
// //       </span>
// //       <p>
// //         <strong>{message ?? "Done"}</strong>
// //       </p>
// //       <form method="dialog" className="message-form">
// //         <button onClick={() => dialog.current.close()}>Close</button>
// //       </form>
// //     </dialog>,
// //     document.getElementById("message")
// //   );
// // });
// // export default EnquiryModal;
