"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
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
            Sign in with ease
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-white/85 font-normal leading-relaxed max-w-md">
            Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
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

        {/* Right Column: White Login Form Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
          <div className="w-full max-w-[500px] bg-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-14 shadow-2xl flex flex-col">
            {/* Header */}
            <span className="text-brand-blue text-sm sm:text-[15px] font-medium tracking-tight">
              Sign In
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-900 tracking-tight leading-[1.15] mt-1.5 mb-8">
              Welcome Back
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
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

              {/* Sign In Button (Aligned to the right) */}
              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="bg-brand-lime hover:brightness-95 active:scale-95 text-black font-semibold text-sm px-8 py-3 rounded-full transition-all cursor-pointer shadow-xs"
                >
                  Sign In
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-3 text-gray-400 font-normal">or</span>
              </div>
            </div>

            {/* Social Logins */}
            <div className="flex items-center justify-center gap-4">
              {/* Facebook Button */}
              <button
                type="button"
                className="w-14 h-14 rounded-2xl border border-gray-200 flex items-center justify-center text-black hover:bg-gray-50 active:scale-95 transition-all cursor-pointer shadow-2xs"
                aria-label="Sign in with Facebook"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </button>

              {/* Google Button */}
              <button
                type="button"
                className="w-14 h-14 rounded-2xl border border-gray-200 flex items-center justify-center text-black hover:bg-gray-50 active:scale-95 transition-all cursor-pointer shadow-2xs"
                aria-label="Sign in with Google"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12.24 10.285V13.8h6.216c-.254 1.583-1.884 4.637-6.216 4.637-3.743 0-6.797-3.08-6.797-6.877 0-3.796 3.054-6.876 6.797-6.876 2.13 0 3.555.91 4.37 1.692l2.96-2.853C17.66 1.764 15.19 0.77 12.24 0.77 6.03 0.77 1 5.79 1 12s5.03 11.23 11.24 11.23c6.48 0 10.78-4.55 10.78-10.97 0-.74-.08-1.47-.23-2.185H12.24z" />
                </svg>
              </button>
            </div>

            {/* Bottom Link */}
            <div className="mt-10 text-center">
              <p className="text-xs sm:text-sm text-gray-600">
                New user?{" "}
                <Link
                  href="/signup"
                  className="text-brand-blue hover:underline font-medium ml-1"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
