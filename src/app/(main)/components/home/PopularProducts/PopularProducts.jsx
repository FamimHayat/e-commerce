import React from "react";
import Header from "../../common/Header";
import ProductItems from "../../common/ProductItems";
import Link from "next/link";

const PopularProducts = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=20", {
    method: "GET",
  });
  const productData = await res.json();
  const products = await productData.products;

  return (
    <>
      <div className="container">
        <div className="flex justify-between">
          <Header headerText={"Popular Products"} />
          <Link
            href={"/shop"}
            className="text-lg  text-text duration-150 hover:text-brand"
          >
            show all
          </Link>
        </div>
        <div className="mt-5 sm:mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 justify-items-center lg:gap-0">
          {products.map((items) => (
            <ProductItems key={items.id} productData={items} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularProducts;
