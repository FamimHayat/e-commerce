import Link from 'next/link'
import React from 'react'
import CatagorySlider from './CatagorySlider'
import Header from '../../common/Header'
import CatagoriesShopNow from './CatagoriesShopNow'

const Catagories = () => {
  return (
    <div className="overflow-hidden mt-10 md:my-25">
      <div className="relative container flex flex-col lg:flex-row  items-center   gap-10 md:gap-15">
        <Header headerText={"Featured Categories"} />
        <nav>
          <ul className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-5 text-lg font-textFont font-semibold text-primary ">
            <li>
              <Link href="/" className=" duration-200 hover:text-brand ">
                Cake & Milk
              </Link>
            </li>
            <li>
              <Link href="/" className=" duration-200 hover:text-brand ">
                Coffee & Teas
              </Link>
            </li>
            <li>
              <Link href="/" className=" duration-200 hover:text-brand ">
                Pet Foods
              </Link>
            </li>
            <li>
              <Link href="/" className=" duration-200 hover:text-brand ">
                Vegetables
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <CatagorySlider />
      </div>
      <div>
        <CatagoriesShopNow />
      </div>
    </div>
  );
}

export default Catagories