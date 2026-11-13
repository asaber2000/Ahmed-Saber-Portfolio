import NavbarAr from "@/components/ar/NavbarAr";
import HeroSectionAr from "@/components/ar/HeroSectionAr";
import ProjectsSectionAr from "@/components/ar/ProjectsSectionAr";
import FragmentsSectionAr from "@/components/ar/FragmentsSectionAr";
import ExperienceSectionAr from "@/components/ar/ExperienceSectionAr";
import EducationSectionAr from "@/components/ar/EducationSectionAr";
import FooterAr from "@/components/ar/FooterAr";

export default function ArabicHome() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-black text-white font-sans selection:bg-[#ff2e7e] selection:text-white"
    >
      <NavbarAr />
      <main className="max-w-5xl mx-auto px-6 md:px-8">
        <HeroSectionAr />
        <ProjectsSectionAr />
        <FragmentsSectionAr />
        <ExperienceSectionAr />
        <EducationSectionAr />
      </main>
      <FooterAr />
    </div>
  );
}