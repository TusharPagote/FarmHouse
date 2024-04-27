import { useState } from "react";
import "../../assets/css/admin.css";

function Sidebar({ openSidebarToggle, OpenSidebar, handleSidebarButtonClick }) {
  const [selectedButton, setSelectedButton] = useState("");

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    handleSidebarButtonClick(buttonName);
  };

  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <i className="fa-solid fa-igloo icon_header"></i>
          FarmRent
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li
          className={
            "sidebar-list-item " +
            (selectedButton === "Dashboard" ? "selected" : "")
          }
        >
          <button
            // className={selectedButton === "Dashboard" ? "selected" : ""}
            onClick={() => handleButtonClick("Dashboard")}
          >
            <i className="fa-solid fa-hashtag icon"></i>
            Dashboard
          </button>
        </li>
        <li
          className={
            "sidebar-list-item " +
            (selectedButton === "Enquiry" ? "selected" : "")
          }
        >
          <button
            // className={selectedButton === "Enquiry" ? "selected" : ""}
            onClick={() => handleButtonClick("Enquiry")}
          >
            <i className="fa-solid fa-circle-question icon"></i>
            Enquiry
          </button>
        </li>
        <li
          className={
            "sidebar-list-item " +
            (selectedButton === "Farmhouse" ? "selected" : "")
          }
        >
          <button
            // className={selectedButton === "Farmhouse" ? "selected" : ""}
            onClick={() => handleButtonClick("Farmhouse")}
          >
            <i className="fa-solid fa-tent icon"></i>
            Farmhouse
          </button>
        </li>
        <li
          className={
            "sidebar-list-item " +
            (selectedButton === "Categories" ? "selected" : "")
          }
        >
          <button
            // className={selectedButton === "Categories" ? "selected" : ""}
            onClick={() => handleButtonClick("Categories")}
          >
            <i className="fa-solid fa-filter icon"></i>
            Categories
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
