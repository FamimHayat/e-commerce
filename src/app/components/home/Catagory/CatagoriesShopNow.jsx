import React from 'react'
import ShopNowItems from './ShopNowItems'

const CatagoriesShopNow = () => {
  return (
    <div className="container grid grid-cols-1 gap-5 px-2 pt-15 sm:grid-cols-3 sm:p-0 lg:pt-20">
      <ShopNowItems style={{ backgroundImage: "url('/shop-now-1.png')" }} />
      <ShopNowItems style={{ backgroundImage: "url('/shop-now-2.png')" }} />
      <ShopNowItems style={{ backgroundImage: "url('/shop-now-3.png')" }} />
    </div>
  );
}

export default CatagoriesShopNow