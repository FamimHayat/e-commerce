import Breadcrumb from "@/app/components/common/Breadcrumb";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="px-2">
      <div className="container">
        <div>
          <Breadcrumb />
        </div>
        <div>
          <Image
            src="/product-1-front.jpg"
            width={320}
            height={400}
            alt="product-image"
          />
        </div>
      </div>
    </section>
  );
};

export default page;
