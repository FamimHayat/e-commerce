"use client";
import React, { useState } from "react";
import { FaBox, FaSearch } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa";
import { IoCloseCircleSharp, IoReorderThreeOutline } from "react-icons/io5";
import { FaFireAlt } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";

import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  return (
    <header className="px-2 shadow-sm relative">
      {/* Header Top Part */}
      <div className="container">
        <div className="py-8 gap-8 flex justify-between items-center">
          <button
            onClick={() => setSidebar(true)}
            className="cursor-pointer text-primary text-3xl md:hidden"
          >
            <IoReorderThreeOutline />
          </button>
          <Link href="/" className="inline-block w-32 lg:w-auto">
            <Image
              src="/brand-logo.png"
              width={128}
              height={50}
              alt="logo"
              className="w-32"
            />
          </Link>
          <div className="border-2 border-brand opacity-50 p-2 rounded w-full max-w-64 hidden items-center md:flex lg:max-w-[700px] lg:p-3">
            <select
              name=""
              id=""
              className="border-r-2  pr-3.5 text-primary cursor-pointer border-brand hidden lg:block"
            >
              <option value="" className="text-sm font-textFont text-primary">All Categories</option>
              <option value="" className="text-sm font-textFont text-primary">All Categories</option>
              <option value="" className="text-sm font-textFont text-primary">All Categories</option>
            </select>
            <input
              type="text"
              placeholder="Search for items..."
              className="w-full px-3.5 outline-0 lg:w-2/3"
            />
            <FaSearch className="ml-auto cursor-pointer" />
          </div>
          <div>
            <ul className="text-sm flex items-center gap-4 lg:gap-8">
              <li>
                <Link
                  href="/login"
                  className="flex items-center gap-1 text-white rounded-md text-2xl px-2 py-1 border-brand font-headerFont duration-200 bg-brand button-shadow-hover"
                >
                  <PiShoppingCart />{" "}
                  <span className="hidden md:flex">cart</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="flex items-center gap-1 text-white rounded-md text-2xl px-2 py-1 border-brand font-headerFont duration-200 bg-brand button-shadow-hover"
                >
                  login
                </Link>
              </li>
            </ul>
          </div>
          {/* Main menu mobile view */}
          <nav
            className={`absolute top-0 left-0 z-50 w-full h-screen bg-[rgba(0,0,0,0.6)] transition-all ${
              sidebar ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="pt-2 w-[95%] h-full bg-white overflow-y-auto">
              <div className="flex justify-between items-center pb-4 mb-4 border-b border-[#ececec] px-4">
                <Link href="/" className="inline-block w-32">
                  <Image
                    width={128}
                    height={50}
                    src="/brand-logo.png"
                    alt="logo"
                  />
                </Link>
                <button
                  onClick={() => setSidebar(false)}
                  className="cursor-pointer text-2xl text-brand"
                >
                  <IoCloseCircleSharp />
                </button>
              </div>
              <div className="flex flex-col gap-4 px-4">
                <div className="flex items-center border-2 border-brand p-2 rounded w-full lg:p-5">
                  <input
                    type="text"
                    placeholder="Search for items..."
                    className="w-full px-3.5 outline-0 lg:w-2/3"
                  />
                  <FaSearch className="ml-auto" />
                </div>
                <ul className="w-full flex flex-col items-center text-center text-base font-headerFont font-semibold text-primary">
                  <li className="w-full ">
                    <Link
                      href="/"
                      className="block py-2 border-b border-[#ececec]"
                    >
                      Deals
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="/"
                      className="block py-2 border-b border-[#ececec]"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="/"
                      className="block py-2 border-b border-[#ececec]"
                    >
                      About
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="/shop"
                      className="block py-2 border-b border-[#ececec]"
                    >
                      Shop
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="/"
                      className="block py-2 border-b border-[#ececec]"
                    >
                      Vendors
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="/"
                      className="block py-2 border-b border-[#ececec]"
                    >
                      Mega menu
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="/"
                      className="block py-2 border-b border-[#ececec]"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="/"
                      className="block py-2 border-b border-[#ececec]"
                    >
                      Pages
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="/"
                      className="block py-2 border-b border-[#ececec]"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Main Menu desktop view*/}
      <nav className="py-3 border-t shadow-md hidden md:block border-[#ececec]">
        <div className="container flex items-center gap-4 xl:gap-9">
          <div className="relative">
            <h3
              onClick={() => setShow(!show)}
              className="flex items-center gap-1 p-2 text-xs font-bold text-white bg-brand border-2 border-transparent rounded-md cursor-pointer font-headerFont duration-150 hover:bg-white hover:text-text hover:border-brand xl:text-base xl:gap-2 xl:px-6 xl:py-3"
            >
              <FaBox /> <span className="hidden xl:inline">Browse All</span>{" "}
              Categories <FaChevronDown />
            </h3>
            {show && (
              <div className="absolute top-10 left-0 p-7 border-2 border-brand bg-white rounded-lg shadow-2xl grid grid-cols-2 gap-6 z-50 xl:top-20 w-md">
                {/* Manually written items instead of map */}
                <div className="flex items-center gap-2 cursor-pointer shadow py-2 px-3 rounded-lg group duration-150 hover:bg-brand">
                  <div className="bg-white p-1 rounded-md">
                    <Image
                      width={24}
                      height={50}
                      src="/category-1.svg"
                      alt="category1"
                      className="w-6"
                    />
                  </div>
                  <p className="text-sm font-bold text-primary group-hover:text-white">
                    Milks and Dairies
                  </p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer shadow py-2 px-3 rounded-lg group duration-150 hover:bg-brand">
                  <div className="bg-white p-1 rounded-md">
                    <Image
                      width={24}
                      height={50}
                      src="/category-1.svg"
                      alt="category2"
                      className="w-6"
                    />
                  </div>
                  <p className="text-sm font-bold text-primary group-hover:text-white">
                    Fruits & Vegetables
                  </p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer shadow py-2 px-3 rounded-lg group duration-150 hover:bg-brand">
                  <div className="bg-white p-1 rounded-md">
                    <Image
                      width={24}
                      height={50}
                      src="/category-1.svg"
                      alt="category3"
                      className="w-6"
                    />
                  </div>
                  <p className="text-sm font-bold text-primary group-hover:text-white">
                    Beverages
                  </p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer shadow py-2 px-3 rounded-lg group duration-150 hover:bg-brand">
                  <div className="bg-white p-1 rounded-md">
                    <Image
                      width={24}
                      height={50}
                      src="/category-1.svg"
                      alt="category4"
                      className="w-6"
                    />
                  </div>
                  <p className="text-sm font-bold text-primary group-hover:text-white">
                    Snacks
                  </p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer shadow py-2 px-3 rounded-lg group duration-150 hover:bg-brand">
                  <div className="bg-white p-1 rounded-md">
                    <Image
                      width={24}
                      height={50}
                      src="/category-1.svg"
                      alt="category5"
                      className="w-6"
                    />
                  </div>
                  <p className="text-sm font-bold text-primary group-hover:text-white">
                    Frozen Foods
                  </p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer shadow py-2 px-3 rounded-lg group duration-150 hover:bg-brand">
                  <div className="bg-white p-1 rounded-md">
                    <Image
                      width={24}
                      height={50}
                      src="/category-1.svg"
                      alt="category6"
                      className="w-6"
                    />
                  </div>
                  <p className="text-sm font-bold text-primary group-hover:text-white">
                    Household Supplies
                  </p>
                </div>
              </div>
            )}
          </div>
          <ul className="text-base font-headerFont font-semibold text-primary flex gap-3 xl:text-lg xl:gap-8">
            <li>
              <Link
                href="/"
                className="flex items-center gap-1 transition hover:text-brand"
              >
                <FaFireAlt className="text-2xl" /> <span>Deals</span>
              </Link>
            </li>
            <li>
              <Link href="/" className="transition hover:text-brand">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="transition hover:text-brand">
                About
              </Link>
            </li>
            <li>
              <Link href="/shop" className="transition hover:text-brand">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/" className="transition hover:text-brand">
                Vendors
              </Link>
            </li>
            <li>
              <Link href="/" className="transition hover:text-brand">
                Mega menu
              </Link>
            </li>
            <li>
              <Link href="/" className="transition hover:text-brand">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/" className="transition hover:text-brand">
                Pages
              </Link>
            </li>
            <li>
              <Link href="/" className="transition hover:text-brand">
                Contact
              </Link>
            </li>
          </ul>
          <Link
            href="tel: 1900 - 888"
            className="ml-auto flex items-center gap-2"
          >
            <TfiHeadphoneAlt className="text-2xl text-gray-500 xl:text-4xl mr-2" />
            <div>
              <p className="text-brand font-bold text-base xl:text-2xl">
                1900 - 888
              </p>
              <p className="text-secondary font-medium text-xs xl:text-sm">
                24/7 Support Center
              </p>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
