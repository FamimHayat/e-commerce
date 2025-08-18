"use client";
import React, { useRef, useState, useEffect } from "react";
import SingleListProduct from "./SingleListProduct";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ShortListItems = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="">
      <div className="flex justify-between items-center border-b-2 border-b-[#00000080]  pb-2">
        <h2 className=" text-xl sm:text-2xl md:text-3xl text-primary font-semibold font-textFont">
          Top Selling
        </h2>
        <button
          onClick={toggleOpen}
          className="sm:hidden text-xl text-primary"
          aria-label="Toggle Product List"
        >
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      <div className="pt-5 grid grid-cols-1">
        <SingleListProduct />
        <div
          ref={contentRef}
          className={`sm:hidden grid grid-cols-1 transition-all duration-300 ease-in-out overflow-hidden`}
          style={{
            maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
          }}
        >
          <SingleListProduct />
          <SingleListProduct />
        </div>
        <div className="hidden sm:grid grid-cols-1">
          <SingleListProduct />
          <SingleListProduct />
        </div>
      </div>
    </div>
  );
};

export default ShortListItems;
