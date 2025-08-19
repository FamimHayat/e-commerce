import Link from "next/link";
import React from "react";

const CatagorySliderItems = ({ category }) => {
  return (
    <div className="h-50 flex justify-center items-center cursor-pointer rounded-2xl border-2 border-transparent bg-amber-200 duration-200 hover:border-primary ">
      <Link href="/">
        <h2 className="pb-2 text-center text-xl font-semibold text-primary font-textFont">
          {category}
        </h2>
      </Link>
    </div>
  );
};

export default CatagorySliderItems;
