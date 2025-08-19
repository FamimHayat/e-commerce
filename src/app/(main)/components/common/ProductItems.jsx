import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { PiShoppingCartDuotone } from "react-icons/pi";

const ProductItems = ({ productData }) => {
  console.log("====================================");
  console.log(productData);
  console.log("====================================");
  return (
    <div className="mt-3 border-2 border-[#00000021] rounded-2xl w-fit  p-2 shadow-md duration-150 product-shadow-hover hover:border-brand">
      <Link href="/">
        <div>
          <Image
            src={productData?.thumbnail || "/placeholder.png"}
            alt={productData?.title || "unknown product"}
            width={260}
            height={300}
          />
        </div>

        <div className="flex flex-col gap-1 p-2 sm:p-3 mb-2">
          <small className="opacity-50">snack</small>
          <h2 className="w-[250px] lg:w-[200px] 2xl:w-[250px] text-md text-primary font-semibold font-textFont ">
            {productData?.title || "unknown product"}
          </h2>
          <div className="flex items-center gap-1 text-text font-textFont ">
            rating:
            <span className="opacity-50"> ({productData?.rating})</span>
          </div>
          <p className="text-sm text-primary font-textFont">
            By <span className="text-brand">NestFood</span>
          </p>
          <div className="flex flex-row lg:flex-col 2xl:flex-row 2xl:items-center justify-between">
            <p className=" text-xl pt-3  text-brand  font-textFont">
              <p className="text-sm  text-brand">
                <span className="inline-block text-primary opacity-70 mb-2">
                  discount
                </span>{" "}
                {productData?.discountPercentage}%
              </p>
              ({productData?.price})
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
