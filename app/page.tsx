import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import FragmentsSection from "@/components/FragmentsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#ff2e7e] selection:text-white">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 md:px-8">
        <HeroSection />
        <ProjectsSection />
        <FragmentsSection />
        <ExperienceSection />
        <EducationSection />
      </main>
      <Footer />
    </div>
  );
}