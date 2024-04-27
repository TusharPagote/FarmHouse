import React from "react";
function Header({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="menu-icon">
        <i className="fa-solid fa-bars icon" onClick={OpenSidebar}></i>
      </div>
      <div className="header-left">
        <i className="fa-solid fa-magnifying-glass icon"></i>
      </div>
      <div className="header-right">
        <i className="fa-solid fa-gear icon"></i>
      </div>
    </header>
  );
}

export default Header;
