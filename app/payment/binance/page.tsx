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
      <main className="bg-gray-950 text-gray-100 min-h-screen py-24 px-0 lg:px-20">
        <div className="w-full max-w-full lg:max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-8 sm:mb-12 px-4 sm:px-0">
            Binance Pay <span className="text-blue-500">Payment Steps</span>
          </h1>

          {/* Stepper Circles */}
          <div className="flex items-center justify-between mb-8 sm:mb-12 relative w-full px-4 sm:px-0">
            {[1, 2, 3, 4].map((s, idx) => (
              <div key={s} className="relative flex-1 flex justify-center items-center">
                <div
                  className={`w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center font-bold text-white z-10 text-sm sm:text-base ${
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
                    className={`absolute top-1/2 left-1/2 h-1 -translate-y-1/2 ${
                      step > s ? "bg-green-500" : "bg-gray-700"
                    }`}
                    style={{ width: "100%", zIndex: 0 }}
                  ></div>
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
<div className="bg-gray-800 w-full p-4 sm:p-10 rounded-none sm:rounded-3xl shadow-2xl transition-transform transform hover:scale-105">
  {/* Step 1 */}
  {step === 1 && (
    <div className="space-y-4 sm:space-y-6 text-center px-0 sm:px-0">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-500">
        Step 1: Copy Your ID & Send Amount
      </h2>
      <p className="text-gray-300 text-sm sm:text-base">
        Copy your unique Binance ID below and send the payment amount using Binance Pay.
      </p>
      <div className="flex justify-center mb-2 sm:mb-4">
        <Image
          src="/images/Binance_logo.svg.png"
          alt="Binance Logo"
          width={120}
          height={40}
          className="sm:w-[150px] sm:h-[50px]"
        />
      </div>
      <div className="flex items-center justify-center gap-2 sm:gap-4 bg-gray-700 p-2 sm:p-4 rounded-md font-mono text-base sm:text-lg shadow-inner">
        <span>BINANCE-ID-123456</span>
        <button
          onClick={copyID}
          className="bg-blue-500 hover:bg-blue-400 p-1 sm:p-2 rounded-md shadow-lg"
        >
          <ClipboardIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>
      </div>
      <button
        onClick={() => setStep(2)}
        className="mt-4 sm:mt-6 px-4 sm:px-8 py-2 sm:py-3 bg-blue-500 hover:bg-blue-400 rounded-xl font-bold shadow-lg w-full sm:w-auto"
      >
        Next Step
      </button>
    </div>
  )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="space-y-4 sm:space-y-6 text-center px-2 sm:px-0">
                <h2 className="text-xl sm:text-2xl font-bold text-blue-500">
                  Step 2: Upload Payment Screenshot
                </h2>
                <p className="text-gray-300 text-sm sm:text-base">
                  Upload a screenshot of your Binance Pay transaction as proof of payment.
                </p>
                <label className="block w-full p-4 sm:p-10 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-blue-500 transition relative">
                  <ArrowUpOnSquareIcon className="w-10 sm:w-12 h-10 sm:h-12 mx-auto text-blue-500" />
                  <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
                    Drag & drop or click to upload
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={handleFileChange}
                  />
                </label>
                {file && (
                  <p className="text-green-400 mt-2 text-sm sm:text-base">{file.name} uploaded!</p>
                )}
                <div className="flex flex-col sm:flex-row justify-between mt-4 sm:mt-6 gap-2 sm:gap-0">
                  <button
                    onClick={() => setStep(1)}
                    className="px-4 py-2 sm:px-6 sm:py-2 bg-gray-700 hover:bg-gray-600 rounded-md font-bold w-full sm:w-auto"
                  >
                    Back
                  </button>
                  <button
                    onClick={nextStep}
                    className="px-4 py-2 sm:px-6 sm:py-2 bg-blue-500 hover:bg-blue-400 rounded-md font-bold w-full sm:w-auto"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="space-y-4 sm:space-y-6 text-center px-2 sm:px-0">
                <h2 className="text-xl sm:text-2xl font-bold text-blue-500">Step 3: Create Your Account</h2>
                <form className="space-y-3 sm:space-y-4 text-left px-2 sm:px-0">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full p-2 sm:p-3 rounded-md bg-gray-800 text-white text-sm sm:text-base"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full p-2 sm:p-3 rounded-md bg-gray-800 text-white text-sm sm:text-base"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-2 sm:p-3 rounded-md bg-gray-800 text-white text-sm sm:text-base"
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full p-2 sm:p-3 rounded-md bg-gray-800 text-white text-sm sm:text-base"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full p-2 sm:p-3 rounded-md bg-gray-800 text-white text-sm sm:text-base"
                    required
                  />
                  <div className="flex flex-col sm:flex-row justify-between mt-2 sm:mt-4 gap-2 sm:gap-0">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-4 py-2 sm:px-6 sm:py-2 bg-gray-700 hover:bg-gray-600 rounded-md font-bold w-full sm:w-auto"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(4)}
                      className="px-4 py-2 sm:px-6 sm:py-2 bg-blue-500 hover:bg-blue-400 rounded-md font-bold w-full sm:w-auto"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Step 4 */}
            {step === 4 && (
              <div className="space-y-4 sm:space-y-6 text-center px-2 sm:px-0">
                <h2 className="text-xl sm:text-2xl font-bold text-green-500">Thank You!</h2>
                <p className="text-gray-300 text-sm sm:text-base">
                  Your payment and account creation were successful. You can now access all features.
                </p>
                <button
                  onClick={() => setStep(1)}
                  className="mt-4 sm:mt-6 px-4 sm:px-8 py-2 sm:py-3 bg-blue-500 hover:bg-blue-400 rounded-md font-bold shadow-md w-full sm:w-auto"
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
