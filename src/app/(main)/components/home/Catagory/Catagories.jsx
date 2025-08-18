import Link from 'next/link'
import React from 'react'
import CatagorySlider from './CatagorySlider'
import Header from '../../common/Header'
import CatagoriesShopNow from './CatagoriesShopNow'

const Catagories = () => {
  return (
    <div className="mt-10 overflow-hidden md:my-25">
      <div className="container relative flex flex-col items-center gap-10 lg:flex-row md:gap-15">
        <Header headerText={"Featured Categories"} />
        <nav>
          <ul className="grid grid-cols-2 place-items-center gap-5 text-lg font-semibold text-primary font-textFont md:grid-cols-4">
            <li>
              <Link href="/" className="duration-200 hover:text-brand">
                Cake & Milk
              </Link>
            </li>
            <li>
              <Link href="/" className="duration-200 hover:text-brand">
                Coffee & Teas
              </Link>
            </li>
            <li>
              <Link href="/" className="duration-200 hover:text-brand">
                Pet Foods
              </Link>
            </li>
            <li>
              <Link href="/" className="duration-200 hover:text-brand">
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