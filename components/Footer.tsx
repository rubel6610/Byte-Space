"use client";

import Image from "next/image";
import Link from "next/link";

const column1Links = [
  { label: "Featured Courses", href: "#courses" },
  { label: "Featured Categories", href: "#categories" },
  { label: "Business", href: "#" },
  { label: "IT", href: "#" },
  { label: "Design", href: "#" },
];

const column2Links = [
  { label: "Development", href: "#" },
  { label: "Marketing", href: "#" },
  { label: "Photography", href: "#" },
  { label: "Finance", href: "#" },
  { label: "Sport", href: "#" },
];

const column3Links = [
  { label: "Become a Creator", href: "#" },
  { label: "Affiliate Program", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Help", href: "#" },
  { label: "About", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-20 pb-12 px-6 sm:px-10 lg:px-16 border-t border-gray-100">
      <div className="max-w-[1240px] mx-auto">
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
          {/* Left Section: Brand & Newsletter */}
          <div className="max-w-[440px] flex flex-col">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2.5 mb-6 group w-fit">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="ByteSpace Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-gray-900 text-2xl font-bold tracking-tight">
                ByteSpace
              </span>
            </Link>

            {/* Newsletter Tagline */}
            <p className="text-sm text-gray-700 font-normal leading-relaxed mb-6">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Input & Search Button */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-3 w-full"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white border border-gray-300 rounded-full px-5 py-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-black transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-[#CAFF04] hover:bg-[#b8e800] text-black font-normal text-sm px-8 py-3 rounded-full transition-colors cursor-pointer whitespace-nowrap shadow-xs active:scale-95"
              >
                Search
              </button>
            </form>

            {/* Disclaimer */}
            <p className="mt-3.5 text-[11px] text-gray-500 leading-snug">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Section: Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-16 lg:gap-20 pt-2">
            {/* Column 1 */}
            <div className="flex flex-col space-y-4">
              {column1Links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-700 hover:text-black font-normal transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col space-y-4">
              {column2Links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-700 hover:text-black font-normal transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col space-y-4">
              {column3Links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-700 hover:text-black font-normal transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider & Legal Bottom Bar */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>@ 2023 ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6 sm:gap-8">
            <Link href="#" className="hover:text-black transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-black transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-black transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
