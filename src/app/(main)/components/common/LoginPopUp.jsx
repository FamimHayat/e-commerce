"use client";
import React, { useEffect, useState } from "react";

const LoginPopUp = ({ token }) => {
  const [mounted, setMounted] = useState(false);
  const [loginPopUp, setLoginPopUp] = useState(false);

  useEffect(() => {
    setMounted(true);
    setLoginPopUp(!token);
  }, [token]);

  if (!mounted) return null;

  return (
    <div className="absolute z-[500]">
      {loginPopUp && (
        <div className="">
          <div className="w-150 h-150 mx-auto text-center bg-red-200">
            <p className="p-5 text-4xl text-white text-shadow-lg shadow-black">
              you are not logged in
            </p>
            <button
              onClick={() => setLoginPopUp(false)}
              className="bg-white p-5 cursor-pointer text-6xl ml-5 duration-150 hover:bg-amber-200"
            >
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPopUp;
