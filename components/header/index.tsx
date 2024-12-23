"use client";
import { NAV_BAR } from "@/constants";
import logo from "../../public/images/logo-restonest.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="p-5 sm:p-7 md:px-20 bg-black">
      <div className="flex justify-between items-center">
        <div className="w-[100px]">
          <Image src={logo} alt="Logo" height={314.35} width={327} />
        </div>
        {/* Desktop Navbar */}
        <nav className="hidden lg:flex gap-14 items-center font-bold">
          {NAV_BAR.map((nav) => (
            <Link
              href={nav.href}
              key={nav.href}
              className={`text-${
                pathname === nav.href ? "[#ff9900]" : "white"
              }`}
            >
              {nav.label}
            </Link>
          ))}
          <button className="bg-[#ff9900] py-2 px-14 rounded-2xl">Login</button>
        </nav>
        {/* Mobile Navbar */}
        <div className="lg:hidden flex items-center">
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black text-white p-5">
          <nav className="flex flex-col gap-5 font-bold">
            {NAV_BAR.map((nav) => (
              <Link
                href={nav.href}
                key={nav.href}
                className={`text-${
                  pathname === nav.href ? "[#ff9900]" : "white"
                }`}
              >
                {nav.label}
              </Link>
            ))}
            <button className="bg-[#ff9900] py-2 px-14 rounded-2xl mt-4">
              Login
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
