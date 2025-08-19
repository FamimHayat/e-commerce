"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const LoginPopUp = ({ token, className }) => {
  const [mounted, setMounted] = useState(false);
  const [loginPopUp, setLoginPopUp] = useState(false);

  useEffect(() => {
    setMounted(true);
    setLoginPopUp(!token);
  }, [token]);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-opacity duration-300 ${
        loginPopUp
          ? "z-[500] bg-black/70 opacity-100 cursor-pointer"
          : "z-[-1] opacity-0 pointer-events-none"
      }`}
      onClick={() => setLoginPopUp(false)}
    >
      <div
        className={`relative w-[400px] max-w-[90%] p-6 mx-auto text-center bg-brand rounded-2xl cursor-default shadow-xl ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="p-3 py-15 text-2xl md:text-3xl text-white font-semibold drop-shadow-lg">
          log in to your account to shop
        </p>
        <button
          onClick={() => setLoginPopUp(false)}
          className="absolute top-3 right-3 bg-white rounded-full w-12 h-12 flex items-center justify-center cursor-pointer text-2xl hover:scale-110 hover:text-brand font-bold text-black shadow hover:bg-amber-200 duration-150"
        >
          ×
        </button>
        <Link
          href="/signIn"
          onClick={() => setLoginPopUp(false)}
          className="text-2xl text-shadow-lg rounded-xl duration-150 product-shadow-hover bg-amber-400 px-3 py-2"
        >
          sign In
        </Link>
      </div>
    </div>
  );
};

export default LoginPopUp;
