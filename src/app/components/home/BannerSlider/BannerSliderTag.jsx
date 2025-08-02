import React from 'react'

const BannerSliderTag = () => {
  return (
    <div className="absolute flex h-full w-full flex-col items-center justify-center p-2 font-headerFont lg:mt-15 xl:items-start xl:justify-start">
      <div className="p-3 sm:p-0 xl:p-20">
        <h2 className="max-w-sm text-4xl font-semibold text-primary sm:max-w-xl sm:text-[40px] md:text-[50px] lg:max-w-2xl lg:text-[60px]">
          Don't miss amazing grocery deals
        </h2>
        <p className="mt-5 max-w-2xl text-2xl text-primary opacity-70 md:mt-10 lg:text-3xl">
          Sign up for daily newsletter
        </p>
        <div className="relative mt-7 w-[320px] rounded-2xl bg-gray-100 p-1.5 shadow-md transition-all duration-150 ease-in-out hover:shadow-lg md:mt-10 md:w-[480px] lg:mt-15">
          <input
            type="text"
            placeholder="your email address"
            className="w-full rounded-lg bg-transparent px-1 py-3 text-base text-gray-700 focus:outline-none sm:pl-4 sm:pr-35"
          />
          <button className="absolute right-1 top-1 bottom-1 cursor-pointer rounded-xl bg-brand px-6 font-medium text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default BannerSliderTag