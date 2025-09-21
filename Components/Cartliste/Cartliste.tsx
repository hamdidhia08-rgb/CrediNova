"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Fake credit cards data
const allCards = [
  {
    id: 1,
    image: "/images/carte_liste/card1.png",
    number: "**** **** **** 1234",
    csv: "847",
    tsaref: "TX-99872",
    expiry: "12/27",
  },
  {
    id: 2,
    image: "/images/carte_liste/card2.png",
    number: "**** **** **** 5678",
    csv: "392",
    tsaref: "TX-77412",
    expiry: "05/28",
  },
  {
    id: 3,
    image: "/images/carte_liste/card3.png",
    number: "**** **** **** 2468",
    csv: "145",
    tsaref: "TX-44291",
    expiry: "07/26",
  },
  {
    id: 4,
    image: "/images/carte_liste/card4.png",
    number: "**** **** **** 9876",
    csv: "659",
    tsaref: "TX-11256",
    expiry: "11/29",
  },
  {
    id: 5,
    image: "/images/carte_liste/card5.webp",
    number: "**** **** **** 6543",
    csv: "874",
    tsaref: "TX-88322",
    expiry: "04/26",
  },
  {
    id: 6,
    image: "/images/carte_liste/card6.webp",
    number: "**** **** **** 7788",
    csv: "237",
    tsaref: "TX-55873",
    expiry: "01/30",
  },
];

const ITEMS_PER_PAGE = 3;

export default function CreditCardsList() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(allCards.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginatedCards = allCards.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="relative bg-gray-950 text-white py-20 px-6 lg:px-20 min-h-screen">
      {/* Title */}
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Available <span className="text-blue-500">Credit Cards</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Browse your credit cards securely with details and easy navigation.
        </p>
      </div>

      {/* Cards List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {paginatedCards.map((card) => (
          <div
            key={card.id}
            className="relative flex flex-col items-center rounded-2xl border-4 border-gray-700 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 shadow-lg transition-transform hover:scale-105"
          >
            {/* Image */}
            <Image
              src={card.image}
              alt="credit card"
              width={200}
              height={120}
              className="mb-6 rounded-lg"
            />

            {/* Card Number */}
            <h3 className="text-xl font-bold text-gray-200 mb-2 text-center">
              {card.number}
            </h3>

            {/* CSV + Tsaref */}
            <p className="text-gray-400 text-sm mb-1">
              <span className="font-semibold text-gray-300">CSV:</span>{" "}
              {card.csv}
            </p>
            <p className="text-gray-400 text-sm mb-1">
              <span className="font-semibold text-gray-300">Tsaref:</span>{" "}
              {card.tsaref}
            </p>
            <p className="text-gray-400 text-sm mb-4">
              <span className="font-semibold text-gray-300">Expiry:</span>{" "}
              {card.expiry}
            </p>

            {/* Button */}
            <Link
              href={`/cards/${card.id}`}
              className="w-full text-center px-4 py-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white font-semibold rounded-lg shadow-md transition"
            >
              More details
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-10 space-x-4">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className={`px-4 py-2 rounded-md font-semibold transition ${
            page === 1
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-500 text-white"
          }`}
        >
          Previous
        </button>
        <span className="text-gray-300">
          Page {page} of {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
          className={`px-4 py-2 rounded-md font-semibold transition ${
            page === totalPages
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-500 text-white"
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
}
