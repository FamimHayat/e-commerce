import Breadcrumb from "../../components/common/Breadcrumb";
import DealOfTheDay from "../../components/home/DealsOfTheDay/DealOfTheDay";
import ShopProduct from "../../components/shop/ShopProduct";

export default function Page({ searchParams }) {
  return (
    <>
      <Breadcrumb />
      <ShopProduct searchParams={searchParams} /> 
      <DealOfTheDay />
    </>
  );
}
