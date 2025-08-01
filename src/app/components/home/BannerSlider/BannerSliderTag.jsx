import React from 'react'

const BannerSliderTag = () => {
  return (
    <div className="absolute h-full w-full flex flex-col lg:mt-15 font-headerFont items-center xl:items-start justify-center xl:justify-start ">
      <div className="p-3 sm:p-0 xl:p-20">
        <h2 className=" text-4xl sm:text-[40px] md:text-[50px]  lg:text-[60px] text-primary max-w-sm sm:max-w-xl lg:max-w-2xl  font-semibold">
          Don't miss amazing grocery deals
        </h2>
        <p className="text-2xl lg:text-3xl text-primary opacity-70 mt-5 md:mt-10 max-w-2xl">
          Sign up for daily newsletter
        </p>
        <>
          <div className="relative mt-7 md:mt-10 lg:mt-15 w-[280px] md:w-[480px] bg-gray-100 rounded-2xl shadow-md p-1.5 transition-all duration-150 ease-in-out hover:shadow-lg">
            <input
              type="text"
              className="w-full pl-8 pr-24 py-3 text-base text-gray-700 bg-transparent rounded-lg focus:outline-none"
              placeholder="your email address"
            />
            <button className="absolute right-1 top-1 bottom-1 px-6 bg-brand text-white font-medium cursor-pointer rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600">
              Subscribe
            </button>
          </div>
        </>
      </div>
    </div>
  );
}

export default BannerSliderTag