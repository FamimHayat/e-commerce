import React from "react";
import Header from "../../common/Header"

const BestSaleProducts = () => {
  return (
    <section className="px-2 my-20">
      <div className="container">
        <div>
          <Header headerText={"Daily Best Sells"} />
        </div>
        <div
          className="w-full sm:w-90 h-130 rounded-2xl mt-10 " 
          style={{ backgroundImage: "url('/best-sale-background.png" }}
        ></div>
      </div>
    </section>
  );
};

export default BestSaleProducts;
