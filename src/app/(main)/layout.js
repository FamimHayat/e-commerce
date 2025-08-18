// app/layout.js

import { cookies } from "next/headers";
import "../globals.css";
import { Noto_Sans, Open_Sans } from "next/font/google";
import Navbar from "./components/common/NavBar";
import FooterBanner from "./components/home/FooterBanner/FooterBanner";
import ServiceTags from "./components/home/Services/ServiceTags";
import Footer from "./components/home/Footer/Footer";
import LoginPopUp from "./components/common/LoginPopUp";

export const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
});
export const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export default async function RootLayout({ children }) {
  const cookieStore = cookies();
  const token = cookieStore.get("accessToken")?.value;

  let userData = null;

  if (token) {
    try {
      const res = await fetch("https://dummyjson.com/users/1"); // server fetch
      userData = await res.json();
    } catch {
      userData = null;
    }
  }

  return (
    <html lang="en" className={`${notoSans.variable} ${openSans.variable}`}>
      <body className="antialiased">
        <Navbar data={userData} token={token} />
        <LoginPopUp token={token} />
        {children}
        <FooterBanner />
        <ServiceTags />
        <Footer />
      </body>
    </html>
  );
}
