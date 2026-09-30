"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SignUpPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic
  };

  return (
    <div className="min-h-screen w-full bg-brand-blue bg-grid-pattern relative flex flex-col justify-between p-6 sm:p-10 lg:p-16 overflow-x-hidden">
      <div className="max-w-[1360px] w-full mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Brand, Description & 3D Preview Visual */}
        <div className="lg:col-span-6 flex flex-col items-start">
          {/* Logo Mark */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-8 group transition-transform active:scale-95"
            aria-label="Back to ByteSpace Home"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10">
              <Image
                src="/logo.png"
                alt="ByteSpace Logo"
                width={40}
                height={40}
                priority
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Heading & Paragraph */}
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Sign up and come in
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-white/85 font-normal leading-relaxed max-w-md">
            The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
          </p>

          {/* 3D Visual Group */}
          <div className="relative mt-8 sm:mt-12 w-full max-w-[480px]">
            <Image
              src="/login/Group 7.png"
              alt="ByteSpace Learning Platform Cards"
              width={520}
              height={520}
              priority
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Right Column: White Sign Up Form Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
          <div className="w-full max-w-[500px] bg-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-14 shadow-2xl flex flex-col">
            {/* Header */}
            <span className="text-brand-blue text-sm sm:text-[15px] font-medium tracking-tight">
              Create an Account
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-900 tracking-tight leading-[1.15] mt-1.5 mb-8">
              Welcome to <br />
              ByteSpace
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
              {/* Full Name Field */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Jamie Davis"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="designer@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 transition-all"
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 transition-all tracking-widest"
                />
              </div>

              {/* Continue Button (Aligned to the right) */}
              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="bg-brand-lime hover:brightness-95 active:scale-95 text-black font-semibold text-sm px-8 py-3 rounded-full transition-all cursor-pointer shadow-xs"
                >
                  Continue
                </button>
              </div>
            </form>

            {/* Bottom Link */}
            <div className="mt-10 sm:mt-14 text-center">
              <p className="text-xs sm:text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-brand-blue hover:underline font-medium ml-1"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
