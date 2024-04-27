import React, { useState } from "react";
import "../../assets/css/admin.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Enquiry from "./Enquiry";
import FarmhouseList from "./Farmhouse/FarmhouseList";


function Admin() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState("Home");

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleSidebarButtonClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
        handleSidebarButtonClick={handleSidebarButtonClick}
      />
      {selectedComponent === "Home" && <Home />}
      {selectedComponent === "Dashboard" && <Dashboard />}
      {selectedComponent === "Enquiry" && <Enquiry />}
      {selectedComponent === "Farmhouse" && <FarmhouseList />}
     
    </div>
  );
}

export default Admin;
