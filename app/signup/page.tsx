"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Nav from "@/Components/Navbar/Nav";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Inscription réussie pour ${firstName} ${lastName}, Email: ${email}, Tel: ${tel}`);
  };

  return (
    <>
      <div className="pb-6">
        <Nav />
      </div>

      <main className="bg-gray-950 min-h-screen flex flex-col justify-center items-center px-4 py-10"><br /><br />
        {/* Register Container */}
        <div className="bg-gray-800 w-full max-w-2xl p-8 sm:p-12 rounded-3xl shadow-2xl border border-gray-700 relative overflow-hidden">
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
            Create your account to access all features and start your journey with us.
          </p>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleRegister}>
            {/* First + Last Name */}
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="flex flex-col w-full">
                <label htmlFor="firstName" className="text-gray-200 mb-1 font-medium">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your first name"
                  className="w-full p-4 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
                  required
                />
              </div>

              <div className="flex flex-col w-full">
                <label htmlFor="lastName" className="text-gray-200 mb-1 font-medium">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your last name"
                  className="w-full p-4 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
                  required
                />
              </div>
            </div>

            {/* Email */}
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

            {/* Password */}
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

            {/* Tel */}
            <div className="flex flex-col">
              <label htmlFor="tel" className="text-gray-200 mb-1 font-medium">Phone Number</label>
              <input
                type="tel"
                id="tel"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                placeholder="Enter your phone number"
                className="w-full p-4 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 hover:bg-blue-400 rounded-xl font-bold text-white transition shadow-lg"
            >
              Sign Up
            </button>
          </form>

          {/* Link to login */}
          <p className="text-gray-400 text-sm text-center mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:text-blue-400 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </main>

 
    </>
  );
}
