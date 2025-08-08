import React from "react";

import { GiSettingsKnobs } from "react-icons/gi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TbShoppingCartCopy } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Link from "next/link"

const AccountMenu = () => {
  return (
    <section className="py-5 px-2 mb-20">
      <div className="container">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="col-span-1">
            <ul className="flex flex-col gap-5">
              <li>
                <button className="flex gap-2 items-center py-3 px-2  text-lg text-primary font-textFont  border border-primary/30 shadow-sm rounded-xl duration-150  w-full hover:bg-zinc-100 hover:px-5 lg:w-[250px] hover:w-[270px] hover:text-brand focus:bg-brand focus:text-white lg:focus:w-[270px] cursor-pointer">
                  <GiSettingsKnobs /> Dashboard
                </button>
              </li>
              <li>
                <button className="flex gap-2 items-center py-3 px-2  text-lg text-primary font-textFont  border border-primary/30 shadow-sm rounded-xl duration-150  w-full hover:bg-zinc-100 hover:px-5 lg:w-[250px] hover:w-[270px] hover:text-brand focus:bg-brand focus:text-white lg:focus:w-[270px] cursor-pointer">
                  <HiOutlineShoppingBag /> Orders
                </button>
              </li>
              <li>
                <button className="flex gap-2 items-center py-3 px-2  text-lg text-primary font-textFont  border border-primary/30 shadow-sm rounded-xl duration-150  w-full hover:bg-zinc-100 hover:px-5 lg:w-[250px] hover:w-[270px] hover:text-brand focus:bg-brand focus:text-white lg:focus:w-[270px] cursor-pointer">
                  <TbShoppingCartCopy /> Track Your Order
                </button>
              </li>
              <li>
                <button className="flex gap-2 items-center py-3 px-2  text-lg text-primary font-textFont  border border-primary/30 shadow-sm rounded-xl duration-150  w-full hover:bg-zinc-100 hover:px-5 lg:w-[250px] hover:w-[270px] hover:text-brand focus:bg-brand focus:text-white lg:focus:w-[270px] cursor-pointer">
                  <IoLocationOutline /> My Address
                </button>
              </li>
              <li>
                <button className="flex gap-2 items-center py-3 px-2  text-lg text-primary font-textFont  border border-primary/30 shadow-sm rounded-xl duration-150  w-full hover:bg-zinc-100 hover:px-5 lg:w-[250px] hover:w-[270px] hover:text-brand focus:bg-brand focus:text-white lg:focus:w-[270px] cursor-pointer">
                  <FiUser /> Account details
                </button>
              </li>
              <li>
                <Link href="/signIn">
                  <button className="flex gap-2 items-center py-3 px-2  text-lg text-primary font-textFont  border border-primary/30 shadow-sm rounded-xl duration-150  w-full hover:bg-zinc-100 hover:px-5 lg:w-[250px] hover:w-[270px] hover:text-brand focus:bg-brand focus:text-white lg:focus:w-[270px] cursor-pointer">
                    <RiLogoutBoxRLine /> Logout
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-2 md:col-start-2">
            <div className="flex flex-col gap-5">
              <h2 className="text-4xl text-primary font-textFont font-semibold mt-6 mb-3 lg:mt-20 lg:mb-5">
                Hello Rosie!
              </h2>
              <p className="text-lg text-primary/70  font-textFont  lg:max-w-3xl ">
                From your account dashboard. you can easily check & view your
                recent orders, manage your shipping and billing addresses and
                edit your password and account details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountMenu;
