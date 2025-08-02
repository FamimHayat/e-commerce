"use client";

import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";
import Link from "next/link"

const CatagorySlider = () => {
  return (
    <div className="relative container w-full mx-auto py-8 md:mt-10 lg:mt-5">
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
          <SplideSlide className="bg-amber-200 rounded-2xl cursor-pointer duration-200 border-2 border-transparent  hover:border-primary">
            <Link href="/">
              <Image
                src="/category-1.png"
                alt="Image 1"
                width={500}
                height={300}
                className="rounded-xl object-cover w-full h-auto"
              />
              <h2 className="text-primary text-xl text-center font-textFont font-semibold pb-2">
                oranges
              </h2>
              <p className="text-primary text-sm text-center font-textFont font-semibold pb-4">
                22items
              </p>
            </Link>
          </SplideSlide>
        
        </SplideTrack>
      </Splide>
    </div>
  );
};

export default CatagorySlider;
