"use client";
import React, { useState } from "react";
import { FaBox, FaSearch } from "react-icons/fa";
import { PiShoppingCart, PiUser } from "react-icons/pi";
import { FaChevronDown, FaFireAlt } from "react-icons/fa";
import { IoCloseCircleSharp, IoReorderThreeOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import Link from "next/link";
import Image from "next/image";
import MegaMenu from "./nav components/MegaMenu"


const Navbar = () => {
  const [show, setShow] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  return (
    <header className="px-2 shadow-sm relative">
      {/* Header Top Part */}
      <div className="container">
        <div className="py-8 gap-8 flex justify-between items-center">
          {/* Mobile menu button */}
          <button
            onClick={() => setSidebar(true)}
            className="cursor-pointer text-primary text-3xl md:hidden"
          >
            <IoReorderThreeOutline />
          </button>

          {/* Logo */}
          <Link href="/" className="inline-block w-32 lg:w-auto">
            <Image
              src="/brand-logo.png"
              width={128}
              height={50}
              alt="logo"
              className="w-32"
            />
          </Link>

          {/* Search Bar */}
          <div className="border-2 border-brand opacity-50 p-2 rounded w-full max-w-64 hidden items-center md:flex lg:max-w-[700px] lg:p-3">
            <select className="border-r-2 pr-3.5 text-primary cursor-pointer border-brand hidden lg:block">
              <option>All Categories</option>
              <option>Groceries</option>
              <option>Snacks</option>
            </select>
            <input
              type="text"
              placeholder="Search for items..."
              className="w-full px-3.5 outline-0 lg:w-2/3"
            />
            <FaSearch className="ml-auto cursor-pointer" />
          </div>

          {/* Cart + Login */}
          <div>
            <ul className="text-sm flex items-center gap-4 lg:gap-8">
              <li>
                <Link
                  href="/cart"
                  className="flex items-center gap-1 text-white rounded-md text-2xl px-2 py-1 bg-brand font-headerFont duration-200 button-shadow-hover hover:bg-amber-500"
                >
                  <PiShoppingCart />{" "}
                  <span className="hidden md:flex">cart</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/myAccount"
                  className="flex items-center gap-1 text-white rounded-md text-2xl px-2 py-1 bg-brand font-headerFont duration-200 button-shadow-hover  hover:bg-amber-500"
                >
                  <PiUser /> <span className="hidden md:flex">Account</span>
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/myAccount"
                  className="flex items-center gap-1 text-white rounded-md text-lg md:text-2xl px-2 py-1 bg-brand font-headerFont duration-200 button-shadow-hover"
                >
                  Account
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Mobile Sidebar */}
          <nav
            className={`absolute top-0 left-0 z-50 w-full h-screen bg-[rgba(0,0,0,0.6)] transition-all ${
              sidebar ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="pt-2 w-[95%] h-full bg-white overflow-y-auto">
              {/* Sidebar Header */}
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

              {/* Sidebar Search */}
              <div className="flex flex-col gap-4 px-4">
                <div className="flex items-center border-2 border-brand p-2 rounded w-full">
                  <input
                    type="text"
                    placeholder="Search for items..."
                    className="w-full px-3.5 outline-0"
                  />
                  <FaSearch className="ml-auto" />
                </div>

                {/* Sidebar Links */}
                <ul className="w-full flex flex-col items-center text-center text-base font-headerFont font-semibold text-primary">
                  <li className="w-full">
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

                  {/* Mobile Mega Menu */}
                  <li className="w-full">
                    <MegaMenu />
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

      {/* Main Menu desktop view */}
      <nav className="py-3 border-t shadow-md hidden md:block border-[#ececec]">
        <div className="container flex items-center gap-4 xl:gap-9">
          <div className="relative">
            <h3
              onClick={() => setShow(!show)}
              className="flex items-center gap-1 p-1 border-2 border-brand text-xs font-bold text-white hover:text-primary bg-brand rounded-md cursor-pointer duration-150 hover:bg-white  hover:border-brand xl:text-base xl:gap-2 xl:px-6 xl:py-3"
            >
              <FaBox /> <span className="hidden xl:inline">Browse All</span>{" "}
              Categories <FaChevronDown />
            </h3>
            {show && (
              <div className="absolute top-10 left-0 p-7 border-2 border-brand bg-white rounded-lg shadow-2xl grid grid-cols-2 gap-6 z-50 xl:top-20 w-md">
                {/* Example Categories (unchanged from your code) */}
                <div className="flex items-center gap-2 cursor-pointer shadow py-2 px-3 rounded-lg group duration-150 hover:bg-brand">
                  <div className="bg-white p-1 rounded-md">
                    <Image
                      width={24}
                      height={50}
                      src="/category-1.svg"
                      alt="category1"
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
                    />
                  </div>
                  <p className="text-sm font-bold text-primary group-hover:text-white">
                    Fruits & Vegetables
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Menu Items */}
          <ul className="text-base mx-auto  font-headerFont font-semibold text-primary flex  gap-3 xl:text-lg xl:gap-8">
            <li>
              <Link
                href="/"
                className="flex items-center gap-1 text-sm lg:text-md xl:text-lg transition hover:text-brand "
              >
                <FaFireAlt className="text-2xl" /> <span>Deals</span>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-sm lg:text-md xl:text-lg transition hover:text-brand "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-sm lg:text-md xl:text-lg transition hover:text-brand "
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="text-sm lg:text-md xl:text-lg transition hover:text-brand "
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-sm lg:text-md xl:text-lg transition hover:text-brand "
              >
                Vendors
              </Link>
            </li>

            {/* Desktop Mega Menu */}
            <li className="relative group ">
              <MegaMenu />
            </li>

            <li>
              <Link
                href="/"
                className="text-sm lg:text-md xl:text-lg transition hover:text-brand "
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-sm lg:text-md xl:text-lg transition hover:text-brand "
              >
                Pages
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-sm lg:text-md xl:text-lg transition hover:text-brand "
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Support Contact */}
          <Link
            href="tel: 1900 - 888"
            className="hidden ml-auto lg:flex items-center gap-2"
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
