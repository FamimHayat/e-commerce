"use client";

import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";

const CatagorySlider = () => {
  return (
    <div className="relative container w-full mx-auto px-4 py-8 md:mt-10 lg:mt-5">
      <Splide
        hasTrack={false}
        options={{
          type: "loop",
          perPage: 11,
          gap: "1rem",
          autoplay: true,
          pauseOnHover: true,
          arrows: true,
          pagination: false,
          breakpoints: {
            1280: {
              perPage: 8,
            },
            1024: {
              perPage: 5,
            },
            640: {
              perPage: 3,
            },
            500: {
              perPage: 2,
            },
          },
        }}
      >
      
        <div className="splide__arrows hidden sm:flex  absolute w-full -top-12  px-2 z-10">
          <button className="splide__arrow splide__arrow--prev    lg:left-[90%]! xl:left-[92%]! 2xl:left-[94%]! bg-white p-2 rounded-full shadow duration-200 hover:text-white hover:bg-brand!">
            ←
          </button>
          <button className="splide__arrow splide__arrow--next bg-white p-2 rounded-full shadow duration-200 hover:text-white hover:bg-brand!">
            →
          </button>
        </div>


        <SplideTrack>
          <SplideSlide className="bg-amber-200">
            <Image
              src="/category-1.png"
              alt="Image 1"
              width={500}
              height={300}
              className="rounded-xl object-cover w-full h-auto"
            />
          </SplideSlide>
          <SplideSlide className="bg-red-200">
            <Image
              src="/category-1.png"
              alt="Image 2"
              width={500}
              height={300}
              className="rounded-xl object-cover w-full h-auto"
            />
          </SplideSlide>
          <SplideSlide className="bg-blue-200">
            <Image
              src="/category-1.png"
              alt="Image 3"
              width={500}
              height={300}
              className="rounded-xl object-cover w-full h-auto"
            />
          </SplideSlide>
          <SplideSlide className="bg-violet-200">
            <Image
              src="/category-1.png"
              alt="Image 4"
              width={500}
              height={300}
              className="rounded-xl object-cover w-full h-auto"
            />
          </SplideSlide>
          <SplideSlide className="bg-green-200">
            <Image
              src="/category-1.png"
              alt="Image 5"
              width={500}
              height={300}
              className="rounded-xl object-cover w-full h-auto"
            />
          </SplideSlide>
          <SplideSlide className="bg-amber-900">
            <Image
              src="/category-1.png"
              alt="Image 6"
              width={500}
              height={300}
              className="rounded-xl object-cover w-full h-auto"
            />
          </SplideSlide>
          <SplideSlide className="bg-violet-200">
            <Image
              src="/category-1.png"
              alt="Image 7"
              width={500}
              height={300}
              className="rounded-xl object-cover w-full h-auto"
            />
          </SplideSlide>
          <SplideSlide className="bg-gray-200">
            <Image
              src="/category-1.png"
              alt="Image 8"
              width={500}
              height={300}
              className="rounded-xl object-cover w-full h-auto"
            />
          </SplideSlide>
          <SplideSlide className="bg-red-200">
            <Image
              src="/category-1.png"
              alt="Image 9"
              width={500}
              height={300}
              className="rounded-xl object-cover w-full h-auto"
            />
          </SplideSlide>
          <SplideSlide className="bg-yellow-200">
            <Image
              src="/category-1.png"
              alt="Image 10"
              width={500}
              height={300}
              className="rounded-xl object-cover w-full h-auto"
            />
          </SplideSlide>
          <SplideSlide className="bg-blue-200">
            <Image
              src="/category-1.png"
              alt="Image 11"
              width={500}
              height={300}
              className="rounded-xl object-cover w-full h-auto"
            />
          </SplideSlide>
        </SplideTrack>
      </Splide>
    </div>
  );
};

export default CatagorySlider;
