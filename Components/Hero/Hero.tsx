// components/Hero.js
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="font-sans relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white overflow-hidden min-h-screen flex items-center pt-20"
      // pt-20 pour laisser de la place à la navbar fixée (env. 80px)
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-28 flex flex-col lg:flex-row-reverse items-center gap-8 justify-center w-full">
        {/* Image */}
        <div className="flex-1 relative w-full max-w-md lg:max-w-xl mb-8 lg:mb-0">
          <div className="relative w-full h-56 lg:h-[450px]" style={{ overflow: "visible" }}>
            <Image
              src="/images/choose-card.png"
              alt="Credit card illustration"
              width={480}
              height={480}
              style={{
                borderRadius: "1.5rem",
                filter: "drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3))",
                animation: "verticalMove 4s ease-in-out infinite",
                objectFit: "contain",
                width: "100%",
                height: "100%",
              }}
              priority
            />
          </div>
        </div>

        {/* Texte */}
        <div className="flex-1 z-10 space-y-8 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
            Buy Credit Card Packs Easily with <span className="text-blue-500">CrediNova</span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-300 max-w-xl leading-relaxed mx-auto lg:mx-0">
            CrediNova offers a fast, secure, and streamlined way to purchase credit card packs tailored to your financial needs.
          </p>

          <Link
            href="/"
            className="inline-block px-10 py-3 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:from-blue-600 hover:to-blue-400 text-white transition duration-300 rounded-md font-medium text-lg shadow-md"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Boules animées colorées en fond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 w-full h-full overflow-hidden"
      >
        <span className="absolute bg-blue-600 rounded-full opacity-20 blur-3xl w-40 h-40 -top-6 -left-6 animate-pulse-slow"></span>
        <span className="absolute bg-pink-600 rounded-full opacity-20 blur-3xl w-56 h-56 -bottom-10 -right-6 animate-pulse-slow delay-1000"></span>
        <span className="absolute bg-purple-600 rounded-full opacity-10 blur-3xl w-48 h-48 top-1/2 left-1/3 animate-pulse-slow delay-500"></span>
      </div>

      {/* Animation globale dans JSX */}
      <style jsx global>{`
        @keyframes verticalMove {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-35px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.4;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
