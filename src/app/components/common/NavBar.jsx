"use client";
import React, { useState } from "react";
import { FaBox, FaSearch } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa";
import { IoCall, IoCloseCircleSharp } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaFireAlt } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [sidebar, setSidebar] = useState(false);
 

  return (
    <header className="relative shadow-sm px-2">
      {/* Header Top Part */}
      <div className="container">
        <div className="flex justify-between items-center py-8 gap-8">
          <button
            onClick={() => setSidebar(true)}
            className="md:hidden text-3xl text-primary cursor-pointer"
          >
            <IoReorderThreeOutline />
          </button>
          <Link href="/" className="w-32 inline-block lg:w-auto">
            <Image
              src="/brand-logo.png"
              width={128}
              height={50}
              alt="logo"
              className="w-32"
            />
          </Link>
          <div className="border-2 border-brand opacity-50 p-2 lg:p-3 rounded w-full max-w-64  lg:max-w-[700px] hidden md:flex items-center">
            <select
              name=""
              id=""
              className=" pr-3.5 border-r-2 cursor-pointer border-slate-200 text-primary hidden lg:block"
            >
              <option value="">All Categories</option>
              <option value="">All Categories</option>
              <option value="">All Categories</option>
            </select>
            <input
              type="text"
              placeholder="Search for items..."
              className="px-3.5 w-full lg:w-2/3 outline-0"
            />
            <FaSearch className="ml-auto cursor-pointer" />
          </div>
          <div>
            <ul className="flex items-center gap-4 lg:gap-8 text-sm">
              <li>
                <Link
                  href="/login"
                  className="flex items-center gap-1 text-xl border-brand sm:border-2 py-1 px-2 md:px-3 font-headerFont hover:shadow-2xl duration-200 md:hover:bg-brand hover:text-white"
                >
                  <PiShoppingCart />{" "}
                  <span className="hidden md:flex">cart</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-base md:text-xl border-brand sm:border-2 py-1 px-2 md:px-3 font-headerFont hover:shadow-2xl duration-200 md:hover:bg-brand hover:text-white"
                >
                  login
                </Link>
              </li>
            </ul>
          </div>
          {/* Main menu mobile view */}
          <nav
            className={`w-full h-screen bg-[rgba(0,0,0,0.6)] absolute top-0 left-0 transition-all z-50 ${
              sidebar ? "translate-x-0" : "-translate-x-full"
            } `}
          >
            <div className="w-[95%] h-full pt-2 bg-white overflow-y-auto">
              <div className="flex justify-between items-center border-b border-[#ececec] pb-4 mb-4 px-4">
                <Link href="/" className="w-32 inline-block">
                  <Image
                    width={128}
                    height={50}
                    src="/brand-logo.png"
                    alt="logo"
                  />
                </Link>
                <button
                  onClick={() => setSidebar(false)}
                  className="text-2xl text-brand cursor-pointer"
                >
                  <IoCloseCircleSharp />
                </button>
              </div>
              <div className="px-4 flex flex-col gap-4">
                <div className="border-2 border-brand p-2 lg:p-5 rounded w-full flex items-center">
                  <input
                    type="text"
                    placeholder="Search for items..."
                    className="px-3.5 w-full lg:w-2/3 outline-0"
                  />
                  <FaSearch className="ml-auto" />
                </div>
                <ul className="font-semibold font-headerFont text-primary text-base flex flex-col items-center text-center w-full">
                  <li className="w-full ">
                    <Link
                      href="/"
                      className="block border-b border-[#ececec] py-2"
                    >
                      Deals
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="/"
                      className="block border-b border-[#ececec] py-2"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="/"
                      className="block border-b border-[#ececec] py-2"
                    >
                      About
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="/shop"
                      className="block border-b border-[#ececec] py-2"
                    >
                      Shop
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="/"
                      className="block border-b border-[#ececec] py-2"
                    >
                      Vendors
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="/"
                      className="block border-b border-[#ececec] py-2"
                    >
                      Mega menu
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="/"
                      className="block border-b border-[#ececec] py-2"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="/"
                      className="block border-b border-[#ececec] py-2"
                    >
                      Pages
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="/"
                      className="block border-b border-[#ececec] py-2"
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
      <nav className="hidden md:block py-3 border-t shadow-md border-[#ececec]">
        <div className="container flex items-center gap-4 xl:gap-9">
          <div className="relative">
            <h3
              onClick={() => setShow(!show)}
              className="p-2 xl:py-3 xl:px-6 bg-brand rounded-md font-headerFont  text-white text-xs xl:text-base font-bold flex items-center gap-1 xl:gap-2 cursor-pointer border-2 border-transparent duration-150 hover:border-brand hover:bg-white  hover:text-text "
            >
              <FaBox /> <span className="hidden xl:inline">Browse All</span>{" "}
              Categories <FaChevronDown />
            </h3>
            {show && (
              <div className="bg-white w-md rounded-lg absolute top-10 xl:top-20 left-0 p-7 shadow-2xl border-2   border-brand grid grid-cols-2 gap-6 z-50 ">
                <div className="flex items-center gap-2 cursor-pointer shadow py-2 px-3 group duration-150 hover:bg-brand">
                  <div className="bg-white p-1 rounded-md">
                    <Image
                      width={24}
                      height={50}
                      src="/category-1.svg"
                      alt="category1"
                      className="w-6"
                    />
                  </div>
                  <p className="font-bold text-sm text-primary group-hover:text-white ">
                    Milks and Dairies
                  </p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer shadow py-2 px-3 group duration-150 hover:bg-brand">
                  <div className="bg-white p-1 rounded-md">
                    <Image
                      width={24}
                      height={50}
                      src="/category-1.svg"
                      alt="category1"
                      className="w-6"
                    />
                  </div>
                  <p className="font-bold text-sm text-primary group-hover:text-white">
                    Milks and Dairies
                  </p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer shadow py-2 px-3 group duration-150 hover:bg-brand">
                  <div className="bg-white p-1 rounded-md">
                    <Image
                      width={24}
                      height={50}
                      src="/category-1.svg"
                      alt="category1"
                      className="w-6"
                    />
                  </div>
                  <p className="font-bold  text-sm text-primary group-hover:text-white">
                    Milks and Dairies
                  </p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer shadow py-2 px-3 group duration-150 hover:bg-brand">
                  <div className="bg-white p-1 rounded-md">
                    <Image
                      width={24}
                      height={50}
                      src="/category-1.svg"
                      alt="category1"
                      className="w-6"
                    />
                  </div>
                  <p className="font-bold text-sm text-primary group-hover:text-white">
                    Milks and Dairies
                  </p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer shadow py-2 px-3 group duration-150 hover:bg-brand">
                  <div className="bg-white p-1 rounded-md">
                    <Image
                      width={24}
                      height={50}
                      src="/category-1.svg"
                      alt="category1"
                      className="w-6"
                    />
                  </div>
                  <p className="font-bold text-sm text-primary group-hover:text-white">
                    Milks and Dairies
                  </p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer shadow py-2 px-3 group duration-150 hover:bg-brand">
                  <div className="bg-white p-1 rounded-md">
                    <Image
                      width={24}
                      height={50}
                      src="/category-1.svg"
                      alt="category1"
                      className="w-6"
                    />
                  </div>
                  <p className="font-bold text-sm text-primary group-hover:text-white">
                    Milks and Dairies
                  </p>
                </div>
              </div>
            )}
          </div>
          <ul className="flex gap-3 xl:gap-8 font-headerFont font-semibold  text-primary text-base xl:text-lg">
            <li>
              <Link
                href="/"
                className="flex  items-center gap-1 hover:text-brand transition"
              >
                <FaFireAlt className="text-2xl" /> <span>Deals</span>
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-brand transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-brand transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-brand transition">
                Shop
              </Link>
            </li>{" "}
            <li>
              <Link href="/shop" className="hover:text-brand transition">
                Vendors
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-brand transition">
                Mega menu
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-brand transition">
                Blog
              </Link>
            </li>{" "}
            <li>
              <Link href="/" className="hover:text-brand transition">
                Pages
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-brand transition">
                Contact
              </Link>
            </li>
          </ul>
          <Link
            href="tel: 1900 - 888"
            className="ml-auto flex items-center gap-2"
          >
            <IoCall className="text-2xl xl:text-4xl" />
            <div>
              <p className="text-brand font-bold text-base xl:text-2xl">
                {" "}
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
