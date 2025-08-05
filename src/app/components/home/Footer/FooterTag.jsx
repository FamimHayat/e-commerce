import Link from "next/link";
import React from "react";
import { BsTelephoneOutbound } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa"
import { FiFacebook, FiInstagram, FiPrinter, FiTwitter, FiYoutube } from "react-icons/fi";

const FooterTag = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mt-5 justify-items-center gap-5 md:gap-0">
      <p className="text-sm text-primary font-textFont max-w-xs">
        © 2024, <span className="inline-block text-brand">Nest</span> - HTML
        Ecommerce Template All rights reserved
      </p>
      <div className="scale-80 sm:scale-100 md:scale-80 lg:scale-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 justify-items-center gap-3 ">
        <div className="flex items-center gap-3">
          <BsTelephoneOutbound className="text-3xl text-primary opacity-70" />
          <div className="flex flex-col">
            <Link
              href="tel:0156443456"
              className=" text-2xl font-semibold text-brand font-headerFont"
            >
              1900 - 6666{" "}
            </Link>
            <small className="text-sm text-primary font-textFont">
              Working 8:00 - 22:00
            </small>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <BsTelephoneOutbound className="text-3xl text-primary opacity-70" />
          <div className="flex flex-col">
            <Link
              href="tel:0156443456"
              className=" text-2xl font-semibold text-brand font-headerFont"
            >
              1900 - 6666{" "}
            </Link>
            <small className="text-sm text-primary font-textFont">
              Working 8:00 - 22:00
            </small>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center gap-3">
          <p className="text-primary font-textFont text-sm">Follow us </p>
          <ul className="flex gap-1">
            <li className="bg-brand rounded-full w-8 h-8 ">
              <Link
                href="/"
                className="flex justify-center items-center h-full"
              >
                <FiFacebook className="text-xl text-white" />
              </Link>
            </li>
            <li className="bg-brand rounded-full w-8 h-8 ">
              <Link
                href="/"
                className="flex justify-center items-center h-full"
              >
                <FiTwitter className="text-xl text-white" />
              </Link>
            </li>
            <li className="bg-brand rounded-full w-8 h-8 ">
              <Link
                href="/"
                className="flex justify-center items-center h-full"
              >
                <FiInstagram className="text-xl text-white" />
              </Link>
            </li>
            <li className="bg-brand rounded-full w-8 h-8 ">
              <Link
                href="/"
                className="flex justify-center items-center h-full"
              >
                <FaPinterest className="text-xl text-white" />
              </Link>
            </li>
            <li className="bg-brand rounded-full w-8 h-8 ">
              <Link
                href="/"
                className="flex justify-center items-center h-full"
              >
                <FiYoutube className="text-xl text-white" />
              </Link>
            </li>
          </ul>
        </div>
        <p className="text-center text-sm mt-2">
          Up to 15% discount on your first subscribe
        </p>
      </div>
    </div>
  );
};

export default FooterTag;
