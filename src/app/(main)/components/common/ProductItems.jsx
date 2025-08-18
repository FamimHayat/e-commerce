import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { PiShoppingCartDuotone } from "react-icons/pi";

const ProductItems = () => {
  return (
    <div className="mt-3 border-2 border-[#00000021] rounded-2xl w-fit  p-2 shadow-md duration-150 product-shadow-hover hover:border-brand">
      <Link href="/">
        <div className="relative w-50 h-60 mx-auto group overflow-hidden">
          <Image
            src="/product-1-front.jpg"
            alt="Product"
            width={150}
            height={100}
            className="absolute inset-0 w-50 h-60 object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"
          />
          <Image
            src="/product-1-back.jpg"
            alt="Product"
            width={150}
            height={100}
            className="absolute inset-0 w-50 h-60 object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          />
        </div>

        <div className="flex flex-col gap-1 p-2 sm:p-3 mb-2">
          <small className="opacity-50">snack</small>
          <h2 className="w-[250px] lg:w-[200px] 2xl:w-[250px] text-md text-primary font-semibold font-textFont ">
            Seeds of Change Organic Quinoa, Brown, & Red Rice
          </h2>
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStarHalf className="text-yellow-500" />{" "}
            <span className="opacity-50">( 4.5 )</span>
          </div>
          <p className="text-sm text-primary font-textFont">
            By <span className="text-brand">NestFood</span>
          </p>
          <div className="flex flex-row lg:flex-col 2xl:flex-row 2xl:items-center justify-between">
            <p className="flex  items-center text-xl pt-3  text-brand  font-textFont">
              $32.85{" "}
              <del className="text-sm pl-2 opacity-50 text-primary">$32.85</del>
            </p>
            <button className="mt-2 flex items-center justify-center gap-1 text-white rounded-md text-lg px-2 py-1 cursor-pointer border-brand font-headerFont duration-200 bg-brand button-shadow-hover hover:bg-amber-400">
              <PiShoppingCartDuotone /> add
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItems;
