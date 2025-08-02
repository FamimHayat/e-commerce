
import BannerSlider from "./components/home/BannerSlider/BannerSlider"
import Catagories from "./components/home/Catagory/Catagories"
import DealOfTheDay from "./components/home/DealsOfTheDay/DealOfTheDay"
import PopularProducts from "./components/home/PopularProducts/PopularProducts"



export default function Home() {
  return (
    <>
      <BannerSlider />
      <Catagories />
      <PopularProducts />
      <DealOfTheDay/>
    </>
  );
}
