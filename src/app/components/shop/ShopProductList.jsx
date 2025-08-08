"use client";
import React, { useState, useEffect } from "react";
import ProductItems from "../home/PopularProducts/ProductItems";
import { FaArrowRight } from "react-icons/fa"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ShopProductList = () => {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setShowAll(window.innerWidth >= 640); // sm breakpoint
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section>
      <div className="container">
        <p className="text-xl font-textFont text-primary mb-10">
          we found <span className="text-brand">69</span> items for you
        </p>

        <div className="grid justify-items-center sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">
          {/* Always show first 10 */}
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />

          {/* Only render these if showAll is true */}
          {showAll && (
            <>
              <ProductItems />
              <ProductItems />
              <ProductItems />
              <ProductItems />
              <ProductItems />
              <ProductItems />
              <ProductItems />
            </>
          )}
        </div>

        <div className="pt-10  text-zinc-500 text-3xl text-center md:text-left">
          <ul className="scale-85 sm:scale-100 flex gap-2 justify-center lg:justify-start">
            <li className="p-1 flex items-center justify-center w-10 h-10 text-primary bg-zinc-300 duration-150 rounded-full hover:bg-brand cursor-pointer hover:text-white">
              <p className="text-2xl  ">1</p>
            </li>
            <li className="p-1 flex items-center justify-center w-10 h-10 text-primary bg-zinc-300 duration-150 rounded-full hover:bg-brand cursor-pointer hover:text-white">
              <p className="text-2xl  ">2</p>
            </li>
            <li className="p-1 flex items-center justify-center w-10 h-10 text-primary bg-zinc-300 duration-150 rounded-full hover:bg-brand cursor-pointer hover:text-white">
              <p className="text-2xl  ">3</p>
            </li>
            <li>.....</li>
            <li className="p-1 flex items-center justify-center w-10 h-10 text-primary bg-zinc-300 duration-150 rounded-full hover:bg-brand cursor-pointer hover:text-white">
              <p className="text-2xl  ">6</p>
            </li>
            <li className="p-1 flex items-center justify-center w-10 h-10 text-primary bg-zinc-300 duration-150 rounded-full hover:bg-brand cursor-pointer hover:text-white">
              <p className="text-2xl  ">
                <MdOutlineKeyboardArrowRight />
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ShopProductList;
