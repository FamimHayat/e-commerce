"use client";
import { usePathname } from "next/navigation";
import NavBar from "./components/common/NavBar";
import Footer from "./components/home/Footer/Footer";
import FooterBanner from "./components/home/FooterBanner/FooterBanner";
import ServiceTags from "./components/home/Services/ServiceTags";

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  const hideNavFooter = pathname === "/signIn" || pathname === "/signUp";

  return (
    <>
      {!hideNavFooter && <NavBar />}
      {children}
      {!hideNavFooter && (
        <>
          <FooterBanner />
          <ServiceTags />
          <Footer />
        </>
      )}
    </>
  );
}
