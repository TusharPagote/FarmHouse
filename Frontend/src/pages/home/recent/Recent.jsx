// import React from "react";
// import Heading from "../../common/Heading";
import "../../../assets/css/recent.css";
import RecentCard from "./RecentCard";
import Heading from "../../../components/Heading";
// import Heading from "../../../components/common/Heading";

const Recent = () => {
  return (
    <>
      <section className="recent padding">
        <div className="container">
          <Heading
            title="Recent Property Listed"
            subtitle="
Discover the Latest Listings: Your Gateway to Fresh Properties!"
          />
          <RecentCard />
        </div>
      </section>
    </>
  );
};

export default Recent;
