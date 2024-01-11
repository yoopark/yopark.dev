import GithubLogo from '@/app/assets/icons/github-logo.svg';
import { Highlight } from '@/app/components/Highlight';
import { Label } from '@/app/components/Label';
import { PeopleLabel } from '@/app/components/Label/PeopleLabel';
import { LinkDescriptionList } from '@/app/components/LinkDescription/LinkDescriptionList';
import { SubDescriptionList } from '@/app/components/SubDescription/SubDescriptionList';
import type { LinkDescription, SubDescription } from '@/app/types/description';
import Image, { StaticImageData } from 'next/image';

type ProjectCardProps = {
  title: string;
  id: string /* for anchor */;
  thumbnail?: StaticImageData;
  teamCount: number;
  githubUrl?: string;
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
  role,
  descriptions,
  subDescriptions,
  linkDescriptions,
  date,
  stacks,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 md:flex-row">
      <p className="mt-1.5 text-sm text-gray-700 md:w-16">{date}</p>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col items-baseline gap-2 md:gap-4 md:flex-row">
          <h3 className="pt-16 -mt-16 text-2xl font-bold" id={id}>
            {title}
          </h3>
          <div className="flex items-baseline gap-4">
            <PeopleLabel count={teamCount} />
            <p className="text-sm">{role}</p>
            {githubUrl !== undefined && (
              <a href={githubUrl} target="_blank" rel="noreferrer noopener">
                <GithubLogo className="w-4 h-4 text-gray-600 transition hover:text-[#171515]" />
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
            className="w-4/5 mt-5 rounded-md shadow-lg"
            src={thumbnail}
            alt={title}
          />
        )}
      </div>
    </div>
  );
};
