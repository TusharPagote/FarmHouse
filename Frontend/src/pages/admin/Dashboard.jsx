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
      <div style={{ height: "10%" }}></div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#2d3954"
          fill-opacity="1"
          d="M0,32L40,48C80,64,160,96,240,133.3C320,171,400,213,480,202.7C560,192,640,128,720,112C800,96,880,128,960,128C1040,128,1120,96,1200,117.3C1280,139,1360,213,1400,250.7L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </main>
  );
}

export default Dashboard;
