"use client";

import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";
import Link from "next/link"

const CatagorySlider = () => {
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
          <button className="splide__arrow splide__arrow--prev rounded-full bg-white p-2 shadow duration-200 hover:bg-brand hover:text-white lg:!left-[90%] xl:!left-[92%] 2xl:!left-[94%]">
            ←
          </button>
          <button className="splide__arrow splide__arrow--next rounded-full bg-white p-2 shadow duration-200 hover:bg-brand hover:text-white">
            →
          </button>
        </div>

        <SplideTrack>
          <SplideSlide className="cursor-pointer rounded-2xl border-2 border-transparent bg-amber-200 duration-200 hover:border-primary ">
            <Link href="/">
              <Image
                src="/category-1.png"
                alt="Image 1"
                width={500}
                height={300}
                className="h-auto w-full rounded-xl object-cover"
              />
              <h2 className="pb-2 text-center text-xl font-semibold text-primary font-textFont">
                oranges
              </h2>
              <p className="pb-4 text-center text-sm font-semibold text-primary font-textFont">
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
