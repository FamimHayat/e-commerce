"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css"; // Import default Splide styles
import BannerSliderTag from "./BannerSliderTag";

const BannerSlider = () => {
  return (
    <div className="mx-auto overflow-hidden py-8 sm:w-[calc(100dvw-50px)] md:w-[calc(100dvw-150px)] lg:w-[calc(100dvw-250px)] xl:w-[calc(100dvw-350px)]">
      <Splide
        aria-label="My Favorite Images"
        options={{
          type: "loop",
          perPage: 1,
          interval: 3000,
          pauseOnHover: true,
          arrows: true,
          pagination: true,
          keyboard: true,
        }}
        className="responsive-arrows rounded-xl shadow-lg"
      >
        <SplideSlide>
          <div className="relative h-[calc(100dvh-350px)] w-full">
            <Image
              src="/banner-slider-1.png"
              alt="Image 1"
              fill
              className="rounded-xl object-cover"
            />
            <BannerSliderTag />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="relative h-[calc(100dvh-350px)] w-full">
            <Image
              src="/banner-slider-2.png"
              alt="Image 2"
              fill
              className="rounded-xl object-cover"
            />
            <BannerSliderTag />
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default BannerSlider;
