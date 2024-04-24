import Image from 'next/image';

import airplane from '@/assets/airplane.gif';

import { HomeMainFooter } from '@/app/components/HomeMain/HomeMainFooter';
import { AboutSection } from '@/app/components/HomeMain/sections/AboutSection';
import { CertificateSection } from '@/app/components/HomeMain/sections/CertificateSection';
import { EducationSection } from '@/app/components/HomeMain/sections/EducationSection';
import { ToyProjectSection } from '@/app/components/HomeMain/sections/ToyProjectSection';
import { ProjectSection } from '@/app/components/HomeMain/sections/ProjectSection';

export const HomeMain = () => {
  return (
    <main className="flex flex-col gap-28 lg:ml-[300px] pb-20">
      <AboutSection />
      <ProjectSection />
      <ToyProjectSection />
      <EducationSection />
      <CertificateSection />
      <Image
        width={400}
        src={airplane}
        alt="airplane"
        className="select-none"
      />
      <HomeMainFooter />
    </main>
  );
};
