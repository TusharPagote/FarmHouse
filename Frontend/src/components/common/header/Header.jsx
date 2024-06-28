import React, { useState } from "react";
import "../../../assets/css/header.css";
import { nav } from "../../../assets/data/Data";
import { Link } from "react-router-dom";
import Button from "../../Button";

const Header = () => {
  const [navList, setNavList] = useState(false);

  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img
              src="./images/logo-farmrent-black.png"
              alt=""
              style={{ width: "70px" }}
            />
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
              {navList && (
                <li>
                  <Link to="signin">
                    <i className="fa-solid fa-user-pen"></i> Register / Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div className="button flex">
            <h4 style={{ margin: "0", paddingRight: "20px" }}>
              <Link to="signin">
                <i className="fa-solid fa-user-pen"></i> Register / Login
              </Link>
            </h4>

            <Button>
              <i className="fa-solid fa-house-circle-check icon-style"></i>
              Enquiry Now
            </Button>
          </div>

          <div className="toggle">
            <Button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
