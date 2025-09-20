"use client";

import Link from "next/link";

type PackKey = "silver-pack" | "platinum-pack" | "gold-pack";

interface Pack {
  name: string;
  price: string;
  cards: string;
  description: string;
  features: string[];
  cta: string;
  slug: PackKey;
  silver?: boolean;
  platinum?: boolean;
  gold?: boolean;
}

const plans: Pack[] = [
  {
    name: "Silver Pack",
    price: "$250",
    cards: "30K Credit Cards",
    description: "Perfect for individuals who want to start small and test the waters.",
    features: [
      "30,000 verified cards",
      "Instant secure delivery",
      "Basic customer support",
    ],
    cta: "Get Silver",
    slug: "silver-pack",
    silver: true,
  },
  {
    name: "Platinum Pack",
    price: "$499",
    cards: "120K Credit Cards",
    description: "Best choice for professionals who need reliable, verified packs.",
    features: [
      "120,000 verified cards",
      "Priority secure delivery",
      "24/7 customer support",
      "Daily updates included",
    ],
    cta: "Get Platinum",
    slug: "platinum-pack",
    platinum: true,
  },
  {
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
  },
];

export default function Pricing() {
  return (
    <section className="relative bg-gray-950 text-white py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Choose Your <span className="text-blue-500">Pack</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Flexible pricing designed for everyone — whether you’re just getting
          started or need enterprise-grade packs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
       {
  plans.map((plan) => (
    <div
      key={plan.name}
      className={`relative flex flex-col rounded-2xl shadow-xl p-8 transition-transform duration-300 hover:scale-105
        ${
          plan.gold
            ? "border-4 border-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.6)] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            : plan.silver
            ? "border-4 border-gray-400 shadow-[0_0_20px_rgba(156,163,175,0.5)] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            : plan.platinum
            ? "border-4 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.7)] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 scale-105"
            : "border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800"
        }`}
    >
      {/* Labels */}
      {plan.gold && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-950 text-xs font-bold px-4 py-1 rounded-full shadow-lg">
          👑 King’s Choice
        </span>
      )}
      {plan.silver && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-300 text-gray-900 text-xs font-bold px-4 py-1 rounded-full shadow-md">
          🪙 Silver
        </span>
      )}
      {plan.platinum && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
          💎 Most Popular
        </span>
      )}

      {/* Title */}
      <h3
        className={`text-2xl font-bold mb-4 text-center ${
          plan.gold
            ? "text-yellow-400"
            : plan.silver
            ? "text-gray-300"
            : plan.platinum
            ? "text-blue-400"
            : ""
        }`}
      >
        {plan.name}
      </h3>

      {/* Cards */}
      <p className="text-lg mb-2 text-center text-gray-300">{plan.cards}</p>

      {/* Description */}
      <p className="mb-6 text-center text-gray-400">{plan.description}</p>

      {/* Price */}
      <div
        className={`text-4xl font-extrabold mb-8 text-center ${
          plan.gold
            ? "text-yellow-400"
            : plan.platinum
            ? "text-blue-400"
            : "text-gray-200"
        }`}
      >
        {plan.price} <span className="text-lg font-medium">/pack</span>
      </div>

      {/* Features */}
      <ul className="space-y-4 text-left mb-8">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center space-x-3">
            <span
              className={`w-2 h-2 rounded-full ${
                plan.gold
                  ? "bg-yellow-400"
                  : plan.silver
                  ? "bg-gray-400"
                  : plan.platinum
                  ? "bg-blue-400"
                  : "bg-gray-400"
              }`}
            ></span>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link
        href={`/buy/${plan.slug}`}
        className={`mt-auto inline-block w-full py-3 text-center rounded-md font-medium shadow-md transition ${
          plan.gold
            ? "bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 hover:from-yellow-400 hover:to-yellow-200 text-gray-900 font-bold"
            : plan.silver
            ? "bg-gradient-to-r from-gray-400 via-gray-300 to-gray-200 hover:from-gray-300 hover:to-gray-100 text-gray-900 font-bold"
            : plan.platinum
            ? "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white font-bold"
            : "bg-gray-800 hover:bg-gray-700 text-gray-200"
        }`}
      >
        {plan.cta}
      </Link>
    </div>
  ))
}

      </div>
    </section>
  );
}
