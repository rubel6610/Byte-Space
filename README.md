<div align="center">
  <img src="public/logo.png" alt="ByteSpace Logo" width="80" height="80" />
  <h1>🚀 ByteSpace</h1>
  <p><strong>A Modern, High-Performance Online Course & Learning Platform</strong></p>

  <p>
    <a href="https://byte-space-rosy.vercel.app/" target="_blank">
      <img src="https://img.shields.io/badge/Live_Demo-0038FF?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
    </a>
    <a href="https://github.com/rubel6610/Byte-Space" target="_blank">
      <img src="https://img.shields.io/badge/GitHub_Repository-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repo" />
    </a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Next.js_15-black?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/React_19-blue?style=flat-square&logo=react&logoColor=white" alt="React 19" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel" />
  </p>
</div>

---

## 🌟 Overview

**ByteSpace** is an educational marketplace web application designed with a dynamic 3D visual aesthetic, smooth micro-animations, and an architectural grid design system. It allows learners to explore trending courses, discover personalized learning paths, and empowers educators to publish and monetize their knowledge.

🔗 **Live Deployment:** [https://byte-space-rosy.vercel.app](https://byte-space-rosy.vercel.app/)  
📁 **Repository:** [https://github.com/rubel6610/Byte-Space](https://github.com/rubel6610/Byte-Space)

---

## ✨ Features

- **🎨 Modern Design & 3D Aesthetics**: High-vibrancy electric blue (`#0038FF`) and neon lime (`#CAFF04`) palette paired with 3D decorative assets, floating interactive badges, and architectural grid backgrounds.
- **⚡ Fixed Navigation**: Responsive navbar with desktop navigation, mobile drawer menu, and route-aware rendering.
- **🔍 Hero Search & Badges**: Interactive course search pill with floating 3D metric cards (*UI/UX Design*, *Learning Progress*, *Happy Students*).
- **🔄 Brand Carousel**: Infinite, buttery-smooth marquee displaying partner brands and institutions.
- **📚 Interactive Courses Section**: Rich course cards with real-time multi-category filtering (`Featured`, `Music`, `UI/UX Design`, `Development`, `Data Science`, etc.) and expandable categories toggle.
- **🗺️ Learning Paths**: 6 distinct category learning cards (`Design`, `Development`, `IT & Software`, `Business`, `Marketing`, `Photography`) with quick-action arrow buttons.
- **📈 Professional Growth & Creator Ecosystem**: Two-part showcase section highlighting career growth metrics and creator course management tools with custom ambient gradient accents.
- **🚀 Creator CTA Banner**: 488px height electric blue CTA banner with 3D vectors inviting instructors to join the creator platform.
- **💬 Testimonials Grid**: Curated community reviews displayed in styled cards (`374px × 432px`) within a centered container.
- **🔐 Auth Pages (Login & Sign Up)**: Dedicated, standalone authentication experiences with email/password validation, social login buttons (Google & Facebook), and 3D visual showcase cards.
- **🦶 Comprehensive Footer**: Newsletter subscription with pill search button, categorized links, and legal disclosures.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Frontend Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Font**: [Geist Sans & Mono](https://vercel.com/font)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📁 Project Structure

```text
byteSpace/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx      # Login / Sign In page
│   │   ├── signin/page.tsx     # Sign In route
│   │   ├── signup/page.tsx     # Registration page
│   │   └── join/page.tsx       # Join route
│   ├── globals.css             # Tailwind v4 theme & grid patterns
│   ├── layout.tsx              # Root HTML & body layout
│   └── page.tsx                # Main landing page
├── components/
│   ├── Banner.tsx              # Hero banner with 3D visuals & badges
│   ├── BrandCarousel.tsx       # Infinite smooth brand marquee
│   ├── CoursesSection.tsx      # Filterable course cards grid
│   ├── CreatorCTA.tsx          # 488px Creator call-to-action banner
│   ├── Footer.tsx              # Footer with newsletter & links
│   ├── LearningPaths.tsx       # Category learning path cards
│   ├── Navbar.tsx              # Responsive top navigation header
│   ├── ProfessionalSection.tsx # Growth & course creation metrics
│   └── TestimonialsSection.tsx # Community testimonial cards
├── public/
│   ├── banner/                 # 3D vector graphics & hero assets
│   ├── brand-carousel/         # Partner brand logos
│   ├── cta/                    # CTA 3D decorative elements
│   ├── login/                  # Auth 3D composite preview card
│   ├── professional/           # Professional section images
│   └── logo.png                # ByteSpace brand logo
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rubel6610/Byte-Space.git
cd Byte-Space
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for production

```bash
npm run build
npm run start
```

---

## 🌐 Deployment

This application is deployed on **Vercel**. 

- **Live URL**: [https://byte-space-rosy.vercel.app](https://byte-space-rosy.vercel.app/)
- **Alternative Preview**: [https://byte-space-3nq786qkz-rubel6610s-projects.vercel.app](https://byte-space-3nq786qkz-rubel6610s-projects.vercel.app/)

---

## 👤 Author

- **GitHub**: [@rubel6610](https://github.com/rubel6610)
- **Project Repository**: [rubel6610/Byte-Space](https://github.com/rubel6610/Byte-Space)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
