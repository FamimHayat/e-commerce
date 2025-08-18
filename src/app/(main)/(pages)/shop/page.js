import Breadcrumb from '@/app/components/common/Breadcrumb'
import DealOfTheDay from '@/app/components/home/DealsOfTheDay/DealOfTheDay'
import ShopProductList from '@/app/components/shop/ShopProductList'
import React from 'react'

const page = () => {
  return (
    <>
      <Breadcrumb />
      <ShopProductList />
      <DealOfTheDay />
    </>
  );
}

export default page