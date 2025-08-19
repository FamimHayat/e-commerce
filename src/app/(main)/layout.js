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
  const cookieStore = cookies(); // no need for await here
  const token = cookieStore.get("accessToken")?.value;

  let userData = null;

  if (token) {
    try {
      const res = await fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });

      if (res.ok) {
        userData = await res.json();
        console.log("Fetched user:", userData);
      } else {
        console.error("Failed to fetch user:", res.status);
      }
    } catch (err) {
      console.error("Error fetching user:", err);
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
