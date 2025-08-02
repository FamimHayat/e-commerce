import Link from "next/link";
import React from "react";
import { FaCartPlus, FaStar, FaStarHalf } from "react-icons/fa";
import { PiShoppingCartDuotone } from "react-icons/pi";

const DealOfTheDayItems = ({ style }) => {
  return (
    <div className="relative py-12">
      <div
        className="  w-full h-80 rounded-xl overflow-hidden group cursor-pointer"
        style={style}
      >
        <div className="bg-[#00000036] h-full">
          <div className="grid grid-cols-4 gap-1! px-4 justify-items-center place-items-end duration-250 h-40 ">
            <div className="m-2 text-2xl font-headerFont text-primary text-center bg-white rounded-md w-fit py-2 px-4">
              <p>00</p>
              <span className="text-lg font-headerFont text-primary">days</span>
            </div>
            <div className="m-2 text-2xl font-headerFont text-primary text-center bg-white rounded-md w-fit py-2 px-4">
              <p>00</p>
              <span className="text-lg font-headerFont text-primary">
                hours
              </span>
            </div>
            <div className="m-2 text-2xl font-headerFont text-primary text-center bg-white rounded-md w-fit py-2 px-4">
              <p>00</p>
              <span className="text-lg font-headerFont text-primary">mins</span>
            </div>
            <div className="m-2 text-2xl font-headerFont text-primary text-center bg-white rounded-md w-fit py-2 px-4">
              <p>00</p>
              <span className="text-lg font-headerFont text-primary">secs</span>
            </div>
          </div>

          <div className="absolute  shadow-2xl bg-white rounded-2xl mt-5 p-5 w-full h-65">
            <Link href="/" className="text-xl font-textFont text-primary">
              Seeds of Change Organic Quinoa, Brown, & Red Rice
            </Link>
            <div className="flex items-center gap-2 mt-3">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStarHalf className="text-yellow-500" /> ( 4.5 )
            </div>
            <div>
              <p className="text-md pt-2 text-primary font-textFont">
                By <span className="text-brand ">NestFood</span>
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="flex lg:flex-col xl:flex-row  items-center text-xl pt-5 text-brand  font-textFont">
                $32.85{" "}
                <del className="text-sm pl-2 opacity-50 text-primary">
                  $32.85
                </del>
              </p>
              <button className="flex items-center gap-1 text-white rounded-md text-lg px-2 py-1 border-brand font-headerFont duration-200 bg-brand button-shadow-hover">
                <PiShoppingCartDuotone /> add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealOfTheDayItems;
