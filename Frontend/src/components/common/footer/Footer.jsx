import React, { useState } from "react";
// import { footer } from "../../data/Data";
import "../../../assets/css/footer.css";
import { useFetchData } from "../../../assets/data/http";
import Button from "../../Button";

const Footer = () => {
  const [footerList, setFooterList] = useState();
  useFetchData("/footer", setFooterList);
  // console.log("From fetch:", footerList);
  // console.log("From nromal:" + footer);
  if (!footerList) {
    return <div>Loading...</div>; // or any loading indicator you prefer
  }
  return (
    <>
      {/* <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className="btn5">Contact Us Today</button>
          </div>
        </div>
      </section> */}

      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img
                src="../images/logo-farmrent.png"
                alt=""
                style={{ width: "90px" }}
              />
              <h2>Do You Need Help With Anything?</h2>
              <p>
                Receive updates, hot deals, tutorials, discounts sent straight
                to your inbox every month
              </p>
              <div className="input flex">
                <input type="text" placeholder="Email Address" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>

          {footerList.map(
            (
              val,
              index // Added 'index' parameter
            ) => (
              <div className="box" key={index}>
                <h3>{val.title}</h3>
                <ul>
                  {val.text.map(
                    (
                      items,
                      i // Added 'i' parameter
                    ) => (
                      <li key={i}> {items.list} </li>
                    )
                  )}
                </ul>
              </div>
            )
          )}
        </div>
      </footer>

      <div className="legal">
        <span>© 2021 RentUP. Designd By GorkCoder.</span>
      </div>
    </>
  );
};

export default Footer;
