import { Section } from "@/components/Section";

import { AboutSectionCallout } from "@/app/components/HomeMain/sections/AboutSectionCallout";
import { AboutSectionIntro } from "@/app/components/HomeMain/sections/AboutSectionIntro";

export const AboutSection = () => {
  return (
    <Section id="about">
      <AboutSectionCallout />
      <AboutSectionIntro />
      {/* <div>
        <p className="text-gray-600">
          <NewTabAnchor href="/박용준 이력서.pdf">
            <Highlight>📎 이력서 PDF 링크</Highlight>
          </NewTabAnchor>
        </p>
      </div> */}
    </Section>
  );
};
