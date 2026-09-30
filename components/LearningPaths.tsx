"use client";

import Link from "next/link";

interface LearningPath {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const learningPaths: LearningPath[] = [
  {
    title: "Design",
    href: "/courses?category=design",
    icon: (
      /* Crossed pencil & ruler / tools */
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7 text-black"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6-1.4 1.4-1.6-1.6a1 1 0 0 0-1.4 0l-7.6 7.6a1 1 0 0 0-.3.7v3a1 1 0 0 0 1 1h3a1 1 0 0 0 .7-.3l7.6-7.6a1 1 0 0 0 0-1.4l-1.6-1.6 1.4-1.4 1.6 1.6a1 1 0 0 0 1.4 0l1.6-1.6a1 1 0 0 0 0-1.4l-3-3a1 1 0 0 0-1.4 0l-1.6 1.6zM6 19v-1.6l6.6-6.6 1.6 1.6L7.6 19H6z" />
        <path d="M19.4 3.6a2 2 0 0 0-2.8 0l-1.3 1.3 2.8 2.8 1.3-1.3a2 2 0 0 0 0-2.8z" />
      </svg>
    ),
  },
  {
    title: "Development",
    href: "/courses?category=development",
    icon: (
      /* Code brackets {} / tag icon */
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7 text-black"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "IT & Software",
    href: "/courses?category=it-software",
    icon: (
      /* Laptop / Computer */
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7 text-black"
      >
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
  },
  {
    title: "Business",
    href: "/courses?category=business",
    icon: (
      /* Building / Enterprise */
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7 text-black"
      >
        <path d="M19 2H9c-1.1 0-2 .9-2 2v2H5c-1.1 0-2 .9-2 2v14h18V4c0-1.1-.9-2-2-2zM5 8h2v2H5V8zm0 4h2v2H5v-2zm0 4h2v2H5v-2zm4 4V4h10v16H9zm2-14h2v2h-2V6zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-12h2v2h-2V6zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z" />
      </svg>
    ),
  },
  {
    title: "Marketing",
    href: "/courses?category=marketing",
    icon: (
      /* Megaphone / Announcement */
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7 text-black"
      >
        <path d="m3 11 18-5v12L3 13v-2z" />
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        <path d="M21 8.5c1.5.8 2 2.2 2 3.5s-.5 2.7-2 3.5" />
      </svg>
    ),
  },
  {
    title: "Photography",
    href: "/courses?category=photography",
    icon: (
      /* Camera with user/lens */
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7 text-black"
      >
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3.5" />
      </svg>
    ),
  },
];

export default function LearningPaths() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
      <div className="max-w-[1360px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-gray-900 tracking-tight leading-tight">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-4 text-xs sm:text-sm md:text-base text-gray-500 font-normal leading-relaxed max-w-2xl mx-auto">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {learningPaths.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="bg-white rounded-[24px] border border-gray-200/80 p-6 sm:p-7 flex flex-col items-center justify-center aspect-[1/1.08] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.07)] hover:-translate-y-1.5 transition-all duration-300 group select-none"
            >
              {/* Lime Circular Icon Container */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-brand-lime flex items-center justify-center transition-transform group-hover:scale-110 duration-300 shadow-sm">
                {item.icon}
              </div>

              {/* Title */}
              <span className="text-gray-900 font-bold text-sm sm:text-base mt-4 sm:mt-5 text-center group-hover:text-brand-blue transition-colors">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
