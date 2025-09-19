"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

export default function About() {
  return (
    <section
      aria-label="about"
      className="relative bg-gray-900 text-white py-20 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1fr] gap-12 items-center">
        {/* Image */}
     <figure className="hidden lg:flex items-center justify-center h-[480px] max-w-full">
  <Image
    src="/images/img_protected.png"
    alt="About banner"
    width={400}
    height={400}
    className="w-auto h-full object-contain"
    priority
  />
</figure>


        {/* Texte et liste */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6">What Is CrediNova?</h2>

          <p className="mb-8 text-gray-300 max-w-xl leading-relaxed">
            CrediNova is your trusted platform to buy premium credit card packs
            securely and instantly. Whether you're looking for personal use or
            bulk options, we've got you covered.
          </p>

          <ul className="space-y-8 mb-10 max-w-xl">
            <li className="flex items-start space-x-4">
              <CheckCircleIcon className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  Verified Credit Card Packs
                </h3>
                <p className="text-gray-400">
                  Choose from a wide range of credit card packs, fully verified
                  and ready to use. Updated daily for maximum reliability.
                </p>
              </div>
            </li>

            <li className="flex items-start space-x-4">
              <CheckCircleIcon className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  Secure & Fast Delivery
                </h3>
                <p className="text-gray-400">
                  Enjoy instant access to your purchased card packs via our secure
                  delivery system. Privacy and speed guaranteed.
                </p>
              </div>
            </li>
          </ul>

    <Link
  href="#"
  className="inline-block w-40 py-3 text-center bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:from-blue-600 hover:to-blue-400 text-white rounded-md font-medium shadow-md transition"
>
  Explore More
</Link>


        </div>
      </div>
    </section>
  );
}
