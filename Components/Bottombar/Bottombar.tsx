"use client";

import Link from "next/link";
import { HomeIcon, CubeIcon, CreditCardIcon } from "@heroicons/react/24/outline";

export default function MobileBottomBar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gray-900 border-t border-gray-700 shadow-inner z-50 sm:hidden">
      <div className="flex justify-around items-center h-16 px-4">
        {/* Home */}
        <Link href="/dashboard/home" className="flex flex-col items-center text-gray-400 hover:text-blue-500 transition">
          <HomeIcon className="h-6 w-6" />
          <span className="text-xs font-medium mt-1">Home</span>
        </Link>

        {/* My Pack */}
        <Link href="/dashboard/pack" className="flex flex-col items-center text-gray-400 hover:text-yellow-400 transition">
          <CubeIcon className="h-6 w-6" />
          <span className="text-xs font-medium mt-1">My Pack</span>
        </Link>

        {/* My Cards */}
        <Link href="/dashboard/cards" className="flex flex-col items-center text-gray-400 hover:text-green-400 transition">
          <CreditCardIcon className="h-6 w-6" />
          <span className="text-xs font-medium mt-1">My Cards</span>
        </Link>
      </div>

      {/* Extra Design */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg"></div>
    </nav>
  );
}
