import { HomeMainFooter } from "@/app/components/HomeMain/HomeMainFooter";
import { AboutSection } from "@/app/components/HomeMain/sections/AboutSection";
import { CertificateSection } from "@/app/components/HomeMain/sections/CertificateSection";
import { EducationSection } from "@/app/components/HomeMain/sections/EducationSection";
import { ProjectSection } from "@/app/components/HomeMain/sections/ProjectSection";
import { StudySection } from "@/app/components/HomeMain/sections/StudySection";
import { ToyProjectSection } from "@/app/components/HomeMain/sections/ToyProjectSection";

export const HomeMain = () => {
  return (
    <main className="flex flex-col gap-28 lg:ml-[300px] pb-20">
      <AboutSection />
      <ProjectSection />
      <ToyProjectSection />
      <EducationSection />
      <StudySection />
      <CertificateSection />
      <HomeMainFooter />
    </main>
  );
};
