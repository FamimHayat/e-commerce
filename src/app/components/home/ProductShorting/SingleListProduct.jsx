import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

const SingleListProduct = () => {
  return (
    <Link
      href="/"
      className=" pt-5 pb-5 duration-200 hover:pt-3 hover:pb-7 group"
    >
      <div className="flex  justify-center sm:justify-start gap-3 ">
        <Image
          width={100}
          height={100}
          className="w-18 h-18 lg:w-20 lg:h-20 2xl:w-30 2xl:h-30 shadow-xl rounded-2xl"
          src="/top-rated-1.jpg"
          alt="product-image"
        />
        <div className="border-b border-[#0000002a] group-hover:border-brand scale-80 2xl:scale-100">
          <h3 className="font-semibold font-textFont text-primary">
            Nestle Original Coffee-Mate Coffee Creamer
          </h3>
          <div className="flex items-center gap-1 mt-3">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStarHalf className="text-yellow-500" />{" "}
            <p className="opacity-60 hidden xl:flex">(4.5) </p>
          </div>
          <p className="flex   items-center text-xl pt-2 text-brand  font-textFont">
            $32.85{" "}
            <del className="text-sm pl-2 opacity-50 text-primary">$32.85</del>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SingleListProduct;
