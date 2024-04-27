// import React from "react";
// import Heading from "../../common/Heading";
import "../../../assets/css/Featured.css";
import FeaturedCard from "./FeaturedCard";
import Heading from "../../../components/Heading";
// import Heading from "../../../components/common/Heading";

const Featured = () => {
  return (
    <>
      <section className="featured background">
        <div className="container">
          <Heading
            title="Explore Farmhouses"
            subtitle="Find All Type of Property."
          />
          <FeaturedCard />
        </div>
      </section>
    </>
  );
};

export default Featured;
