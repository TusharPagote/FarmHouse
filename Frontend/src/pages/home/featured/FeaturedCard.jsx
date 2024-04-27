import React from "react";
// import { featured } from "../../data/Data";

const renderBoxes = () => {
  const boxes = [];
  for (let i = 0; i < 5; i++) {
    boxes.push(
      <div key={i} className="box">
        <img src="../images/hero/h1.png" alt="" />
        <h4>Nagpur</h4>
        <label>122 Property</label>
      </div>
    );
  }
  return boxes;
};
const FeaturedCard = () => {
  return (
    <>
      <div className="content grid5 mtop">
        {/* {featured.map((items, index) => (
          <div className="box" key={index}>
            <img src={items.cover} alt="" />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))} */}
        {renderBoxes()}
      </div>
    </>
  );
};

export default FeaturedCard;
