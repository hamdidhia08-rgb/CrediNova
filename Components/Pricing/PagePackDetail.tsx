"use client";

import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";

interface PackDetailProps {
  name: string;
  price: string;
  cards: string;
  description: string;
  features: string[];
}

export default function PackDetail({
  name = "Pro Pack",
  price = "$499",
  cards = "120K Credit Cards",
  description = "Best choice for professionals who need reliable, verified packs.",
  features = [
    "120,000 verified cards",
    "Priority secure delivery",
    "24/7 customer support",
    "Daily updates included",
  ],
}: PackDetailProps) {
  return (
    <>
      <Nav />
      <main className="bg-gray-950 text-white min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 px-6 lg:px-20 text-center lg:text-left">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            {/* Texte */}
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                {name} <span className="text-blue-500">Details</span>
              </h1>
              <p className="text-gray-300 sm:text-lg lg:text-xl max-w-xl">
                {description} Each pack contains {cards} and is fully verified for secure and reliable use.
              </p>
              <div className="text-4xl sm:text-5xl font-extrabold text-blue-500">
                {price} <span className="text-lg font-medium text-gray-300">/pack</span>
              </div>
              <Link
                href="/payment"
                className="inline-block px-10 py-4 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:from-blue-600 hover:to-blue-400 text-white rounded-xl font-semibold shadow-xl transition-transform transform hover:scale-105"
              >
                Buy Now
              </Link>
            </div>

            {/* Carte Bancaire */}
            <div className="flex-1 flex justify-center items-center">
              <div
                className="w-80 sm:w-96 h-56 sm:h-64 rounded-3xl p-6 shadow-2xl flex flex-col justify-between relative transition-transform transform hover:rotate-1 hover:-translate-y-2 hover:scale-105"
                style={{
                  background: "url('/images/bg.png') center/cover no-repeat",
                  backgroundColor: "#000000",
                  color: "#fff",
                }}
              >
                {/* Puce */}
                <img
                  src="/images/chip.png"
                  alt="Puce bancaire"
                  className="w-12 h-auto"
                />
                {/* Numéro */}
                <div className="text-xl sm:text-2xl tracking-widest mt-2">
                  XXXX XXXX XXXX X678
                </div>
                {/* Détails */}
                <div className="flex justify-between mt-4 text-sm sm:text-base">
                  <div>
                    <div className="text-gray-400 uppercase text-xs">Titulaire</div>
                    <div className="font-medium">xxx xxx</div>
                  </div>
                  <div>
                    <div className="text-gray-400 uppercase text-xs">Expire</div>
                    <div className="font-medium">08/27</div>
                  </div>
                </div>
                {/* Footer */}
                <div className="flex justify-between items-center mt-4">
                  <div className="font-semibold text-white">Banque Pro</div>
                  <img
                    src="/images/logo.png"
                    alt="Logo MasterCard"
                    className="h-10 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        
        {/* Features Section */}
        <section className="py-24 px-6 lg:px-20 bg-gray-800">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              What’s Included in <span className="text-blue-500">{name}</span>?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
              Detailed information about the pack contents, delivery, and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex items-center space-x-4 bg-gray-700 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <p className="text-gray-300 text-left text-base sm:text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Extra Details Section */}
        <section className="py-24 px-6 lg:px-20 bg-gray-950 text-center rounded-t-3xl">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Additional Information</h3>
          <p className="text-gray-400 max-w-3xl mx-auto mb-8 text-base sm:text-lg">
            Each pack is guaranteed to be verified and updated daily. Secure delivery ensures privacy and reliability. Perfect for personal use or large-scale operations.
          </p>
          <Link
            href="/buy"
            className="inline-block px-10 py-4 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:from-blue-600 hover:to-blue-400 text-white rounded-xl font-semibold shadow-lg transition-transform transform hover:scale-105"
          >
            Purchase {name}
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
