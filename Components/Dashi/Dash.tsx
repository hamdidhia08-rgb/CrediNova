"use client";

import { CreditCardIcon, CurrencyDollarIcon, CubeIcon } from "@heroicons/react/24/outline";

export default function Dashi() {
  return (
   <main className="bg-gray-950 min-h-screen flex flex-col items-center px-4 py-10 pt-24">
      {/* Titre */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 text-center">
            Welcome to your Dashboard
        </h1>



      {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Solde total */}
        <div className="relative bg-gray-800 p-6 rounded-3xl shadow-2xl border border-gray-700 overflow-hidden">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 opacity-10 blur-2xl -z-10"></div>

          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-green-600/20 text-green-400">
              <CurrencyDollarIcon className="h-8 w-8" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total Balance</p>
              <p className="text-2xl font-bold text-white">$5000,000</p>
            </div>
          </div>
        </div>

        {/* Nombre de cartes */}
        <div className="relative bg-gray-800 p-6 rounded-3xl shadow-2xl border border-gray-700 overflow-hidden">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-10 blur-2xl -z-10"></div>

          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-blue-600/20 text-blue-400">
              <CreditCardIcon className="h-8 w-8" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Credit Cards</p>
              <p className="text-2xl font-bold text-white">20.000</p>
            </div>
          </div>
        </div>

        {/* Packs achetés */}
        <div className="relative bg-gray-800 p-6 rounded-3xl shadow-2xl border border-gray-700 overflow-hidden">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 opacity-10 blur-2xl -z-10"></div>

          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-yellow-600/20 text-yellow-400">
              <CubeIcon className="h-8 w-8" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Packs Purchased</p>
              <p className="text-2xl font-bold text-white">2</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
