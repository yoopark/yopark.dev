import Image, { StaticImageData } from 'next/image';

import FigmaLogo from '@/assets/icons/figma-logo.svg';
import GithubLogo from '@/assets/icons/github-logo.svg';
import { Highlight } from '@/components/Highlight';
import { Label } from '@/components/Label';
import { PeopleLabel } from '@/components/Label/PeopleLabel';
import { FadeInFromTop } from '@/components/framer-motion/FadeInFromTop';
import type { LinkDescription, SubDescription } from '@/types/description';
import { cn } from '@/utils/cn';

import { LinkDescriptionList } from '@/app/components/LinkDescription/LinkDescriptionList';
import { SubDescriptionList } from '@/app/components/SubDescription/SubDescriptionList';

type ProjectCardProps = {
  title: string;
  id: string /* for anchor */;
  thumbnail?: StaticImageData;
  teamCount: number;
  githubUrl?: string;
  figmaUrl?: string;
  role: string;
  descriptions: string[];
  subDescriptions?: SubDescription[];
  linkDescriptions?: LinkDescription[];
  date: string;
  stacks: string[];
};

export const ProjectCard = ({
  title,
  id,
  thumbnail,
  teamCount,
  githubUrl,
  figmaUrl,
  role,
  descriptions,
  subDescriptions,
  linkDescriptions,
  date,
  stacks,
}: ProjectCardProps) => {
  return (
    <FadeInFromTop>
      <div className="flex flex-col gap-4 md:gap-6 md:flex-row">
        <p className="mt-1.5 text-sm text-gray-700 md:w-16">{date}</p>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col items-baseline gap-2 md:gap-4 md:flex-row">
            <h3 className={cn('text-2xl font-bold', 'pt-16 -mt-16')} id={id}>
              {title}
            </h3>
            <div className="flex items-baseline gap-4">
              <PeopleLabel count={teamCount} />
              <p className="text-sm">{role}</p>
              {githubUrl !== undefined && (
                <a href={githubUrl} target="_blank" rel="noreferrer noopener">
                  <GithubLogo className="w-4 h-4 text-gray-600 transition hover:text-[#171515] hover:scale-125" />
                </a>
              )}
              {figmaUrl !== undefined && (
                <a href={figmaUrl} target="_blank" rel="noreferrer noopener">
                  <FigmaLogo className="w-4 h-4 text-gray-600 transition hover:text-[#ff7262] hover:scale-125" />
                </a>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            {descriptions.map((description, idx) => (
              <Highlight key={idx}>{description}</Highlight>
            ))}
          </div>
          {subDescriptions !== undefined && (
            <SubDescriptionList subDescriptions={subDescriptions} />
          )}
          {linkDescriptions !== undefined && (
            <LinkDescriptionList linkDescriptions={linkDescriptions} />
          )}
          <div className="flex flex-wrap gap-1">
            {stacks.map((stack, idx) => (
              <Label key={idx} text={stack} />
            ))}
          </div>
          {thumbnail !== undefined && (
            <Image
              className={cn(
                'w-4/5 mt-5 rounded-md shadow-lg transition duration-300',
                'grayscale-[.5] hover:grayscale-0',
                'hover:scale-110 hover:translate-x-4 hover:-translate-y-1'
              )}
              src={thumbnail}
              alt={title}
            />
          )}
        </div>
      </div>
    </FadeInFromTop>
  );
};
