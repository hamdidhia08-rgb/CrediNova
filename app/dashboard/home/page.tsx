"use client";

import Link from "next/link";
import Nav from "@/Components/Navbar/Nav";
import { useState, useEffect } from "react";
import MobileBottomBar from "@/Components/Bottombar/Bottombar";

// Définition du type Pack
interface Pack {
  name: string;
  price: string;
  cards: string;
  description: string;
  features: string[];
  cta: string;
  slug: string;
  silver?: boolean;
  platinum?: boolean;
  gold?: boolean;
}

// Composant pour afficher le pack
function DashboardPack({ pack }: { pack: Pack }) {
  if (!pack) return null; // protection si pack est undefined

  return (
    <section className="bg-gray-950 text-white px-4 py-10 flex justify-center">
      <div
        className={`w-full max-w-md flex flex-col rounded-2xl shadow-xl p-6 sm:p-8 transition-transform duration-300
          ${
            pack.gold
              ? "border-4 border-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.6)] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
              : pack.silver
              ? "border-4 border-gray-400 shadow-[0_0_20px_rgba(156,163,175,0.5)] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
              : pack.platinum
              ? "border-4 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.7)] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
              : "border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800"
          }`}
      >
        {/* Label */}
        {pack.gold && (
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-950 text-xs font-bold px-4 py-1 rounded-full shadow-lg">
            👑 King’s Choice
          </span>
        )}
        {pack.silver && (
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-300 text-gray-900 text-xs font-bold px-4 py-1 rounded-full shadow-md">
            🪙 Silver
          </span>
        )}
        {pack.platinum && (
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
            💎 Most Popular
          </span>
        )}

        {/* Title */}
        <h3
          className={`text-2xl font-bold mb-2 text-center ${
            pack.gold ? "text-yellow-400" : pack.silver ? "text-gray-300" : "text-blue-400"
          }`}
        >
          {pack.name}
        </h3>

        {/* Cards */}
        <p className="text-lg mb-2 text-center text-gray-300">{pack.cards}</p>

        {/* Description */}
        <p className="mb-4 text-center text-gray-400">{pack.description}</p>

        {/* Price */}
        <div
          className={`text-3xl font-extrabold mb-4 text-center ${
            pack.gold ? "text-yellow-400" : pack.silver ? "text-gray-200" : "text-blue-400"
          }`}
        >
          {pack.price} <span className="text-base font-medium">/pack</span>
        </div>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {pack.features.map((feature, i) => (
            <li key={i} className="flex items-center space-x-2 text-gray-300 text-sm">
              <span
                className={`w-2 h-2 rounded-full ${
                  pack.gold ? "bg-yellow-400" : pack.silver ? "bg-gray-400" : "bg-blue-400"
                }`}
              ></span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href={`/buy/${pack.slug}`}
          className={`w-full py-3 text-center rounded-md font-medium shadow-md transition ${
            pack.gold
              ? "bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 text-gray-900 font-bold"
              : pack.silver
              ? "bg-gradient-to-r from-gray-400 via-gray-300 to-gray-200 text-gray-900 font-bold"
              : "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white font-bold"
          }`}
        >
          {pack.cta}
        </Link>
      </div>
    </section>
  );
}

// Page Dashboard
export default function DashboardPage() {
  const [userPack, setUserPack] = useState<Pack | null>(null);

  // Simuler récupération du pack de l'utilisateur depuis un API
  useEffect(() => {
    const packFromAPI: Pack = {
      name: "Gold Pack",
      price: "$999",
      cards: "300K Credit Cards",
      description: "Exclusive premium pack with maximum reliability and golden support.",
      features: [
        "300,000 verified cards",
        "VIP secure delivery",
        "Dedicated account manager",
        "Extended golden protection",
        "Exclusive priority updates",
      ],
      cta: "Get Gold",
      slug: "gold-pack",
      gold: true,
    };

    // Petite simulation delay pour API
    setTimeout(() => setUserPack(packFromAPI), 500);
  }, []);

  return (
    <>
      <div className="pb-6">
        <Nav />
      </div>

      <main className="bg-gray-950 min-h-screen flex flex-col items-center px-4 py-10">
        {userPack ? (
          <DashboardPack pack={userPack} />
        ) : (
          <p className="text-gray-400 text-center mt-10">Loading your pack...</p>
        )}
      </main>

     <MobileBottomBar/>
    </>
  );
}
