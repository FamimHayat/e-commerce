"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userData.username,
          password: userData.password,
        }),
      });

      const data = await res.json();

      console.log("Login response:", data);
      toast.success("Login successful");

      setTimeout(() => {
        router.push("/");
      }, 1500);

      if (res) {
        document.cookie = `accessToken=${data.accessToken}; path=/;`;
      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="container flex justify-center items-center py-10 px-2 h-dvh">
      <div className="max-w-lg w-full">
        <div className="bg-brand rounded-lg shadow-xl overflow-hidden hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]">
          <div className="p-8">
            <Image
              src={"/footer-brand-logo.svg"}
              width={50}
              height={50}
              className="w-30 h-15 p-1 rounded-xl mx-auto bg-white"
              alt="brand-logo"
            />
            <p className="mt-4 text-center text-white">
              <span className="text-3xl underline">Sign In</span>
              <br /> to continue
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm">
                <div>
                  <input
                    onChange={(e) =>
                      setUserData({ ...userData, username: e.target.value })
                    }
                    placeholder="User Name"
                    className="appearance-none relative block w-full px-3 py-1 text-md sm:text-xl border border-gray-700 bg-white text-black font-semibold rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    autoComplete="username"
                    type="text"
                    name="username"
                    id="username"
                  />
                </div>

                <div className="mt-4">
                  <input
                    onChange={(e) =>
                      setUserData({ ...userData, password: e.target.value })
                    }
                    placeholder="Password"
                    className="appearance-none relative block w-full px-3 py-1 text-md sm:text-xl border border-gray-700 bg-white text-black font-semibold rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    autoComplete="current-password"
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
              </div>

              <div className="flex items-center gap-5 justify-between mt-4">
                <div className="flex items-center">
                  <input
                    className="h-4 w-4 text-indigo-500 focus:ring-indigo-400 border-gray-600 rounded"
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                  />
                  <label
                    className="ml-2 block text-sm text-white"
                    htmlFor="remember-me"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link
                    className="font-medium text-black duration-150 hover:text-indigo-50"
                    href="/forgot-password"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  className="group relative w-full flex justify-center py-1 text-2xl px-4 border border-transparent font-headerFont cursor-pointer duration-150 text-black font-medium rounded-md hover:text-white bg-white hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>

          <div className="px-8 py-4 bg-gray-700 text-center">
            <span className="text-gray-400">Don&apos;t have an account?</span>{" "}
            <Link
              className="font-medium text-white duration-150 hover:text-brand"
              href="/signUp"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Page;
