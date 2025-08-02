import React from 'react'
import ShopNowItems from './ShopNowItems'

const CatagoriesShopNow = () => {
  return (
    <div className="container px-2 sm:p-0 pt-15 lg:pt-20 grid grid-cols-1 sm:grid-cols-3 gap-5">
      <ShopNowItems
        style={{ backgroundImage: "url('/shop-now-1.png')" }}
        
      />
      <ShopNowItems style={{ backgroundImage: "url('/shop-now-2.png')" }} />
      <ShopNowItems style={{ backgroundImage: "url('/shop-now-3.png')" }} />
    </div>
  );
}

export default CatagoriesShopNow