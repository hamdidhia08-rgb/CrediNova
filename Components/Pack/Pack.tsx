"use client";

import Link from "next/link";

const packs = [
  {
    name: "Silver Pack",
    price: "$250",
    status: "In Progress",
    statusColor: "text-blue-400 bg-blue-900/30",
    slug: "silver-pack",
    border: "border-gray-400 shadow-[0_0_20px_rgba(156,163,175,0.5)]",
    badge: "🪙 Silver",
    badgeStyle: "bg-gray-300 text-gray-900",
    buttonStyle:
      "bg-gradient-to-r from-gray-400 via-gray-300 to-gray-200 hover:from-gray-300 hover:to-gray-100 text-gray-900 font-bold",
  },
  {
    name: "Platinum Pack",
    price: "$499",
    status: "Closed",
    statusColor: "text-red-400 bg-red-900/30",
    slug: "platinum-pack",
    border: "border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.7)]",
    badge: "💎 Most Popular",
    badgeStyle: "bg-blue-600 text-white",
    buttonStyle:
      "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white font-bold",
  },
  {
    name: "Gold Pack",
    price: "$999",
    status: "Success",
    statusColor: "text-green-400 bg-green-900/30",
    slug: "gold-pack",
    border: "border-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.6)]",
    badge: "👑 King’s Choice",
    badgeStyle: "bg-yellow-400 text-yellow-950",
    buttonStyle:
      "bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 hover:from-yellow-400 hover:to-yellow-200 text-gray-900 font-bold",
  },
];

export default function Packs() {
  return (
    <section className="relative bg-gray-950 text-white py-20 px-6 lg:px-20 min-h-screen">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Available <span className="text-blue-500">Packs</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Choose the right pack for you — track status in real time.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {packs.map((pack) => (
          <div
            key={pack.slug}
            className={`relative flex flex-col items-center justify-between rounded-2xl border-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 transition-transform hover:scale-105 ${pack.border}`}
          >
            {/* Badge */}
            <span
              className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold rounded-full shadow-lg ${pack.badgeStyle}`}
            >
              {pack.badge}
            </span>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-center">
              {pack.name}
            </h3>

            {/* Price */}
            <p className="text-3xl font-extrabold text-gray-200 mb-4">
              {pack.price}
            </p>

            {/* Status */}
            <span
              className={`px-4 py-1 text-sm font-semibold rounded-full mb-6 ${pack.statusColor}`}
            >
              {pack.status}
            </span>

            {/* Button */}
            <Link
              href={`/buy/${pack.slug}`}
              className={`w-full sm:w-auto px-6 py-3 text-center rounded-lg shadow-md transition ${pack.buttonStyle}`}
            >
              Get {pack.name}
            </Link>
          </div>
        ))}
      </div><br />
    </section>
  );
}
