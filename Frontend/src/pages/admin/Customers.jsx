import React, { useRef, useState } from "react";
import { useFetchData } from "../../assets/data/http";
import ShowDetailModal from "../../components/modal/ShowDetailModal";

export default function Customers() {
  const [userData, setUserData] = useState([]);
  useFetchData("/userlist", setUserData, (error) => {
    console.error("Error fetching data:", error);
  });

  const dialog = useRef();

  const handleClick = (property) => {
    dialog.current.open({ property });
  };

  if (!userData) {
    return <div>NULL</div>;
  }

  return (
    <>
      <ShowDetailModal ref={dialog} />
      <div
        style={{
          width: "75rem",
          display: "flex",
          flexDirection: "column",
          height: "80vh",
          margin: "30px 30px",
          borderRadius: "15px",
        }}
      >
        <div className="main-title">
          <h2>Recent Enquiries</h2>
        </div>
        <div style={{ overflowX: "auto", marginTop: "20px" }}>
          <table id="property-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody style={{ height: "200px", overflowY: "auto" }}>
              {userData.map((property) => (
                <tr key={property.id}>
                  <td>{property.id}</td>
                  <td>{property.fullName}</td>
                  <td>{property.email}</td>
                  <td>*********</td>
                  <td>
                    <button
                      className="view-button"
                      onClick={() => handleClick(property)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
