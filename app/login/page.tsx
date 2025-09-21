"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Nav from "@/Components/Navbar/Nav";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Login avec email: ${email}`);
  };

  return (
    <>
    <Nav/><br />
    <main className="bg-gray-950 min-h-screen flex flex-col justify-center items-center px-4">
      {/* Login Container */}
      <div className="bg-gray-800 w-full max-w-md sm:max-w-lg p-8 sm:p-12 rounded-3xl shadow-2xl border border-gray-700 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-10 blur-3xl -z-10"></div>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/logo.svg" alt="CrediNova logo" width={48} height={48} priority />
            <span className="text-3xl font-bold text-blue-500">CrediNova</span>
          </Link>
        </div>

        {/* Message */}
        <p className="text-gray-300 text-center mb-6 text-sm sm:text-base">
          To create an account, you must first purchase a pack. Once done, you can log in below.
        </p>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleLogin}>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-200 mb-1 font-medium">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-4 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-200 mb-1 font-medium">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-4 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-400 rounded-xl font-bold text-white transition shadow-lg"
          >
            Login
          </button>
        </form>

        <p className="text-gray-400 text-sm text-center mt-6">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-blue-500 hover:text-blue-400 font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
    </>
  );
}
