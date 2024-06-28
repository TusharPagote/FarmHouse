import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import FarmhouseForm from "./FarmhouseForm";
import "../../assets/css/modal.css"; // Adjust the path as needed

const EditModal = forwardRef((_, ref) => {
  const dialog = useRef(null);
  const [data, setData] = useState(null);

  useImperativeHandle(ref, () => ({
    open: (farmhouse) => {
      setData(farmhouse);
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

  const handleSave = () => {
    // Handle the save logic here, e.g., send updated data to the server
    dialog.current.close();
  };

  return createPortal(
    <dialog ref={dialog} className="edit-modal">
      {data && (
        <>
          <h3>Edit Farmhouse</h3>
          <FarmhouseForm data={data} />
          <div className="modal-buttons">
            <button onClick={handleSave}>Save</button>
            <button onClick={() => dialog.current.close()}>Cancel</button>
          </div>
        </>
      )}
    </dialog>,
    document.getElementById("modal") // Ensure this element exists in your HTML
  );
});

export default EditModal;
