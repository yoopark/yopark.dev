import { Highlight } from '@/app/components/Highlight';
import { AboutSectionCallout } from '@/app/components/HomeMain/sections/AboutSectionCallout';
import { AboutSectionIntro } from '@/app/components/HomeMain/sections/AboutSectionIntro';
import { Section } from '@/app/components/Section';

export const AboutSection = () => {
  return (
    <Section title="About" id="about" hidden>
      <AboutSectionCallout />
      <AboutSectionIntro />
      <div className="mt-4">
        <p className="float-right text-gray-600">
          <a href="/clair-de-lune.pdf">
            <Highlight>📎 이력서 파일 다운로드</Highlight>
          </a>
        </p>
      </div>
    </Section>
  );
};