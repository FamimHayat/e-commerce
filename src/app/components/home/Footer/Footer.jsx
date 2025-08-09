"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import FooterTag from "./FooterTag";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [toggles, setToggles] = useState({
    company: false,
    account: false,
    corporate: false,
    popular: false,
  });

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");

    const handleResize = () => setIsMobile(mq.matches);

    handleResize();
    mq.addEventListener("change", handleResize);
    return () => mq.removeEventListener("change", handleResize);
  }, []);

  const toggleSection = (section) => {
    if (!isMobile) return; // Only toggle on mobile
    setToggles((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Chevron SVG component
  const Chevron = ({ open }) => (
    <svg
      className={`w-5 h-5 ml-2 transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );

  return (
    <footer className="my-10 px-2">
      <div className="container border-b-2 border-[#3bb77d77] ">
        <div className="flex flex-col xl:flex-row gap-3 mb-5">
          {/* Brand Info */}
          <div className="w-full xl:max-w-3xs flex flex-col items-center mb-5">
            <div>
              <Image
                src="/footer-brand-logo.svg"
                height={100}
                width={100}
                className="w-60 "
                alt="brand-logo"
              />
            </div>
            <div className="mt-5 flex flex-col gap-3 text-md text-primary font-textFont items-center">
              <h2>Awesome grocery store website template</h2>
              <p>
                <span className="font-semibold mr-1 ">Address: </span> 5171 W
                Campbell Ave undefined Kent, Utah 53127 United States
              </p>
              <p>
                <span className="font-semibold mr-1">Call Us:</span> (+91) -
                540-025-124553
              </p>
              <p>
                <span className="font-semibold mr-1">Email:</span> sale@Nest.com
              </p>
              <p>
                <span className="font-semibold mr-1">Hours:</span> 10:00 -
                18:00, Mon - Sat
              </p>
            </div>
          </div>

          {/* Lists Section */}
          <div className="max-w-4xl grid sm:grid-cols-2 md:grid-cols-4 gap-3 lg:ml-10 justify-items-center w-full mt-5 mb-10">
            {/* Company */}
            <div>
              <h2
                className="text-2xl font-headerFont text-primary mb-4 font-semibold flex items-center justify-between cursor-pointer sm:cursor-default"
                onClick={() => toggleSection("company")}
              >
                Company
                {isMobile && <Chevron open={toggles.company} />}
              </h2>
              <ul
                className={`flex flex-col gap-2 md:gap-3 text-md text-primary font-textFont ${
                  isMobile && !toggles.company ? "hidden" : "block"
                }`}
              >
                <li>
                  <Link href="/" className="duration-150 hover:text-brand">
                    {" "}
                    about us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="duration-150 hover:text-brand">
                    delivery information
                  </Link>
                </li>
                <li>
                  <Link href="/" className="duration-150 hover:text-brand">
                    privacy policy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="duration-150 hover:text-brand">
                    terms & condition
                  </Link>
                </li>
                <li>
                  <Link href="/" className="duration-150 hover:text-brand">
                    contact us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="duration-150 hover:text-brand">
                    support center
                  </Link>
                </li>
                <li>
                  <Link href="/" className="duration-150 hover:text-brand">
                    careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Account */}
            <div>
              <h2
                className="text-2xl font-headerFont text-primary mb-4 font-semibold flex items-center justify-between cursor-pointer sm:cursor-default"
                onClick={() => toggleSection("account")}
              >
                Account
                {isMobile && <Chevron open={toggles.account} />}
              </h2>
              <ul
                className={`flex flex-col gap-2 md:gap-3  text-md text-primary font-textFont ${
                  isMobile && !toggles.account ? "hidden" : "block"
                }`}
              >
                <li>
                  <Link href="/" className="duration-150 hover:text-brand">
                    {" "}
                    about us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="duration-150 hover:text-brand">
                    delivery information
                  </Link>
                </li>
                <li>
                  <Link href="/" className="duration-150 hover:text-brand">
                    privacy policy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="duration-150 hover:text-brand">
                    terms & condition
                  </Link>
                </li>
                <li>
                  <Link href="/" className="duration-150 hover:text-brand">
                    contact us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="duration-150 hover:text-brand">
                    support center
                  </Link>
                </li>
                <li>
                  <Link href="/" className="duration-150 hover:text-brand">
                    careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Corporate */}
            <div>
              <h2
                className="text-2xl font-headerFont text-primary mb-4 font-semibold flex items-center justify-between cursor-pointer sm:cursor-default"
                onClick={() => toggleSection("corporate")}
              >
                Corporate
                {isMobile && <Chevron open={toggles.corporate} />}
              </h2>
              <ul
                className={`flex flex-col gap-2 md:gap-3 text-md text-primary font-textFont ${
                  isMobile && !toggles.corporate ? "hidden" : "block"
                }`}
              >
                <li>
                  <Link href="/" className="duration-150 hover:text-brand">
                    {" "}
                    about us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="duration-150 hover:text-brand">
                    delivery information
                  </Link>
                </li>
                <li>
                  <Link href="/" className="duration-150 hover:text-brand">
                    privacy policy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="duration-150 hover:text-brand">
                    terms & condition
                  </Link>
                </li>
                <li>
                  <Link href="/" className="duration-150 hover:text-brand">
                    contact us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="duration-150 hover:text-brand">
                    support center
                  </Link>
                </li>
                <li>
                  <Link href="/" className="duration-150 hover:text-brand">
                    careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Popular */}
            <div>
              <h2
                className="text-2xl font-headerFont text-primary mb-4 font-semibold flex items-center justify-between cursor-pointer sm:cursor-default"
                onClick={() => toggleSection("popular")}
              >
                Popular
                {isMobile && <Chevron open={toggles.popular} />}
              </h2>
              <ul
                className={`flex flex-col gap-2 md:gap-3 text-md text-primary font-textFont ${
                  isMobile && !toggles.popular ? "hidden" : "block"
                }`}
              >
                <li>
                  <Link href="/" className="duration-150 hover:text-brand">
                    {" "}
                    about us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="duration-150 hover:text-brand">
                    delivery information
                  </Link>
                </li>
                <li>
                  <Link href="/" className="duration-150 hover:text-brand">
                    privacy policy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="duration-150 hover:text-brand">
                    terms & condition
                  </Link>
                </li>
                <li>
                  <Link href="/" className="duration-150 hover:text-brand">
                    contact us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="duration-150 hover:text-brand">
                    support center
                  </Link>
                </li>
                <li>
                  <Link href="/" className="duration-150 hover:text-brand">
                    careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Install App */}
          <div className=" w-full xl:max-w-3xs  ">
            <h2 className="text-2xl text-center xl:text-center font-headerFont text-primary mb-5 font-semibold">
              Install App
            </h2>
            <div className="grid  grid-cols-1 sm:grid-cols-2  xl:grid-cols-1 place-items-center">
              <p className="text-md text-primary font-textFont">
                From App Store or Google Play
              </p>

              <div className="flex gap-2 mt-5 xl:mt-15 mb-5 xl:mb-15">
                <Link href="/">
                  <Image
                    src="/app-store.jpg"
                    width={100}
                    height={100}
                    className="h-full w-30"
                    alt="app-store"
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="/google-play.jpg"
                    width={100}
                    height={100}
                    className="h-full w-30"
                    alt="play-store"
                  />
                </Link>
              </div>
              <p className="text-md text-primary font-textFont m">
                Secured Payment Gateways
              </p>

              <Link href="/">
                <Image
                  src="/payment-method.png"
                  width={100}
                  height={100}
                  alt="payment-method"
                  className="h-7 w-55 mt-5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <FooterTag />
      </div>
    </footer>
  );
};

export default Footer;
