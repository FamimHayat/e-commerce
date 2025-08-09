import React from "react";
import Header from "../../common/Header";
import ProductItems from "../../common/ProductItems";

const PopularProducts = () => {
  return (
    <>
      <div className="container">
        <div>
          <Header headerText={"Popular Products"} />
        </div>
        <div className="mt-5 sm:mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 justify-items-center lg:gap-0">
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
        </div>
      </div>
    </>
  );
};

export default PopularProducts;
