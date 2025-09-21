"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { HomeIcon, CubeIcon, CreditCardIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

export default function MobileBottomBar() {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname);

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  const getLinkClasses = (path: string, color: string) =>
    `flex flex-col items-center transition z-10 ${
      active === path
        ? `text-white relative`
        : `text-gray-400 hover:text-${color}-400`
    }`;

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gray-900 border-t border-gray-700 shadow-inner z-50 sm:hidden">
      <div className="relative flex justify-around items-center h-16 px-4">
        {/* Ligne active décorative */}
        <div className="absolute top-0 left-0 right-0 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg"></div>

        {/* Home */}
        <Link href="/dashboard/home" className={getLinkClasses("/dashboard/home", "blue")}>
          <HomeIcon className="h-6 w-6" />
          <span className="text-xs font-medium mt-1">Home</span>
        </Link>

        {/* My Pack */}
        <Link href="/dashboard/pack" className={getLinkClasses("/dashboard/pack", "yellow")}>
          <CubeIcon className="h-6 w-6" />
          <span className="text-xs font-medium mt-1">My Pack</span>
        </Link>

        {/* My Cards */}
        <Link href="/dashboard/cards" className={getLinkClasses("/dashboard/cards", "green")}>
          <CreditCardIcon className="h-6 w-6" />
          <span className="text-xs font-medium mt-1">My Cards</span>
        </Link>

        {/* Logout */}
        <Link href="/logout" className={getLinkClasses("/logout", "red")}>
          <ArrowRightOnRectangleIcon className="h-6 w-6" />
          <span className="text-xs font-medium mt-1">Logout</span>
        </Link>
      </div>
    </nav>
  );
}
