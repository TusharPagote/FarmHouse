import React, { useState } from "react";

import "../../assets/css/admin.css";
import { useFetchData } from "../../assets/data/http";

function Dashboard() {
  const [farmhouseList, setFarmhouseList] = useState();
  useFetchData("/list", setFarmhouseList);
  const [enquiryData, setEnquiryData] = useState([]);
  useFetchData("/enquiries", setEnquiryData);

  if (!farmhouseList) {
    return <div></div>;
  }

  return (
    <main className="main-container">
      <div className="main-title">
        <h2>Dashboard</h2>
      </div>

      <div className="main-cards">
        {/* <div className="admin-card">
          <div className="card-inner">
            <h3>PRODUCTS</h3>
          </div>
          <h1>300</h1>
        </div> */}
        <div className="admin-card">
          <div className="card-inner">
            <h3>FARMHOUSES</h3>
          </div>
          <h1>{farmhouseList.length}</h1>
        </div>
        <div className="admin-card">
          <div className="card-inner">
            <h3>ENQURIES</h3>
          </div>
          <h1>{enquiryData.length}</h1>
        </div>
        <div className="admin-card">
          <div className="card-inner">
            <h3>CATEGORIES</h3>
          </div>
          <h1>2</h1>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
