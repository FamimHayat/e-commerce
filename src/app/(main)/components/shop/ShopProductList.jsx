// ShopProductList.jsx (no "use client")
import ProductItems from "../common/ProductItems";

export default function ShopProductList({ productList }) {
  return (
    <div className="grid justify-items-center sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">
      {productList.map((items) => (
        <ProductItems key={items.id} productData={items} />
      ))}
    </div>
  );
}
