import Image from 'next/image'
import React from 'react'

const ServiceTags = () => {
  return (
    <div className="container py-5 px-2 ">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2">
        <div className="py-2 px-2  flex flex-col xl:flex-row items-center gap-2 rounded-xl bg-green-100 group">
          <Image
            src={"/service-tag-1.svg"}
            width={100}
            height={100}
            className="w-20 h-20 pt-3 pb-3 duration-200 group-hover:pb-5 group-hover:pt-1"
            alt="product-image"
          />
          <div>
            <h2 className="text-sm 2xl:text-lg text-primary font-textFont font-semibold">
              Best prices & offers{" "}
            </h2>
            <p className="pt-2 text-sm 2xl:text-md text-primary opacity-70 font-textFont font-semibold">
              Orders $50 or more
            </p>
          </div>
        </div>
        <div className="py-2 px-3 flex flex-col xl:flex-row items-center gap-2 rounded-xl bg-green-100 group">
          <Image
            src={"/service-tag-1.svg"}
            width={100}
            height={100}
            className="w-20 h-20 pt-3 pb-3 duration-200 group-hover:pb-5 group-hover:pt-1"
            alt="product-image"
          />
          <div>
            <h2 className="text-sm 2xl:text-lg text-primary font-textFont font-semibold">
              Best prices & offers{" "}
            </h2>
            <p className="pt-2 text-sm 2xl:text-md text-primary opacity-70 font-textFont font-semibold">
              Orders $50 or more
            </p>
          </div>
        </div>
        <div className="py-2 px-3 flex flex-col xl:flex-row items-center gap-2 rounded-xl bg-green-100 group">
          <Image
            src={"/service-tag-1.svg"}
            width={100}
            height={100}
            className="w-20 h-20 pt-3 pb-3 duration-200 group-hover:pb-5 group-hover:pt-1"
            alt="product-image"
          />
          <div>
            <h2 className="text-sm 2xl:text-lg text-primary font-textFont font-semibold">
              Best prices & offers{" "}
            </h2>
            <p className="pt-2 text-sm 2xl:text-md text-primary opacity-70 font-textFont font-semibold">
              Orders $50 or more
            </p>
          </div>
        </div>
        <div className="py-2 px-3 flex flex-col xl:flex-row items-center gap-2 rounded-xl bg-green-100 group">
          <Image
            src={"/service-tag-1.svg"}
            width={100}
            height={100}
            className="w-20 h-20 pt-3 pb-3 duration-200 group-hover:pb-5 group-hover:pt-1"
            alt="product-image"
          />
          <div>
            <h2 className="text-sm 2xl:text-lg text-primary font-textFont font-semibold">
              Best prices & offers{" "}
            </h2>
            <p className="pt-2 text-sm 2xl:text-md text-primary opacity-70 font-textFont font-semibold">
              Orders $50 or more
            </p>
          </div>
        </div>
        <div className="py-2 px-3 flex flex-col xl:flex-row items-center gap-2 rounded-xl bg-green-100 group">
          <Image
            src={"/service-tag-1.svg"}
            width={100}
            height={100}
            className="w-20 h-20 pt-3 pb-3 duration-200 group-hover:pb-5 group-hover:pt-1"
            alt="product-image"
          />
          <div>
            <h2 className="text-sm 2xl:text-lg text-primary font-textFont font-semibold">
              Best prices & offers{" "}
            </h2>
            <p className="pt-2 text-sm 2xl:text-md text-primary opacity-70 font-textFont font-semibold">
              Orders $50 or more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceTags

