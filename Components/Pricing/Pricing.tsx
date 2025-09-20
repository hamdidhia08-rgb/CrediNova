"use client";

import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "Starter Pack",
      price: "$250",
      cards: "30K Credit Cards",
      description:
        "Perfect for individuals who want to start small and test the waters.",
      features: [
        "30,000 verified cards",
        "Instant secure delivery",
        "Basic customer support",
      ],
      cta: "Get Starter",
      highlight: false,
    },
    {
      name: "Pro Pack",
      price: "$499",
      cards: "120K Credit Cards",
      description:
        "Best choice for professionals who need reliable, verified packs.",
      features: [
        "120,000 verified cards",
        "Priority secure delivery",
        "24/7 customer support",
        "Daily updates included",
      ],
      cta: "Get Pro",
      highlight: true,
    },
    {
      name: "Enterprise Pack",
      price: "$999",
      cards: "300K Credit Cards",
      description:
        "For agencies or large-scale needs, with premium reliability.",
      features: [
        "300,000 verified cards",
        "Premium secure delivery",
        "Dedicated account manager",
        "Extended data protection",
      ],
      cta: "Get Enterprise",
      highlight: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="relative bg-gray-950 text-white py-24 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Choose Your <span className="text-blue-500">Pack</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Flexible pricing designed for everyone — whether you’re just getting
          started or need enterprise-grade packs.
        </p>
      </div>

      {/* Cartes Pricing */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-2xl shadow-lg border ${
              plan.highlight
                ? "border-blue-500 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 scale-105"
                : "border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800"
            } p-8 transition-transform duration-300 hover:scale-105`}
          >
            {plan.highlight && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-xs font-semibold px-4 py-1 rounded-full shadow-md">
                Most Popular
              </span>
            )}

            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <p className="text-blue-400 text-lg mb-2">{plan.cards}</p>
            <p className="text-gray-400 mb-6">{plan.description}</p>

            <div className="text-4xl font-extrabold mb-8">
              {plan.price} <span className="text-lg font-medium">/pack</span>
            </div>

            <ul className="space-y-4 text-left mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="#"
              className={`mt-auto inline-block w-full py-3 text-center rounded-md font-medium shadow-md transition ${
                plan.highlight
                  ? "bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:from-blue-600 hover:to-blue-400 text-white"
                  : "bg-gray-800 hover:bg-gray-700 text-gray-200"
              }`}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
