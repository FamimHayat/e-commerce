import React from 'react'
import Header from '../../common/Header'
import DealOfTheDayItems from './DealOfTheDayItems'
import Link from 'next/link'
import { MdKeyboardArrowRight } from "react-icons/md";

const DealOfTheDay = () => {
  return (
    <div className="container my-15 pb-15 px-2">
      <div className="flex flex-col sm:flex-row justify-between">
        <Header headerText={"Deals Of The Day"} />
        <Link href="/">
          <div className="mt-3 flex justify-center items-center">
            <p className="text-lg  text-primary duration-200 hover:text-brand text-center ">all deals</p>{" "}
            <MdKeyboardArrowRight className=" mt-1 text-2xl text-primary duration-200 hover:text-brand!" />
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-10 md:gap-5 ">
        <DealOfTheDayItems style={{ backgroundImage: "url('/deal-1.png')" }} />
        <DealOfTheDayItems style={{ backgroundImage: "url('/deal-2.png')" }} />
        <DealOfTheDayItems style={{ backgroundImage: "url('/deal-3.png')" }} />
        <DealOfTheDayItems style={{ backgroundImage: "url('/deal-4.png')"  }} />
      </div>
    </div>
  );
}

export default DealOfTheDay
