import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { list } from "../../assets/data/Data";

const DemoCarousel = () => {
  return (
    <Carousel>
      {list.map((item) => {
        const { cover } = item;
        return (
          <div key={item.id}>
            <img src={cover} alt="Banner" />
            {/* <p className="legend">Legend 2</p> */}
          </div>
        );
      })}
    </Carousel>
  );
};

export default DemoCarousel;
