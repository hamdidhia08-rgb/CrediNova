"use client";

import { useState } from "react";
import { ClipboardIcon, ArrowUpOnSquareIcon } from "@heroicons/react/20/solid";
import Nav from "@/Components/Navbar/Nav";
import Footer from "@/Components/Footer/Footer";
import Image from "next/image";

export default function BinanceStepper() {
  const [step, setStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);

  const copyID = () => {
    navigator.clipboard.writeText("BINANCE-ID-123456");
    alert("ID copied to clipboard!");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const nextStep = () => {
    if (step === 2 && !file) {
      alert("⚠️ Please upload your payment screenshot before proceeding.");
      return;
    }
    setStep(step + 1);
  };

  return (
    <>
      <Nav />
      <main className="bg-gray-900 text-white min-h-screen py-24 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12">
            Binance Pay <span className="text-blue-500">Payment Steps</span>
          </h1>

          {/* Stepper */}
          <div className="flex items-center justify-between mb-12 relative">
            {[1, 2, 3, 4].map((s, idx) => (
              <div key={s} className="relative flex-1 flex justify-center items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white z-10 ${
                    step === s
                      ? "bg-blue-500 shadow-lg"
                      : step > s
                      ? "bg-green-500"
                      : "bg-gray-700"
                  }`}
                >
                  {s}
                </div>
                {idx < 3 && (
                  <div
                    className={`absolute top-1/2 left-1/2 w-full h-1 -translate-x-1/2 ${
                      step > s ? "bg-green-500" : "bg-gray-700"
                    }`}
                    style={{ zIndex: 0 }}
                  ></div>
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <div className="bg-gray-800 p-10 rounded-3xl shadow-2xl transition-transform transform hover:scale-105">
            {/* Step 1 */}
  
{step === 1 && (
  <div className="space-y-6 text-center">
    <h2 className="text-2xl font-bold text-blue-500">Step 1: Copy Your ID & Send Amount</h2>
    <p className="text-gray-300 text-lg">
      Copy your unique Binance ID below and send the payment amount using Binance Pay.
    </p>
    <div className="flex justify-center mb-4">
      <Image
        src="/images/Binance_logo.svg.png"
        alt="Binance Logo"
        width={150}
        height={50}
      />
    </div>
    <div className="flex items-center justify-center gap-4 bg-gray-700 p-4 rounded-xl font-mono text-xl">
      <span>BINANCE-ID-123456</span>
      <button
        onClick={copyID}
        className="bg-blue-500 hover:bg-blue-400 p-2 rounded-lg"
      >
        <ClipboardIcon className="w-6 h-6 text-white" />
      </button>
    </div>
    <button
      onClick={() => setStep(2)}
      className="mt-6 px-8 py-3 bg-blue-500 hover:bg-blue-400 rounded-xl font-bold shadow-md transition"
    >
      Next Step
    </button>
  </div>
)}

            {/* Step 2 */}
            {step === 2 && (
              <div className="space-y-6 text-center">
                <h2 className="text-2xl font-bold text-blue-500">Step 2: Upload Payment Screenshot</h2>
                <p className="text-gray-300 text-lg">
                  Upload a screenshot of your Binance Pay transaction as proof of payment.
                </p>
                <label className="block w-full p-10 border-2 border-dashed border-gray-600 rounded-2xl cursor-pointer hover:border-blue-500 transition relative">
                  <ArrowUpOnSquareIcon className="w-12 h-12 mx-auto text-blue-500" />
                  <p className="text-gray-400 mt-4">Drag & drop or click to upload</p>
                  <input
                    type="file"
                    accept="image/*"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={handleFileChange}
                  />
                </label>
                {file && (
                  <p className="text-green-400 mt-2 text-lg">{file.name} uploaded!</p>
                )}
                <div className="flex justify-between mt-6">
                  <button
                    onClick={() => setStep(1)}
                    className="px-6 py-2 bg-gray-600 hover:bg-gray-500 rounded-xl font-bold"
                  >
                    Back
                  </button>
                  <button
                    onClick={nextStep}
                    className="px-6 py-2 bg-blue-500 hover:bg-blue-400 rounded-xl font-bold"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="space-y-6 text-center">
                <h2 className="text-2xl font-bold text-blue-500">Step 3: Create Your Account</h2>
                <form className="space-y-4 text-left max-w-md mx-auto">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full p-3 rounded-xl bg-gray-700 text-white"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full p-3 rounded-xl bg-gray-700 text-white"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-3 rounded-xl bg-gray-700 text-white"
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full p-3 rounded-xl bg-gray-700 text-white"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full p-3 rounded-xl bg-gray-700 text-white"
                    required
                  />
                  <div className="flex justify-between mt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-2 bg-gray-600 hover:bg-gray-500 rounded-xl font-bold"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(4)}
                      className="px-6 py-2 bg-blue-500 hover:bg-blue-400 rounded-xl font-bold"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Step 4 */}
            {step === 4 && (
              <div className="space-y-6 text-center">
                <h2 className="text-2xl font-bold text-green-500">Thank You!</h2>
                <p className="text-gray-300 text-lg">
                  Your payment and account creation were successful. You can now access all features.
                </p>
                <button
                  onClick={() => setStep(1)}
                  className="mt-6 px-8 py-3 bg-blue-500 hover:bg-blue-400 rounded-xl font-bold shadow-md transition"
                >
                  Return Home
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
