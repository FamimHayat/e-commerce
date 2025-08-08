"use client";
import React, { useState, useEffect } from "react";
import ProductItems from "../home/PopularProducts/ProductItems";

const ShopProductList = () => {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setShowAll(window.innerWidth >= 640); // sm breakpoint
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section>
      <div className="container">
        <p className="text-xl font-textFont text-primary mb-10">
          we found <span className="text-brand">69</span> items for you
        </p>

        <div className="grid justify-items-center sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">
          {/* Always show first 10 */}
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />

          {/* Only render these if showAll is true */}
          {showAll && (
            <>
              <ProductItems />
              <ProductItems />
              <ProductItems />
              <ProductItems />
              <ProductItems />
              <ProductItems />
              <ProductItems />
            </>
          )}
        </div>

        <div className="py-5 text-zinc-500 text-3xl text-center md:text-left">
          page buttons
        </div>
      </div>
    </section>
  );
};

export default ShopProductList;
