"use client";

import Image from "next/image";

interface Brand {
  name: string;
  src: string;
}

const brands: Brand[] = [
  { name: "Logoipsum Waves", src: "/brand-carousel/Frame (2).png" },
  { name: "Logoipsum Sun", src: "/brand-carousel/Frame (3).png" },
  { name: "Logoipsum Lightning", src: "/brand-carousel/Frame (4).png" },
  { name: "Logoipsum Flower", src: "/brand-carousel/Frame (5).png" },
  { name: "Logoipsum Vortex", src: "/brand-carousel/Frame (6).png" },
];

export default function BrandCarousel() {
  return (
    <section className="relative w-full bg-[#F8F9FA] py-10 sm:py-12 md:py-14 overflow-hidden border-b border-gray-100 select-none">
      {/* Edge gradient mask for smooth fade-in/fade-out */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-[#F8F9FA] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-[#F8F9FA] to-transparent z-10" />

      {/* Infinite scrolling track */}
      <div className="flex overflow-hidden">
        <div className="animate-marquee items-center gap-12 sm:gap-16 md:gap-24 lg:gap-28 pr-12 sm:pr-16 md:pr-24 lg:pr-28">
          {/* First set of brands */}
          {brands.map((brand, index) => (
            <div
              key={`brand-1-${index}`}
              className="flex items-center justify-center shrink-0 grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={160}
                height={40}
                className="h-7 sm:h-8 md:h-9 w-auto object-contain"
              />
            </div>
          ))}

          {/* Second duplicate set for seamless infinite loop */}
          {brands.map((brand, index) => (
            <div
              key={`brand-2-${index}`}
              className="flex items-center justify-center shrink-0 grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={160}
                height={40}
                className="h-7 sm:h-8 md:h-9 w-auto object-contain"
              />
            </div>
          ))}

          {/* Third duplicate set for ultra-wide screen coverage */}
          {brands.map((brand, index) => (
            <div
              key={`brand-3-${index}`}
              className="flex items-center justify-center shrink-0 grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={160}
                height={40}
                className="h-7 sm:h-8 md:h-9 w-auto object-contain"
              />
            </div>
          ))}

          {/* Fourth duplicate set */}
          {brands.map((brand, index) => (
            <div
              key={`brand-4-${index}`}
              className="flex items-center justify-center shrink-0 grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={160}
                height={40}
                className="h-7 sm:h-8 md:h-9 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
