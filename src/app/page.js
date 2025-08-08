import BannerSlider from "./components/home/BannerSlider/BannerSlider";
import BestSaleProducts from "./components/home/BestSale/BestSaleProducts";
import Catagories from "./components/home/Catagory/Catagories";
import DealOfTheDay from "./components/home/DealsOfTheDay/DealOfTheDay";

import PopularProducts from "./components/home/PopularProducts/PopularProducts";
import ProductShortList from "./components/home/ProductShorting/ProductShortList";

export default function Home() {
  return (
    <>
      <BannerSlider />
      <Catagories />
      <PopularProducts />
      <BestSaleProducts />
      <DealOfTheDay />
      <ProductShortList />
    </>
  );
}
