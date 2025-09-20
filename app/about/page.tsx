"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon, ShieldCheckIcon, BoltIcon, UsersIcon } from "@heroicons/react/24/solid";
import Nav from "@/Components/Navbar/Nav";
import Footer from "@/Components/Footer/Footer";

export default function AboutPage() {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: "Verified Credit Card Packs",
      description:
        "All packs are fully verified and updated daily to ensure reliability and security for our users.",
    },
    {
      icon: BoltIcon,
      title: "Fast & Secure Delivery",
      description:
        "Instant access to your purchased card packs via a secure and reliable delivery system.",
    },
    {
      icon: UsersIcon,
      title: "Trusted by Thousands",
      description:
        "CrediNova serves thousands of users who rely on us for secure and professional credit card packs.",
    },
  ];

  return (
    <>
    <Nav/>
    <main className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-24 px-6 lg:px-20 text-center lg:text-left">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Texte */}
          <div className="flex-1 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              About <span className="text-blue-500">CrediNova</span>
            </h1>
            <p className="text-gray-300 sm:text-lg lg:text-xl max-w-xl">
              CrediNova is your trusted platform for buying premium credit card packs securely, instantly, and professionally. Our mission is to provide reliable solutions for individuals and businesses alike.
            </p>
            <Link
              href="/buy"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:from-blue-600 hover:to-blue-400 text-white rounded-md font-medium shadow-md transition"
            >
              Buy Packs Now
            </Link>
          </div>

          {/* Image Hero */}
          <div className="flex-1 relative w-full max-w-lg h-72 sm:h-96 lg:h-[400px] mx-auto">
            <Image
              src="/images/img_protected.png"
              alt="About illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 lg:px-20 bg-gray-950">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose <span className="text-blue-500">CrediNova</span>?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            We provide high-quality, verified credit card packs for personal and business needs with unmatched security and speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="bg-gray-900 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:scale-105 transition-transform duration-300">
                <Icon className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-20 text-center bg-gray-900">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ready to get started with <span className="text-blue-500">CrediNova</span>?
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm sm:text-base">
          Secure, fast, and professional credit card packs at your fingertips.
        </p>
        <Link
          href="/buy"
          className="inline-block px-10 py-4 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:from-blue-600 hover:to-blue-400 text-white rounded-md font-medium shadow-md transition"
        >
          Buy Now
        </Link>
      </section>
    </main>
    </>
  );
}
