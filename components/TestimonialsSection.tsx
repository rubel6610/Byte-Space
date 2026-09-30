"use client";

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  avatarBg: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80",
    avatarBg: "bg-amber-400",
    content:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80",
    avatarBg: "bg-slate-700",
    content:
      "\"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.\"",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
    avatarBg: "bg-blue-100",
    content:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="relative w-full overflow-hidden py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 select-none"
      style={{
        background:
          "radial-gradient(ellipse 65% 55% at 85% 10%, rgba(226, 255, 140, 0.65) 0%, rgba(235, 255, 170, 0.25) 45%, transparent 75%), radial-gradient(ellipse 55% 45% at 0% 90%, rgba(224, 235, 255, 0.65) 0%, transparent 65%), #ffffff",
      }}
    >
      {/* Ambient background blur orbs */}
      <div className="pointer-events-none absolute -top-12 right-[5%] w-[580px] h-[480px] rounded-full bg-[#E2FF8C]/55 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 w-[550px] h-[550px] rounded-full bg-blue-100/60 blur-[120px]" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Section Header: Title on Left, Subtitle on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start justify-between">
          <div className="lg:col-span-6 xl:col-span-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              Discover What Our <br />
              Community Is Saying
            </h2>
          </div>

          <div className="lg:col-span-6 xl:col-span-6 flex items-center">
            <p className="text-xs sm:text-sm md:text-base text-gray-500 font-normal leading-relaxed">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="mt-14 sm:mt-18 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 justify-items-center">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="w-full max-w-[374px] h-[432px] bg-white rounded-[28px] p-8 sm:p-9 border border-gray-100/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.07)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between select-none"
            >
              <div>
                {/* Author Avatar */}
                <div
                  className={`w-16 h-16 rounded-full p-0.5 overflow-hidden ${item.avatarBg} shadow-sm`}
                >
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>

                {/* Author Name & Role */}
                <div className="mt-6">
                  <h3 className="font-bold text-gray-900 text-xl tracking-tight">
                    {item.name}
                  </h3>
                  <p className="text-brand-blue font-semibold text-xs sm:text-sm mt-1">
                    {item.role}
                  </p>
                </div>

                {/* Testimonial Quote */}
                <p className="mt-6 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
