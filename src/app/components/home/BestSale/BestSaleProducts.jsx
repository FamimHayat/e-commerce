import React from "react";
import Header from "../../common/Header";
import BestSaleSlider from "./BestSaleSlider";
import Link from "next/link";
import { LuMoveRight } from "react-icons/lu";

const BestSaleProducts = () => {
  return (
    <section className="px-2 my-20 overflow-hidden">
      <div className="container">
        <div>
          <Header headerText={"Daily Best Sells"} />
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-5">
          <div
            className="w-full lg:w-90 h-120 rounded-2xl mt-8  bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('/best-sale-background.png" }}
          >
            <div className="p-4 h-full flex flex-col justify-center">
              <h2 className="text-3xl sm:text-5xl lg:text-3xl xl:text-4xl text-primary w-[210px]v xl  font-headerFont font-semibold mb-10">
                {" "}
                Bring nature into your home
              </h2>
              <Link
                href="/"
                className="flex items-center gap-2 rounded-lg bg-brand p-3 text-lg text-white duration-250 mt-10 font-textFont md:w-fit md:p-2 md:text-md 
          button-shadow-hover hover:scale-105 hover:bg-amber-400"
              >
                shop now <LuMoveRight className="mt-1" />
              </Link>
            </div>
          </div>
          <div>
            <BestSaleSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSaleProducts;
