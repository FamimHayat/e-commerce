import Image from "next/image";

import { PiShoppingCartDuotone } from "react-icons/pi";
import Breadcrumb from "../../../components/common/Breadcrumb";
import Counter from "@/app/(main)/components/common/Counter";

export const revalidate = 60;

export default async function ProductPage({ params }) {
  const { id } = params;

  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 60 },
  });

  const productDetails = await res.json();

  console.log(productDetails);

  return (
    <section className="px-2">
      <div className="container">
        <Breadcrumb />

        <div className="flex flex-col sm:flex-row gap-5 mt-6">
          <Image
            src={productDetails?.images?.[0] || "/fallback.jpg"}
            width={520}
            height={800}
            alt={productDetails?.title || "Product image"}
            className="w-full h-full   sm:w-80 sm:h-150 md:w-100 lg:h-full border rounded-2xl border-black/10 object-cover"
          />

          <div className="px-4 w-full border rounded-2xl border-black/10">
            <div className="p-3 flex flex-col gap-3 lg:gap-5">
              <small
                className={`inline-block w-fit px-3 py-1 mt-3 text-xl text-white rounded-tl-xl rounded-br-xl ${
                  productDetails?.stock > 0 ? "bg-brand" : "bg-red-500"
                }`}
              >
                {productDetails?.stock > 0 ? "In Stock" : "Out of Stock"}
              </small>

              <h3 className="text-3xl lg:text-4xl font-semibold text-primary">
                {productDetails?.title}
              </h3>

              <p className="text-lg text-primary font-headerFont">
                Brand:{" "}
                <span className="text-brand">{productDetails?.brand}</span>
              </p>

              <p className="text-lg text-primary font-headerFont">
                rating : {productDetails?.rating}
              </p>

              <p className="text-4xl xl:text-5xl font-semibold text-brand">
                ${productDetails?.price}
              </p>

              <p className="text-primary text-lg">
                {productDetails?.description}
              </p>

              <div className="flex flex-col lg:flex-row gap-5 mt-4">
                <div>
                  <Counter />
                </div>
                <button className="flex items-center justify-center gap-3 text-xl text-white cursor-pointer button-shadow-hover rounded-md px-4 lg:px-8 py-2 lg:py-3 bg-brand hover:bg-amber-400 duration-200">
                  <PiShoppingCartDuotone /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-2xl border-black/10 mt-8 p-10">
          <div className="border-b border-black/10 pb-5"><p className="rounded-2xl mb-5 px-5 py-3 shadow-md border border-black/20 w-fit font-semibold">
            Description
          </p>
          <div className="flex flex-col gap-5">
            <p className="text-lg text-black/70">
              {productDetails?.description}
            </p>
            <p className="text-lg sm:text-xl bg-brand w-fit rounded-2xl py-1 px-2 text-white font-semibold text-shadow-2xs ">
              {productDetails?.category}
            </p>
            <p className="text-lg sm:text-xl bg-brand w-fit rounded-2xl py-1 px-2 text-white font-semibold text-shadow-2xs ">
              {productDetails?.shippingInformation}
            </p>
            <p className="text-lg sm:text-xl bg-brand w-fit rounded-2xl py-1 px-2 text-white font-semibold text-shadow-2xs ">
              {productDetails?.warrantyInformation}
            </p>
            <p className="text-lg sm:text-xl bg-brand w-fit rounded-2xl py-1 px-2 text-white font-semibold text-shadow-2xs ">
              {productDetails?.returnPolicy}
            </p>
            
          </div></div>
          <div className="border-b border-black/10 pt-10 pb-5">
            <p className="text-3xl text-primary font-semibold mb-8">packinging & delivery</p>
            <h2 className="rounded-2xl mb-5 px-5 py-3 shadow-md border text-black/70 border-black/20 w-fit font-semibold">Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.

Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.</h2>
          </div>
          <div>
            <h3  className="text-3xl text-primary font-semibold mb-8 pt-10">warning</h3>
            <p className="rounded-2xl mb-5 px-5 py-3 shadow-md border text-black/70 border-black/20 w-fit font-semibold">Oil separation occurs naturally. May contain pieces of shell.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
