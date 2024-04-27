import React from "react";

const buttonStyle = {
  borderRadius: "15px",
  padding: "17px 30px",
  background: "#cc0001",
  border: "none",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "bold",
};

// const iconStyle = {
//   marginRight: "5px",
// };

export default function Button({ children, ...props }) {
  return (
    <button {...props} style={buttonStyle}>
      {children}
    </button>
  );
}
