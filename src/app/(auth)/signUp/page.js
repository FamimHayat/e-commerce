"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";

const Page = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await res.json();
      console.log("User created:", data);

      if (res.ok) {
        toast.success("registration successful");
      } else {
        toast.error("❌ Failed to create user");
      }
    } catch (err) {
      toast.error("⚠️ Something went wrong: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container flex justify-center items-center py-10 px-2 h-dvh">
      <ToastContainer position="top-right" />;
      <div className="max-w-lg w-full">
        <div className="bg-brand rounded-lg shadow-xl overflow-hidden hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]">
          <div className="p-8">
            <Image
              src="/footer-brand-logo.svg"
              width={50}
              height={50}
              className="w-30 h-15 p-1 rounded-xl mx-auto bg-white"
              alt="brand-logo"
            />
            <p className="mt-4 text-center text-white">
              <span className="text-3xl underline">Sign Up</span>
              <br /> to continue
            </p>

            <form
              method="POST"
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
            >
              <div className="rounded-md shadow-sm">
                <input
                  onChange={(e) =>
                    setUserData({ ...userData, username: e.target.value })
                  }
                  value={userData.username}
                  placeholder="User Name"
                  className="block w-full px-3 py-1 text-md sm:text-xl border border-gray-700 bg-white text-black font-semibold rounded-md focus:outline-none"
                  required
                  type="text"
                  name="username"
                  id="username"
                />

                <div className="mt-4">
                  <input
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                    value={userData.email}
                    placeholder="Email address"
                    className="block w-full px-3 py-1 text-md sm:text-xl border border-gray-700 bg-white text-black font-semibold rounded-md focus:outline-none"
                    required
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>

                <div className="mt-4">
                  <input
                    onChange={(e) =>
                      setUserData({ ...userData, password: e.target.value })
                    }
                    value={userData.password}
                    placeholder="Password"
                    className="block w-full px-3 py-1 text-md sm:text-xl border border-gray-700 bg-white text-black font-semibold rounded-md focus:outline-none"
                    required
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
              </div>

              <button
                className="w-full flex justify-center py-1 text-2xl px-4 font-headerFont cursor-pointer duration-150 text-black font-medium rounded-md hover:text-white bg-white hover:bg-amber-400"
                type="submit"
                disabled={loading}
              >
                {loading ? "Signing up..." : "Sign Up"}
              </button>
            </form>
          </div>

          <div className="px-8 py-4 bg-gray-700 text-center">
            <span className="text-gray-400">Already have an account?</span>{" "}
            <Link
              className="font-medium text-white duration-150 hover:text-brand"
              href="/signIn"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
