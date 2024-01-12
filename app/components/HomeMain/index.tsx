import airplane from '@/app/assets/airplane.gif';
import { HomeMainFooter } from '@/app/components/HomeMain/HomeMainFooter';
import { AboutSection } from '@/app/components/HomeMain/sections/AboutSection';
import { CertificateSection } from '@/app/components/HomeMain/sections/CertificateSection';
import { EducationSection } from '@/app/components/HomeMain/sections/EducationSection';
import { ProjectSection } from '@/app/components/HomeMain/sections/ProjectSection';
import Image from 'next/image';

export const HomeMain = () => {
  return (
    <main className="flex flex-col gap-28 lg:ml-[300px] pb-20">
      <AboutSection />
      <ProjectSection />
      <EducationSection />
      <CertificateSection />
      <Image width={400} src={airplane} alt="airplane" />
      <HomeMainFooter />
    </main>
  );
};
