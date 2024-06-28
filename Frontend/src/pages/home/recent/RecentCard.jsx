import React, { useState } from "react";
// import { list } from "../../data/Data";
import { Link } from "react-router-dom";
// import { list } from "../../../assets/data/Data";
import { useFetchData } from "../../../assets/data/http";

const RecentCard = () => {
  const [farmhouseList, setFarmhouseList] = useState();
  useFetchData("/list", setFarmhouseList);
  if (!farmhouseList) {
    return <div>Loading...</div>; // or any loading indicator you prefer
  }
  return (
    <>
      {/* <Link to={"property"}> */}
      <div className="content grid3 mtop">
        {farmhouseList.map((val, index) => {
          const { cover, category, location, name, price, type } = val;
          return (
            <div
              className="box shadow"
              style={{ borderRadius: "25px" }}
              key={index}
            >
              <Link to={"property"}>
                {" "}
                <div
                  className="img"
                  style={{ padding: "1rem", position: "relative" }}
                >
                  <img src={cover} alt="" />
                </div>
                <div className="text">
                  <div className="category flex">
                    <span
                      style={{
                        background:
                          category === "For Sale" ? "#25b5791a" : "#ff98001a",
                        color: category === "For Sale" ? "#25b579" : "#ff9800",
                      }}
                    >
                      {category}
                    </span>
                    <i className="fa fa-heart"></i>
                  </div>
                  <h4>{name}</h4>
                  <p>
                    <i className="fa fa-location-dot"></i> {location}
                  </p>
                  <div style={{ color: "#FF0000", marginTop: "10px" }}>
                    {price}
                  </div>
                </div>
                <div className="button flex">
                  <div>
                    <span style={{ color: "#FF0000" }}>+ </span>
                    <span> compare</span>
                  </div>
                  <div className="circle"></div>
                  <span>{type}</span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      {/* </Link> */}
    </>
  );
};

export default RecentCard;
