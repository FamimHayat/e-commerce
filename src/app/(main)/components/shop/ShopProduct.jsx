"use client";

import React, { useState, useEffect } from "react";
import ShopProductList from "./ShopProductList";

export default function ShopProduct() {
  const [limit, setLimit] = useState(30);
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState({});
  const totalProduct = productData.total || 0;

  const [skip, setSkip] = useState(0);


  const handlePrev = () => {
    setSkip((prev) => Math.max(prev - limit, 0));
  };

  const handleNext = () => {
    setSkip((prev) => Math.min(prev + limit, totalProduct - limit));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        );
        const data = await res.json();
        setProducts(data.products);
        setProductData(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [limit, skip]);

  const currentPage = Math.floor(skip / limit) + 1;
  const totalPages = Math.ceil(totalProduct / limit);

  return (
    <section>
      <div className="container">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center gap-4 mb-4"
        >
          <select
            value={limit}
            onChange={(e) => {
              setLimit(Number(e.target.value));
              setSkip(0);
            }}
            className="border rounded px-2 py-1"
          >
            <option value={30}>30</option>
            <option value={60}>60</option>
            <option value={90}>90</option>
            <option value={120}>120</option>
            <option value={150}>150</option>
            <option value={180}>180</option>
            <option value={210}>210</option>
          </select>
        </form>
        <ShopProductList productList={products} />
        <div className="flex justify-between mt-6">

          {skip === 0 ? (
            <button className="text-black/80 text-lg py-2 px-5 font-semibold duration-150 bg-gray-200 opacity-50">
              prev
            </button>
          ) : (
            <button
              onClick={handlePrev}
              className="text-white text-lg py-2 px-5 font-semibold duration-150 bg-brand cursor-pointer hover:bg-black/80"
            >
              prev
            </button>
          )}

          <span className="text-sm font-medium text-gray-600">
            Page {currentPage} of {totalPages}
          </span>

          {skip + limit >= totalProduct ? (
            <button className="text-black/80 text-lg py-2 px-5 font-semibold duration-150 bg-gray-200 opacity-50">
              next
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="text-white text-lg py-2 px-5 font-semibold duration-150 bg-brand cursor-pointer hover:bg-black/80"
            >
              next
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
