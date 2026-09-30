"use client";

import Image from "next/image";

const studentAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100&q=80",
];

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-brand-blue bg-grid-pattern pt-4 sm:pt-6 md:pt-8 pb-0 flex flex-col justify-between select-none w-full min-h-[calc(100vh-5rem)] lg:h-[calc(100vh-5rem)] lg:max-h-[920px]">
      {/* ---------------- 3D Decorative Assets ---------------- */}
      {/* Top Left: Lime Green Spiral */}
      <div className="absolute left-0 top-[2%] sm:top-[3%] w-20 sm:w-32 md:w-44 lg:w-56 xl:w-64 pointer-events-none z-10 opacity-95">
        <Image
          src="/banner/Frame.png"
          alt="Decorative lime spiral vector"
          width={260}
          height={380}
          className="w-full h-auto object-contain object-left drop-shadow-lg"
          priority
        />
      </div>

      {/* Middle Left: Small White Spiral */}
      <div className="hidden sm:block absolute left-[10%] sm:left-[12%] md:left-[14%] top-[30%] sm:top-[32%] w-10 sm:w-16 md:w-28 lg:w-36 pointer-events-none z-10 -rotate-12 opacity-90">
        <Image
          src="/banner/Frame(1).png"
          alt="Decorative white spiral vector"
          width={120}
          height={120}
          className="w-full h-auto object-contain drop-shadow-md"
        />
      </div>

      {/* Bottom Left: White 3D Donut / Torus */}
      <div className="absolute left-[3%] sm:left-[6%] md:left-[10%] lg:left-[12%] bottom-[4%] sm:bottom-[8%] md:bottom-[10%] w-16 sm:w-24 md:w-32 lg:w-40 pointer-events-none z-10 -rotate-12 opacity-95">
        <Image
          src="/banner/Cone(2).png"
          alt="Decorative white torus vector"
          width={200}
          height={200}
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* Top Right: Lime Green 3D Cone / Cylinder */}
      <div className="absolute right-0 top-[0%] w-20 sm:w-32 md:w-44 lg:w-52 xl:w-56 pointer-events-none z-10 opacity-95">
        <Image
          src="/banner/Cone.png"
          alt="Decorative lime cone vector"
          width={280}
          height={380}
          className="w-full h-auto object-contain object-right drop-shadow-xl"
          priority
        />
      </div>

      {/* Middle Right: White 3D Pyramid */}
      <div className="hidden sm:block absolute right-[8%] sm:right-[11%] md:right-[14%] top-[30%] sm:top-[32%] w-12 sm:w-16 md:w-22 lg:w-28 pointer-events-none z-10 -rotate-6 opacity-90">
        <Image
          src="/banner/Cone(1).png"
          alt="Decorative white pyramid vector"
          width={130}
          height={130}
          className="w-full h-auto object-contain drop-shadow-lg"
        />
      </div>

      {/* Bottom Right: White Spiral */}
      <div className="hidden xs:block absolute right-2 sm:right-6 md:right-24 lg:right-36 xl:right-40 bottom-[4%] sm:bottom-[6%] md:bottom-[8%] w-16 sm:w-24 md:w-36 lg:w-48 pointer-events-none z-10 rotate-12 opacity-95">
        <Image
          src="/banner/Frame(1).png"
          alt="Decorative white spiral vector"
          width={180}
          height={180}
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* ---------------- Main Content Header & Search ---------------- */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center shrink-0 mt-2 sm:mt-0">
        {/* Main Headline */}
        <h1 className="text-white font-extrabold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[52px] tracking-tight leading-[1.12]">
          Get Access to Hundreds <br className="hidden xs:inline" />
          Courses Available
        </h1>

        {/* Subtitle */}
        <p className="mt-2.5 sm:mt-3.5 text-white/85 text-xs sm:text-sm md:text-base font-normal max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-2">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar Form */}
        <div className="mt-4 sm:mt-6 w-full max-w-[92%] xs:max-w-sm sm:max-w-md md:max-w-lg mx-auto bg-white rounded-full p-1 sm:p-1.5 md:p-2 pl-3.5 sm:pl-5 flex items-center shadow-2xl transition-all duration-200 focus-within:ring-2 focus-within:ring-brand-lime">
          {/* Search Glass Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mr-2 flex-shrink-0"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>

          {/* Search Input Field */}
          <input
            type="text"
            placeholder="Course, topic, creator"
            className="w-full bg-transparent text-gray-800 placeholder-gray-400 text-xs sm:text-sm md:text-base outline-none pr-2 font-normal"
          />

          {/* Search Submit Button */}
          <button
            type="button"
            className="bg-brand-lime text-black font-semibold text-xs sm:text-sm md:text-base px-4 sm:px-6 py-1.5 sm:py-2 rounded-full hover:brightness-105 active:scale-95 transition-transform duration-150 shadow-sm cursor-pointer whitespace-nowrap"
          >
            Search
          </button>
        </div>
      </div>

      {/* ---------------- Center Hero Stage: Arc, Student & Badges ---------------- */}
      <div className="relative mt-auto w-full max-w-[1320px] mx-auto px-2 sm:px-4 flex justify-center items-end flex-1 min-h-[300px] sm:min-h-[380px] md:min-h-0 overflow-visible">
        {/* Lime Green Semicircle Arc Backdrop */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[98%] sm:w-[94%] md:w-[90%] lg:w-[86%] xl:w-[1060px] pointer-events-none z-10 flex justify-center">
          <Image
            src="/banner/Ellipse7.png"
            alt="Lime curved backdrop"
            width={1060}
            height={420}
            className="w-full h-auto max-h-[34vh] sm:max-h-[42vh] lg:max-h-[46vh] object-contain object-bottom"
            priority
          />
        </div>

        {/* Hero Student Cutout Model & Anchored Floating Badges */}
        <div className="relative z-20 w-[260px] xs:w-[300px] sm:w-[390px] md:w-[460px] lg:w-[500px] xl:w-[540px] flex justify-center items-end">
          {/* Main Hero Student Image */}
          <div className="relative w-full flex justify-center items-end pointer-events-none">
            <Image
              src="/banner/student.png"
              alt="ByteSpace student holding laptop with headphones"
              width={600}
              height={600}
              className="w-full h-auto max-h-[44vh] sm:max-h-[48vh] lg:max-h-[52vh] object-contain object-bottom -mb-1 filter drop-shadow-2xl"
              priority
            />
          </div>

          {/* Floating Card 1: UI/UX Design (Top-Left near shoulder/headphone) */}
          <div className="absolute -left-2 xs:-left-3 sm:-left-8 md:-left-14 lg:-left-20 top-[14%] xs:top-[16%] sm:top-[20%] md:top-[24%] z-30 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-2.5 md:p-3.5 shadow-[0_10px_25px_rgba(0,0,0,0.16)] border border-white min-w-[120px] xs:min-w-[130px] sm:min-w-[160px]">
            <h2 className="text-gray-900 font-bold text-[11px] xs:text-xs sm:text-sm tracking-tight">
              UI/UX Design
            </h2>
            <p className="text-gray-500 text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs font-medium mt-0.5 whitespace-nowrap">
              200 Courses • 1000+ Students
            </p>
          </div>

          {/* Floating Card 2: Learning Progress (Top-Right near shoulder/headphone) */}
          <div className="absolute -right-2 xs:-right-3 sm:-right-8 md:-right-14 lg:-right-20 top-[16%] xs:top-[18%] sm:top-[22%] md:top-[26%] z-30 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-2.5 md:p-3.5 shadow-[0_10px_25px_rgba(0,0,0,0.16)] border border-white min-w-[110px] xs:min-w-[125px] sm:min-w-[155px]">
            <p className="text-gray-500 text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs font-medium">
              Learning Progress
            </p>
            <div className="text-gray-900 text-base sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight mt-0.5 leading-none">
              55%
            </div>
            {/* Progress Bar with Lime Active Fill */}
            <div className="w-full bg-gray-100 h-1 sm:h-1.5 md:h-2 rounded-full overflow-hidden mt-1 sm:mt-2">
              <div
                className="bg-brand-lime h-full rounded-full"
                style={{ width: "55%" }}
              />
            </div>
          </div>

          {/* Floating Card 3: Happy Students (Positioned over sleeve / lower left) */}
          <div className="absolute -left-3 xs:-left-6 sm:-left-16 md:-left-28 lg:-left-36 xl:-left-40 bottom-[12%] xs:bottom-[14%] sm:bottom-[16%] md:bottom-[20%] z-30 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-2.5 md:p-3 shadow-[0_10px_25px_rgba(0,0,0,0.16)] border border-white min-w-[130px] xs:min-w-[145px] sm:min-w-[175px]">
            <div className="text-gray-900 font-bold text-[11px] xs:text-xs sm:text-sm">
              Happy Students
            </div>
            <div className="flex items-center gap-1 mt-0.5 text-xs">
              <span className="text-gray-500 font-medium text-[9px] xs:text-[10px] sm:text-xs">4.5 (240)</span>
              <span className="text-amber-400 text-[10px] sm:text-xs">★</span>
            </div>

            {/* Student Avatars Stack with Overlap + 2K+ Badge */}
            <div className="flex items-center mt-1 sm:mt-1.5 pl-0.5">
              {studentAvatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Student face"
                  className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full object-cover ring-1 sm:ring-2 ring-white ${
                    i > 0 ? "-ml-1 sm:-ml-1.5" : ""
                  }`}
                />
              ))}
              {/* 2K+ Lime Badge */}
              <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full ring-1 sm:ring-2 ring-white bg-brand-lime text-black font-bold text-[7px] sm:text-[8px] md:text-[9px] flex items-center justify-center -ml-1 sm:-ml-1.5 select-none shadow-sm">
                2K+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
