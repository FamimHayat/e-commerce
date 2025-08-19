"use client";

import React, { useEffect, useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import CatagorySliderItems from "./CatagorySliderItems";

const CatagorySlider = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("https://dummyjson.com/products/category-list");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    }

    fetchCategories();
  }, []);

  if (!categories.length) return <p>Loading...</p>;

  return (
    <div className="relative container mx-auto w-full py-8 md:mt-10 lg:mt-5">
      <Splide
        hasTrack={false}
        options={{
          type: "loop",
          perPage: 10,
          gap: "1rem",
          autoplay: true,
          pauseOnHover: true,
          arrows: true,
          pagination: false,
          breakpoints: {
            1280: { perPage: 8 },
            1024: { perPage: 5 },
            640: { perPage: 3 },
            500: { perPage: 2 },
          },
        }}
      >
        <div className="splide__arrows absolute z-10 hidden w-full px-2 -top-12 sm:flex">
          <button className="splide__arrow splide__arrow--prev rounded-full bg-white p-2 shadow duration-200 hover:bg-brand hover:text-white">
            ←
          </button>
          <button className="splide__arrow splide__arrow--next rounded-full bg-white p-2 shadow duration-200 hover:bg-brand hover:text-white">
            →
          </button>
        </div>

        <SplideTrack>
          {categories.map((category) => (
            <SplideSlide key={category}>
              <CatagorySliderItems category={category} />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  );
};

export default CatagorySlider;
