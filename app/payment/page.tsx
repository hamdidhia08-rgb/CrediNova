"use client";

import Link from "next/link";
import Nav from "@/Components/Navbar/Nav";
import Footer from "@/Components/Footer/Footer";

interface PaymentMethod {
  name: string;
  imageUrl: string; // URL de l'image
  description: string;
  link: string;
}

const paymentMethods: PaymentMethod[] = [
  {
    name: "PayPal",
    imageUrl: "/images/PayPal.svg.png", 
    description: "Secure and fast payment with your PayPal account.",
    link: "/payment/paypal",
  },
  {
    name: "Binance Pay",
    imageUrl: "/images/Binance_logo.svg.png", 
    description: "Pay easily using Binance crypto wallet.",
    link: "/payment/binance",
  },
  {
    name: "Neteller",
    imageUrl: "/images/Neteller.svg.png",
    description: "Quick and safe payment with your Neteller account.",
    link: "/payment/neteller",
  },
  {
    name: "Skrill",
    imageUrl: "/images/Skrill_logo.svg.png",
    description: "Fast payments via Skrill wallet, secure and reliable.",
    link: "/payment/skrill",
  },
  {
    name: "MasterCard",
    imageUrl: "/images/MasterCard_Logo.svg.png",
    description: "Pay easily using your MasterCard credit or debit card.",
    link: "/payment/mastercard",
  },
];

export default function PaymentPage() {
  return (
    <>
      <Nav /><br /><br />
      <main className="bg-gray-900 min-h-screen text-white">
        {/* Header */}
        <section className="py-24 px-6 lg:px-20 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            Choose Your <span className="text-blue-500">Payment Method</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            Select the most convenient and secure payment option to complete your purchase.
          </p>

          {/* Payment Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {paymentMethods.map((method, i) => (
              <Link
                key={i}
                href={method.link}
                className="flex flex-col items-center justify-center p-8 rounded-2xl shadow-2xl transition-transform transform hover:scale-105 hover:shadow-[0_0_40px_rgba(0,0,0,0.5)] bg-gray-800"
              >
                <div className="mb-6 w-32 h-20">
                  <img
                    src={method.imageUrl}
                    alt={method.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Description only */}
                <p className="text-gray-200 text-center max-w-xs text-base">{method.description}</p>
              </Link>
            ))}
          </div>

          {/* Note */}
          <p className="mt-12 text-gray-400 max-w-3xl mx-auto text-base sm:text-lg">
            All transactions are encrypted and secured. Your payment details will never be shared. Choose the method you trust the most.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
