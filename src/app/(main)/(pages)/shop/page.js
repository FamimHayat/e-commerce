import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import ShopProductList from "../../components/shop/ShopProductList";
import DealOfTheDay from "../../components/home/DealsOfTheDay/DealOfTheDay";

const page = () => {
  return (
    <>
      <Breadcrumb />
      <ShopProductList />
      <DealOfTheDay />
    </>
  );
};

export default page;
