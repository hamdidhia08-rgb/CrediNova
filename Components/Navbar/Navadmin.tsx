"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; 
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export default function Navadmin() {
  const pathname = usePathname(); 

  const navLinks = [
    { name: "Home", href: "/dashboard/home" },
    { name: "My Pack", href: "/dashboard/pack" },
    { name: "My Cards", href: "/dashboard/cards" },
  ];

  return (
    <header
      className={`${inter.variable} font-sans fixed w-full bg-gray-900 text-white z-50 shadow-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Logo */}
        <Link href="/dashboard/home" className="flex items-center gap-2 text-2xl font-semibold mx-auto md:mx-0">
          <Image
            src="/images/logo.svg"
            alt="CrediNova logo"
            width={32}
            height={32}
            priority
          />
          CrediNova
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href; 
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-md transition-colors duration-200 font-medium text-gray-200 ${
                  isActive ? "bg-blue-600 text-white" : "hover:text-blue-500"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

      {/* Logout button desktop */}
<Link
  href="/logout"
  className="hidden md:inline-block px-4 py-2 border border-gray-300 rounded-md text-gray-200 hover:bg-red-500 hover:border-red-500 transition-colors duration-200 font-medium"
>
  Logout
</Link>

      </div>

      {/* Mobile : pas de liens, juste le logo centré */}
      {/* Le menu burger est supprimé car inutile */}
    </header>
  );
}
