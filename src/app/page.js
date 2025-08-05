
import BannerSlider from "./components/home/BannerSlider/BannerSlider"
import Catagories from "./components/home/Catagory/Catagories"
import DealOfTheDay from "./components/home/DealsOfTheDay/DealOfTheDay"
  
import FooterBanner from "./components/home/FooterBanner/FooterBanner"
import PopularProducts from "./components/home/PopularProducts/PopularProducts"
import ProductShortList from "./components/home/ProductShorting/ProductShortList"
import ServiceTags from "./components/home/Services/ServiceTags"



export default function Home() {
  return (
    <>
      <BannerSlider />
      <Catagories />
      <PopularProducts />
      <DealOfTheDay />
      <ProductShortList />
      <FooterBanner />
      <ServiceTags />
      
    </>
  );
}
