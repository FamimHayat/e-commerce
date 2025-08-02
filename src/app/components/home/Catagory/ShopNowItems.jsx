
import Link from "next/link"
import React from "react";
import { LuMoveRight } from "react-icons/lu";

const ShopNowItems = ({style}) => {
  return (
    <div
      className="p-2 sm:p-0 bg-cover bg-center h-74 w-full rounded-2xl overflow-hidden "
      style={style}
    >
      <div className="px-3 md:pl-6 lg:pl-8 xl:pl-10 flex justify-center h-full flex-col group">
        <h2 className="text-primary  text-[28px] sm:text-[22px] md:text-[25px] font-semibold font-textFont sm:max-w-3xs duration-150  group-hover:">
          Everyday Fresh & Clean with Our Products
        </h2>
        <Link
          href="/"
          className="flex items-center gap-2 text-xl md:text-md bg-brand  md:w-fit p-3 md:p-2 text-white rounded-lg font-textFont mt-10 duration-150 hover:shadow-2xl  "
        >
          shop now <LuMoveRight />
        </Link>
      </div>
    </div>
  );
};

export default ShopNowItems;
