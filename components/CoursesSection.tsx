"use client";

import { useState, useMemo } from "react";

interface Course {
  id: string;
  title: string;
  author: string;
  category: string;
  rating: number;
  lessons: number;
  duration: string;
  comments: number;
  level: string;
  price: number;
  image: string;
  studentCount: string;
}

const allCategories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

const studentAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80",
];

const initialCourses: Course[] = [
  {
    id: "1",
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    category: "UI/UX Design",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    studentCount: "26+",
  },
  {
    id: "2",
    title: "Build Digital Asset",
    author: "purepearl studio",
    category: "Graphic Design",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
    studentCount: "26+",
  },
  {
    id: "3",
    title: "the Power of Big Data",
    author: "purepearl studio",
    category: "Data Science",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    studentCount: "26+",
  },
  {
    id: "4",
    title: "Balancing Productivity an...",
    author: "purepearl studio",
    category: "Productivity",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
    studentCount: "26+",
  },
  {
    id: "5",
    title: "Mastering Money Manage...",
    author: "purepearl studio",
    category: "Freelance & Entrepreneurship",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    studentCount: "26+",
  },
  {
    id: "6",
    title: "From Idea to Startup Succ...",
    author: "purepearl studio",
    category: "Marketing",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    studentCount: "26+",
  },
];

export default function CoursesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Featured");
  const [showAllCategories, setShowAllCategories] = useState<boolean>(true);

  // Filter courses based on selected category
  const filteredCourses = useMemo(() => {
    if (selectedCategory === "Featured") {
      return initialCourses;
    }
    const filtered = initialCourses.filter(
      (course) => course.category.toLowerCase() === selectedCategory.toLowerCase()
    );
    // If no course explicitly matches the specific category, show courses with simulated data
    return filtered.length > 0 ? filtered : initialCourses.slice(0, 3);
  }, [selectedCategory]);

  const displayedCategories = showAllCategories
    ? allCategories
    : allCategories.slice(0, 14);

  return (
    <section className="w-full bg-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1360px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-gray-900 tracking-tight leading-[1.15]">
            Discover Your Passion, <br />
            Build Your Skills
          </h2>
          <p className="mt-4 text-xs sm:text-sm md:text-base text-gray-500 font-normal leading-relaxed max-w-2xl mx-auto">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Category Filters Pills */}
        <div className="mt-10 sm:mt-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 md:gap-3">
            {displayedCategories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-brand-lime text-black font-semibold shadow-sm scale-105"
                      : "bg-[#F3F4F6] text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                  }`}
                >
                  {category}
                </button>
              );
            })}

            {/* + More / Less Toggle Button */}
            <button
              type="button"
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="text-brand-blue hover:text-brand-blue-hover font-semibold text-xs sm:text-sm px-3 py-2 transition-colors cursor-pointer"
            >
              {showAllCategories ? "Show Less" : "+ More"}
            </button>
          </div>
        </div>

        {/* Courses Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-[24px] p-4 sm:p-5 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              {/* Card Image Container with Overlaid Stats Pills */}
              <div className="relative w-full aspect-[16/10] rounded-[18px] overflow-hidden bg-gray-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlaid Info Badges at Bottom of Image */}
                <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between gap-1.5 pointer-events-none">
                  <div className="bg-black/40 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap">
                    {course.lessons} Lessons
                  </div>
                  <div className="bg-black/40 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap">
                    {course.duration}
                  </div>
                  <div className="bg-black/40 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap">
                    {course.comments} Comments
                  </div>
                </div>
              </div>

              {/* Title, Rating & Author */}
              <div className="mt-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg tracking-tight group-hover:text-brand-blue transition-colors leading-snug line-clamp-1">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-1 shrink-0 text-sm font-semibold text-gray-700">
                      <span>{course.rating}</span>
                      <span className="text-gray-300">★</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 font-medium mt-1">
                    by <span className="text-gray-500">{course.author}</span>
                  </p>
                </div>

                {/* Level Badge & Avatars Stack */}
                <div className="mt-4 pt-3 border-t border-gray-100/80 flex items-center justify-between">
                  {/* Beginner Level Badge */}
                  <div className="bg-[#F4F5F7] text-gray-600 text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 font-medium">
                    {/* Signal bars icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3.5 h-3.5 text-gray-500"
                    >
                      <path d="M3 18h3v-3H3v3zm6 0h3v-7H9v7zm6 0h3V7h-3v11zm6 0h3V3h-3v15z" />
                    </svg>
                    <span>{course.level}</span>
                  </div>

                  {/* Student Avatars Stack with 26+ Badge */}
                  <div className="flex items-center">
                    {studentAvatars.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt="Student"
                        className={`w-6 h-6 rounded-full object-cover ring-2 ring-white ${
                          i > 0 ? "-ml-1.5" : ""
                        }`}
                      />
                    ))}
                    <div className="w-6 h-6 rounded-full ring-2 ring-white bg-brand-lime text-black font-bold text-[9px] flex items-center justify-center -ml-1.5 shadow-sm">
                      {course.studentCount}
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-brand-blue font-extrabold text-xl sm:text-2xl">
                    ${course.price}
                  </span>
                  <span className="text-xs text-gray-400 font-normal">/lifetime</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
