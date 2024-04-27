import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import "../../assets/css/modal.css";
import InfoBox from "../InfoBox";

const ShowDetailModal = forwardRef(function ShowDetailModal(_, ref) {
  const dialog = useRef(null);
  const [data, setData] = useState();

  useImperativeHandle(ref, () => ({
    open: (property) => {
      // Receive property data as an argument
      if (dialog.current) {
        dialog.current.showModal();
        // You can access property data here and use it as needed
        setData(property);
        console.log("Property data:", property);
      }
    },
    close: () => {
      if (dialog.current) {
        dialog.current.close();
      }
    },
  }));

  console.log("Data:", data);
  console.log("Property:", data && data.property);

  return createPortal(
    <dialog
      ref={dialog}
      className="result-modal"
      style={{ textAlign: "start", padding: "50px" }}
    >
      {/* <span style={{ fontSize: "5em", color: "black" }}>
        <i className="fa-solid fa-circle-check" style={{ color: "green" }}></i>
      </span>

      <p>
        <strong>Registered Successfully !!</strong>
      </p> */}
      {/* <form method="dialog" style={{textAlign:"end"}}>
        <button onClick={() => dialog.current.close()}>X</button>
      </form> */}
      <h5 style={{ textAlign: "end", color: "black", fontSize: "1.5rem" }}>
        <i class="fa-solid fa-circle-xmark"></i>
      </h5>

      <div className="result-modal-container">
        {data && data.property && (
          <div>
            <p>
              <strong>ID: {data.property.id}</strong>
            </p>
            <InfoBox
              title1="Name"
              content1={data.property.name}
              title2="Phone"
              content2={"+91-" + data.property.phone}
            />
            <InfoBox
              title1="Email"
              content1={data.property.email}
              title2="City"
              content2={data.property.city}
            />
            <div className="divider"></div>
            <p>
              <strong>Enquiry Details</strong>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              cumque cum labore dolores laborum vero eveniet similique. Alias
              iste excepturi rem magnam consequatur, mollitia non nobis eaque
              possimus fugit corrupti?
            </p>
          </div>
        )}

        <form method="dialog" className="message-form">
          <button onClick={() => dialog.current.close()}>Close</button>
        </form>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ShowDetailModal;

// import { forwardRef, useImperativeHandle, useRef } from "react";
// import { createPortal } from "react-dom";
// import "./style.css";

// const MessageModel = forwardRef(function MessageModel(props, ref) {
//   const dialog = useRef(null);

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
//     <dialog ref={dialog} className="result-modal">
//       <span style={{ fontSize: "5em", color: "black" }}>
//         <i className="fa-solid fa-circle-check" style={{ color: "green" }}></i>
//       </span>

//       <p>
//         <strong>Registered Successfully !!</strong>
//       </p>
//       <form method="dialog" className="message-form">
//         <button onClick={() => dialog.current.close()}>Close</button>
//       </form>
//     </dialog>,
//     document.getElementById("modal")
//   );
// });

// export default MessageModel;
