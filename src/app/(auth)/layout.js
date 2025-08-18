// auth/layout.js

import "../globals.css";
import { Noto_Sans, Open_Sans } from "next/font/google";

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
  return (
    <html lang="en" className={`${notoSans.variable} ${openSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
