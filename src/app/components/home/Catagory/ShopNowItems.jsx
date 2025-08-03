import Link from "next/link";
import React from "react";
import { LuMoveRight } from "react-icons/lu";

const ShopNowItems = ({ style }) => {
  return (
    <div
      className="bg-cover bg-center h-74 w-full rounded-2xl overflow-hidden p-2 sm:p-0 "
      style={style}
    >
      <div className="flex h-full flex-col justify-center px-3 group md:pl-6 lg:pl-8 xl:pl-10">
        <h2 className="text-primary font-semibold font-textFont duration-150 text-[24px] sm:text-[22px] md:text-[25px] sm:max-w-3xs ">
          Everyday Fresh & Clean with Our Products
        </h2>
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg bg-brand p-3 text-lg text-white duration-250 mt-10 font-textFont md:w-fit md:p-2 md:text-md 
          button-shadow-hover hover:scale-105"
        >
          shop now <LuMoveRight className="mt-1"/>
        </Link>
      </div>
    </div>
  );
};

export default ShopNowItems;
