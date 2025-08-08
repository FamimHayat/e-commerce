"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean); // removes empty values

  return (
    <div className="container my-10 px-2 sm:p-0">
      <nav
        aria-label="Breadcrumb"
        className=" mb-4 py-7  sm:py-10 lg:py-15 rounded-2xl"
        style={{ backgroundImage: "url('/banner-slider-2.png')" }}
      >
        <ol className="flex items-center justify-center space-x-2 text-sm px-5 py-3 shadow-2xl rounded-3xl  bg-zinc-100 w-fit ml-5">
          <li>
            <Link
              href="/"
              className="text-xl font-headerFont  text-brand hover:underline"
            >
              Home
            </Link>
          </li>

          {segments.map((segment, index) => {
            const href = "/" + segments.slice(0, index + 1).join("/");
            const isLast = index === segments.length - 1;

            return (
              <li key={href} className="text-xl  flex items-center space-x-2">
                <span className="text-primary/90">/</span>
                {isLast ? (
                  <span className="text-gray-500 capitalize">
                    {decodeURIComponent(segment)}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="text-blue-600 hover:underline capitalize"
                  >
                    {decodeURIComponent(segment)}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
