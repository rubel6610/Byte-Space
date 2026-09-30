"use client";

import Image from "next/image";
import Link from "next/link";

export default function CreatorCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-blue bg-grid-pattern h-[488px] min-h-[488px] max-h-[488px] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 select-none">
      {/* ---------------- 3D Decorative Floating Vectors ---------------- */}
      {/* Left Top: Lime Green Spiral */}
      <div className="absolute left-[-10px] sm:left-0 top-[-20px] sm:top-[-10px] w-24 sm:w-36 md:w-44 lg:w-52 pointer-events-none z-10 opacity-95">
        <Image
          src="/banner/Frame.png"
          alt="Lime spiral vector"
          width={260}
          height={380}
          className="w-full h-auto object-contain object-left drop-shadow-xl"
        />
      </div>

      {/* Left Middle: Small White Spiral */}
      <div className="hidden sm:block absolute left-[10%] sm:left-[13%] top-[10%] sm:top-[12%] w-12 sm:w-16 md:w-20 pointer-events-none z-10 -rotate-12 opacity-90">
        <Image
          src="/banner/Frame(1).png"
          alt="White spiral vector"
          width={120}
          height={120}
          className="w-full h-auto object-contain drop-shadow-md"
        />
      </div>

      {/* Left Bottom Middle: White 3D Pyramid */}
      <div className="absolute left-2 sm:left-6 md:left-10 bottom-[18%] sm:bottom-[20%] w-14 sm:w-18 md:w-24 pointer-events-none z-10 rotate-[-15deg] opacity-90">
        <Image
          src="/banner/Cone(1).png"
          alt="White pyramid vector"
          width={140}
          height={140}
          className="w-full h-auto object-contain drop-shadow-lg"
        />
      </div>

      {/* Left Bottom: Lime 3D Torus */}
      <div className="absolute left-[3%] sm:left-[6%] bottom-[-20px] sm:bottom-[-15px] w-24 sm:w-36 md:w-44 lg:w-52 pointer-events-none z-10 -rotate-12 opacity-95">
        <Image
          src="/cta/Cone(4).png"
          alt="Lime torus vector"
          width={260}
          height={260}
          className="w-full h-auto object-contain drop-shadow-2xl [filter:hue-rotate(220deg)_brightness(1.5)_saturate(200%)]"
        />
      </div>

      {/* Right Top-Left: Lime 3D Pyramid */}
      <div className="hidden sm:block absolute right-[14%] sm:right-[16%] top-[6%] sm:top-[8%] w-14 sm:w-20 md:w-28 lg:w-32 pointer-events-none z-10 rotate-12 opacity-95">
        <Image
          src="/banner/Cone(1).png"
          alt="Lime pyramid vector"
          width={160}
          height={160}
          className="w-full h-auto object-contain drop-shadow-xl [filter:hue-rotate(220deg)_brightness(1.4)_saturate(250%)]"
        />
      </div>

      {/* Right Top: White/Lime Cylinder */}
      <div className="absolute right-[-15px] sm:right-0 top-[-20px] sm:top-[-10px] w-28 sm:w-40 md:w-52 lg:w-60 pointer-events-none z-10 opacity-95">
        <Image
          src="/cta/cone (3).png"
          alt="Cylinder vector"
          width={300}
          height={400}
          className="w-full h-auto object-contain object-right drop-shadow-2xl"
        />
      </div>

      {/* Right Bottom: Lime Green Spiral */}
      <div className="absolute right-20 bottom-[-20px] sm:bottom-[-80px] w-28 sm:w-40 md:w-48 lg:w-30 pointer-events-none z-10 rotate-270 opacity-95">
        <Image
          src="/banner/Frame.png"
          alt="Lime spiral vector"
          width={280}
          height={400}
          className="w-full h-auto object-contain object-right drop-shadow-2xl"
        />
      </div>

      {/* ---------------- Center CTA Content ---------------- */}
      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center justify-center my-auto">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold text-white tracking-tight leading-[1.15]">
          Unlock Your Potential as a <br className="hidden sm:inline" />
          Creator with ByteSpace
        </h2>

        <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base text-white/85 font-normal leading-relaxed max-w-2xl px-2">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        {/* Action Button */}
        <div className="mt-6 sm:mt-8">
          <Link
            href="/join"
            className="inline-block bg-brand-lime text-black font-semibold text-xs sm:text-sm md:text-base px-8 sm:px-10 py-3 sm:py-3.5 rounded-full hover:brightness-105 active:scale-95 transition-all duration-200 shadow-xl"
          >
            Join as Creator
          </Link>
        </div>
      </div>
    </section>
  );
}
