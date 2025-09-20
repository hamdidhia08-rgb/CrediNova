"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo + Description */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 text-2xl font-semibold text-white">
            <Image
              src="/images/logo.svg"
              alt="CrediNova logo"
              width={36}
              height={36}
              priority
            />
            CrediNova
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            CrediNova is your trusted platform to securely purchase premium
            credit card packs. Fast, reliable, and professional.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/" className="hover:text-blue-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/buy" className="hover:text-blue-500 transition">
                Buy Card Packs
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-blue-500 transition">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/support" className="hover:text-blue-500 transition">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="/account" className="hover:text-blue-500 transition">
                My Account
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-blue-500 transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-blue-500 transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe to our newsletter for exclusive offers and updates.
          </p>
          <form className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:from-blue-600 hover:to-blue-400 text-white rounded-md text-sm font-medium shadow-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 px-6 lg:px-20 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500">
          © {new Date().getFullYear()} CrediNova. All rights reserved.
        </p>

        <div className="flex space-x-5">
          <Link href="https://facebook.com" target="_blank" className="hover:text-blue-500 transition">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link href="https://twitter.com" target="_blank" className="hover:text-blue-500 transition">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="hover:text-blue-500 transition">
            <i className="fab fa-linkedin-in"></i>
          </Link>
          <Link href="https://instagram.com" target="_blank" className="hover:text-pink-500 transition">
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
      </div>

      {/* Boules animées */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 w-full h-full overflow-hidden"
      >
        <span className="absolute bg-blue-600 rounded-full opacity-10 blur-3xl w-40 h-40 -top-10 -left-10 animate-pulse-slow"></span>
        <span className="absolute bg-purple-600 rounded-full opacity-10 blur-3xl w-56 h-56 -bottom-20 -right-10 animate-pulse-slow delay-1000"></span>
      </div>
    </footer>
  );
}
