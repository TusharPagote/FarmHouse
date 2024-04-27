// import React from "react";
// import Heading from "../../common/Heading";
import "../../../assets/css/hero.css";
// import Heading from "../../../components/common/Heading";
import Button from "../../../components/Button";
import Heading from "../../../components/Heading";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading
            isCenter
            title="Find Your Perfect Farmhouse: Where Comfort Meets Convenience!"
            subtitle="Find new & featured property located in your local city."
          />

          <form className="form">
            <div className="box">
              <span>City/Street</span>
              <input type="text" placeholder="Location" />
            </div>
            <div className="box">
              <span>Date & Time</span>
              <input type="text" placeholder="Today's date" />
            </div>
            <div className="box">
              <span>No of Guest's</span>
              <input type="text" placeholder="00" />
            </div>
            {/* <div className="buttonSection">
              <div className="box">
                <h4>Advance Filter</h4>
              </div>
              <button className="btn1">
                <h3>Search </h3>
                <i className="fa fa-search"></i>
              </button>
            </div> */}
            <div className="buttonSection ">
              <Button
                className="btn1"
                style={{ backgroundColor: " #EFB0B0", color: "#1C1C1E" }}
              >
                Filter <i className="fa-solid fa-sliders"></i>
              </Button>
              <Button className="btn1">
                Search Now <i className="fa fa-search"></i>
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
