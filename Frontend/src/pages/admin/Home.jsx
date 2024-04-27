import React from "react";
import "../../assets/css/admin.css";

function Home() {

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>Home</h3>
      </div>

      <div className="main-cards">
        <div className="admin-card">
          <div className="card-inner">
            <h3>PRODUCTS</h3>
          </div>
          <h1>300</h1>
        </div>
        <div className="admin-card">
          <div className="card-inner">
            <h3>CATEGORIES</h3>
          </div>
          <h1>12</h1>
        </div>
        <div className="admin-card">
          <div className="card-inner">
            <h3>CUSTOMERS</h3>
          </div>
          <h1>33</h1>
        </div>
        <div className="admin-card">
          <div className="card-inner">
            <h3>ALERTS</h3>
          </div>
          <h1>42</h1>
        </div>
      </div>
    </main>
  );
}

export default Home;
