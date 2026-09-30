import Banner from "@/components/Banner";
import BrandCarousel from "@/components/BrandCarousel";
import CoursesSection from "@/components/CoursesSection";
import LearningPaths from "@/components/LearningPaths";
import ProfessionalSection from "@/components/ProfessionalSection";

export default function Home() {
  return (
    <>
      <Banner />
      <BrandCarousel />
      <CoursesSection />
      <LearningPaths />
      <ProfessionalSection />
    </>
  );
}