import ShopProductList from "./ShopProductList";
import LimitSelector from "./LimitSelector"; 
import Link from "next/link";

export const dynamic = "force-dynamic";

async function fetchProducts(limit, skip) {
  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
    { cache: "no-store" }
  );
  return res.json();
}

export default async function ShopProduct({ searchParams }) {
  const limit = parseInt(searchParams?.limit) || 30;
  const skip = parseInt(searchParams?.skip) || 0;

  const productData = await fetchProducts(limit, skip);
  const products = productData.products;
  const totalProduct = productData.total || 0;

  const currentPage = Math.floor(skip / limit) + 1;
  const totalPages = Math.ceil(totalProduct / limit);
  const baseUrl = "/shop";

  return (
    <section>
      <div className="container">
        
        <LimitSelector currentLimit={limit} baseUrl={baseUrl} />

        
        <ShopProductList productList={products} />

        <div className="flex justify-between mt-6">
          {skip === 0 ? (
            <button className="text-black/80 text-lg py-2 px-5 font-semibold duration-150 bg-gray-200 opacity-50">
              prev
            </button>
          ) : (
            <Link
              href={`${baseUrl}?limit=${limit}&skip=${Math.max(skip - limit, 0)}`}
              className="text-white text-lg py-2 px-5 font-semibold duration-150 bg-brand cursor-pointer hover:bg-black/80"
            >
              prev
            </Link>
          )}

          <span className="text-sm font-medium text-gray-600">
            Page {currentPage} of {totalPages}
          </span>

          {skip + limit >= totalProduct ? (
            <button className="text-black/80 text-lg py-2 px-5 font-semibold duration-150 bg-gray-200 opacity-50">
              next
            </button>
          ) : (
            <Link
              href={`${baseUrl}?limit=${limit}&skip=${Math.min(skip + limit, totalProduct - limit)}`}
              className="text-white text-lg py-2 px-5 font-semibold duration-150 bg-brand cursor-pointer hover:bg-black/80"
            >
              next
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
