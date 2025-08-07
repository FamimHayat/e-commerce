"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ProductItems from "../PopularProducts/ProductItems";

const BestSaleSlider = () => {
  return (
    <div className="w-[300px] px-1.5 sm:w-200 mx-auto sm:px-20 lg:px-0 lg:w-200 xl:w-240 2xl:w-320   overflow-hidden">
      <Splide
        aria-label="Best Sale Slider"
        options={{
          type: "loop",
          perPage: 4,
          perMove: 1,
          gap: "5px",
          autoplay: true,
          pauseOnHover: true,
          rewind: true,
          pagination: false,
          arrows: true,
          breakpoints: {
            1280: { perPage: 3 },
            1024: { perPage: 2 },
            640: { perPage: 1 },
          },
        }}
      >
        <SplideSlide>
          <div className="bg-white rounded-xl mx-auto">
            <ProductItems />
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="bg-white rounded-xl mx-auto">
            <ProductItems />
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="bg-white rounded-xl mx-auto">
            <ProductItems />
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="bg-white rounded-xl mx-auto">
            <ProductItems />
          </div>
        </SplideSlide>

        {/* Add more <SplideSlide> blocks as needed */}
      </Splide>
    </div>
  );
};

export default BestSaleSlider;
