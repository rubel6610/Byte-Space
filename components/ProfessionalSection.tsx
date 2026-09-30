"use client";

import Image from "next/image";

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const features: string[] = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export default function ProfessionalSection() {
  return (
    <section 
      className="relative w-full overflow-hidden py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 select-none"
      style={{
        background:
          "radial-gradient(ellipse 70% 55% at 20% 0%, rgba(226, 255, 140, 0.75) 0%, rgba(235, 255, 170, 0.3) 40%, transparent 75%), radial-gradient(ellipse 50% 40% at 0% 45%, rgba(224, 235, 255, 0.6) 0%, transparent 60%), radial-gradient(ellipse 55% 45% at 5% 90%, rgba(226, 255, 140, 0.6) 0%, transparent 65%), radial-gradient(ellipse 55% 45% at 95% 92%, rgba(224, 235, 255, 0.65) 0%, transparent 65%), #ffffff",
      }}
    >
      {/* Additional ambient luminous blur orbs */}
      {/* Top Left Yellow Glow directly above the text */}
      <div className="pointer-events-none absolute -top-20 left-[2%] sm:left-[8%] w-[580px] sm:w-[680px] h-[480px] rounded-full bg-[#E2FF8C]/60 blur-[110px]" />
      <div className="pointer-events-none absolute top-[30%] -left-20 w-[450px] h-[450px] rounded-full bg-blue-100/60 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-[5%] -left-20 w-[550px] h-[550px] rounded-full bg-[#E2FF8C]/55 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-5%] -right-20 w-[550px] h-[550px] rounded-full bg-blue-100/60 blur-[120px]" />

      <div className="relative z-10 max-w-[1360px] mx-auto space-y-24 sm:space-y-32 lg:space-y-36">
        {/* ================= Part 1: Your Path to Professional Growth ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Stats */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              Your Path to Professional <br className="hidden sm:inline" />
              Growth Starts Here!
            </h2>

            <p className="mt-5 sm:mt-6 text-xs sm:text-sm md:text-base text-gray-500 font-normal leading-relaxed max-w-xl">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* 3 Stats Counters */}
            <div className="mt-8 sm:mt-10 flex items-center gap-10 sm:gap-14">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Composite Visual (Frame 11.png) */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px] transition-transform hover:scale-[1.02] duration-500">
              <Image
                src="/professional/Frame 11.png"
                alt="Professional student growth visual"
                width={700}
                height={700}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* ================= Part 2: Create & Manage Courses Easily ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Composite Visual (Frame 12.png) */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-[500px] transition-transform hover:scale-[1.02] duration-500">
              <Image
                src="/professional/Frame 12.png"
                alt="Create and manage courses visual"
                width={700}
                height={700}
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right Column: Copy & Feature Checkmarks */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              Create & Manage <br className="hidden sm:inline" />
              Courses Easily.
            </h2>

            <p className="mt-5 sm:mt-6 text-xs sm:text-sm md:text-base text-gray-500 font-normal leading-relaxed max-w-xl">
              <strong className="text-gray-900 font-semibold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Checkmark Bullets */}
            <div className="mt-8 space-y-3.5 sm:space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  {/* Blue Solid Checkmark Icon */}
                  <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full bg-brand-blue flex items-center justify-center shrink-0 shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-gray-900 font-bold text-sm sm:text-base">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
