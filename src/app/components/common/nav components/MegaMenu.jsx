"use client";

import React, { useState } from "react";
import Link from "next/link";

const MegaMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative  pb-2 "
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Top level menu link */}
      <button className=" hidden md:block px-4 mb-3 font-semibold text-sm lg:text-md xl:text-lg text-center mx-auto cursor-pointer duration-150 hover:text-brand">
        All Categories
      </button>

      {/* Mega Menu Dropdown - Desktop */}
      {open && (
        <div className=" absolute md:-translate-x-[60%] lg:-translate-x-[45%] xl:-translate-x-[50%] sm:w-[580px] md:w-[680px] lg:w-[980px] xl:w-[1080px] 2xl:w-[1280px] bg-white duration-150 rounded-2xl border-2 overflow-hidden border-zinc-300 shadow-2xl border-t border-t-zinc-300  z-50 hidden md:block pt-5">
          <div className="max-w-[1280px] mx-auto px-6 py-6 grid grid-cols-4 gap-6">
            {/* Column 1 */}
            <div>
              <h3 className="text-lg font-bold mb-4">Fruits & Vegetables</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="duration-150  hover:text-brand ">
                    Fresh Vegetables
                  </Link>
                </li>
                <li>
                  <Link href="#" className="duration-150  hover:text-brand ">
                    Herbs & Seasonings
                  </Link>
                </li>
                <li>
                  <Link href="#" className="duration-150  hover:text-brand ">
                    Fresh Fruits
                  </Link>
                </li>
                <li>
                  <Link href="#" className="duration-150  hover:text-brand ">
                    Cuts & Sprouts
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-lg font-bold mb-4">Breakfast & Dairy</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="duration-150  hover:text-brand ">
                    Milk & Flavoured Milk
                  </Link>
                </li>
                <li>
                  <Link href="#" className="duration-150  hover:text-brand ">
                    Butter & Margarine
                  </Link>
                </li>
                <li>
                  <Link href="#" className="duration-150  hover:text-brand ">
                    Cheese
                  </Link>
                </li>
                <li>
                  <Link href="#" className="duration-150  hover:text-brand ">
                    Yogurt
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-lg font-bold mb-4">Meat & Seafood</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="duration-150  hover:text-brand ">
                    Fresh Meat
                  </Link>
                </li>
                <li>
                  <Link href="#" className="duration-150  hover:text-brand ">
                    Chicken
                  </Link>
                </li>
                <li>
                  <Link href="#" className="duration-150  hover:text-brand ">
                    Fish & Seafood
                  </Link>
                </li>
                <li>
                  <Link href="#" className="duration-150  hover:text-brand ">
                    Frozen Meat
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 - Promo Banner */}
            <div className="relative bg-primary text-white rounded-lg p-6 flex flex-col items-center justify-center">
              <h4 className="text-lg font-bold">Hot Deals</h4>
              <p className="text-sm mt-2">Save up to 50% today!</p>
              <button className="mt-4 bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:bg-gray-100">
                Shop Now
              </button>
            </div>
          </div>

          {/* Subscribe box */}
          <div className="bg-gray-50 py-4 border-t">
            <div className="max-w-[1280px] mx-auto px-6 flex justify-between items-center">
              <span className="font-semibold text-sm">
                Subscribe for updates
              </span>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="border border-gray-300 px-3 py-2 rounded-l-lg text-sm w-60"
                />
                <button className="bg-brand text-white px-4 py-2 rounded-r-lg  text-sm cursor-pointer duration-150 button-shadow-hover">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile dropdown */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left px-4 flex justify-center py-2 border-b border-zinc-300 font-semibold "
        >
          All Categories
        </button>
        {open && (
          <div className="bg-white border-b px-4 py-2 space-y-4">
            <div>
              <h4 className="font-bold mb-2">Fruits & Vegetables</h4>
              <ul className="pl-4 text-sm space-y-1 text-primary/80 font-textFont">
                <li>
                  <Link
                    href="/fresh-vegetables"
                    className="hover:text-brand duration-150"
                  >
                    Fresh Vegetables
                  </Link>
                </li>
                <li>
                  <Link
                    href="/herbs-seasonings"
                    className="hover:text-brand duration-150"
                  >
                    Herbs &amp; Seasonings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fresh-fruits"
                    className="hover:text-brand duration-150"
                  >
                    Fresh Fruits
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Breakfast & Dairy</h4>
              <ul className="pl-4 text-sm space-y-1 text-primary/80 font-textFont">
                <li>
                  <Link
                    href="/milk-flavoured"
                    className="hover:text-brand duration-150"
                  >
                    Milk &amp; Flavoured Milk
                  </Link>
                </li>
                <li>
                  <Link
                    href="/butter-margarine"
                    className="hover:text-brand duration-150"
                  >
                    Butter &amp; Margarine
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MegaMenu;
