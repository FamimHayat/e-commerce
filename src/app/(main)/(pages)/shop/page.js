import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import DealOfTheDay from "../../components/home/DealsOfTheDay/DealOfTheDay";
import ShopProduct from "../../components/shop/ShopProduct";

const page = () => {
  return (
    <>
      <Breadcrumb />
      <ShopProduct />
      <DealOfTheDay />
    </>
  );
};

export default page;
