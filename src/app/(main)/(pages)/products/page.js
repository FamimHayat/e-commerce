import Image from "next/image";
import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";

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
