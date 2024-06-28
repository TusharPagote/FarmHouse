import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import "../../assets/css/modal.css";
import InfoBox from "../InfoBox";
import { deleteData } from "../../assets/data/http";

const ShowDetailModal = forwardRef(function ShowDetailModal({ tag }, ref) {
  const dialog = useRef(null);
  const [data, setData] = useState(null);

  useImperativeHandle(ref, () => ({
    open: (property) => {
      console.log("Opening modal with property:", property);
      if (dialog.current) {
        setData(property);
        dialog.current.showModal();
        console.log("Property data set:", property);
      }
    },
    close: () => {
      if (dialog.current) {
        dialog.current.close();
      }
    },
  }));

  console.log("Data:", data);

  const renderContent = () => {
    if (tag === "farmhouse" && data && data.farmhouse) {
      const { cover, id, name, location, category, price, type } =
        data.farmhouse;
      return (
        <>
          <img
            src={cover}
            style={{ height: "250px", borderRadius: "10px" }}
            alt="farmhouseImage"
          />
          <div className="divider"></div>
          <p>
            <strong>ID: {id}</strong>
          </p>
          <InfoBox
            title1="Name"
            content1={name}
            title2="Location"
            content2={location}
          />
          <InfoBox
            title1="Category"
            content1={category}
            title2="Price"
            content2={price}
          />
          <InfoBox title1="Type" content1={type} />
        </>
      );
    }

    if (tag === "enquiry" && data && data.property) {
      const { id, name, phone, email, city } = data.property;
      return (
        <>
          <p>
            <strong>ID: {id}</strong>
          </p>
          <InfoBox
            title1="Name"
            content1={name}
            title2="Phone"
            content2={"+91-" + phone}
          />
          <InfoBox
            title1="Email"
            content1={email}
            title2="City"
            content2={city}
          />
          <div className="divider"></div>
          <p>
            <strong>Enquiry Details</strong>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            cumque cum labore dolores laborum vero eveniet similique. Alias iste
            excepturi rem magnam consequatur, mollitia non nobis eaque possimus
            fugit corrupti?
          </p>
          <form method="dialog" className="message-form">
            <button onClick={() => deleteData(id, "enquiries")}>Delete</button>
          </form>
        </>
      );
    }

    return null;
  };

  return createPortal(
    <dialog
      ref={dialog}
      className="result-modal"
      style={{ textAlign: "start" }}
    >
      <h5 className="icon-button" onClick={() => dialog.current.close()}>
        <i className="fa-solid fa-circle-xmark icon-button"></i>
      </h5>
      <div className="result-modal-container">{renderContent()}</div>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ShowDetailModal;
