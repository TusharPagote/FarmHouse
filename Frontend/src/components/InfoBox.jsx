import React from "react";

const InfoBox = ({ title1, content1, title2, content2 }) => {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    // marginLeft: "20px",
  };

  const columnStyle = {
    textAlign: "start",
    width: "50%",
  };

  const titleStyle = {
    fontSize: "medium",
  };

  const contentStyle = {
    fontSize: "large",
    fontWeight: "600",
  };

  return (
    <div style={containerStyle}>
      <div style={columnStyle}>
        <p style={titleStyle}>{title1}</p>
        <p style={contentStyle}>{content1}</p>
      </div>
      <div style={columnStyle}>
        <p style={titleStyle}>{title2}</p>
        <p style={contentStyle}>{content2}</p>
      </div>
    </div>
  );
};

export default InfoBox;
