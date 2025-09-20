"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // <-- important
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // <-- récupère le chemin actuel

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Buy Card Packs", href: "/buy" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "FAQ", href: "/faq" },
    { name: "Support", href: "/support" },
  ];

  return (
    <header
      className={`${inter.variable} font-sans fixed w-full bg-gray-900 text-white z-50 shadow-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link href="/" className="flex items-center gap-2 text-2xl font-semibold">
          <Image
            src="/images/logo.svg"
            alt="CrediNova logo"
            width={32}
            height={32}
            priority
          />
          CrediNova
        </Link>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href; // <-- lien actif selon route
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

        <Link
          href="/login"
          className="hidden md:inline-block px-4 py-2 border border-gray-300 rounded-full text-gray-200 hover:bg-blue-500 hover:border-blue-500 transition-colors duration-200 font-medium"
        >
          My Account
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-between w-6 h-5 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <span className={`block h-0.5 w-full bg-white transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-full bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-full bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-gray-900 text-white w-full border-t border-gray-700">
          <ul className="flex flex-col py-4 px-6 space-y-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-2 px-4 rounded-md font-medium transition-colors duration-200 text-gray-200 ${
                      isActive ? "bg-blue-600 text-white" : "hover:text-blue-500"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="/login"
                className="block py-2 px-4 mt-2 border border-gray-300 rounded-full text-center text-gray-200 hover:bg-blue-500 hover:border-blue-500 transition-colors duration-200 font-medium"
              >
                My Account
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
