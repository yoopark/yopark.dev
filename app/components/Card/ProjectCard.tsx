import { LinkIcon } from 'lucide-react';

import FigmaLogo from '@/assets/icons/figma-logo.svg';
import GithubLogo from '@/assets/icons/github-logo.svg';
import { Label } from '@/components/Label';
import { PeopleLabel } from '@/components/Label/PeopleLabel';
import { NewTabAnchor } from '@/components/NewTabAnchor';

import { Card, CardProps } from '@/app/components/Card';

type ProjectCardProps = Omit<
  CardProps,
  'subTitleNode' | 'belowDescriptionNode'
> & {
  teamCount: number;
  teamComposition?: string;
  references: {
    deployUrl?: string;
    githubUrl?: string;
    figmaUrl?: string;
  };
  role: string;
  stacks: string[];
};

export const ProjectCard = ({
  teamCount,
  teamComposition,
  references: { deployUrl, githubUrl, figmaUrl },
  role,
  stacks,
  ...props
}: ProjectCardProps) => {
  const subTitleNode = (
    <>
      <div className="flex items-baseline gap-1.5">
        <PeopleLabel count={teamCount} />
        {teamComposition !== undefined && (
          <p className="text-xs text-gray-500">{teamComposition}</p>
        )}
      </div>
      <p className="text-sm">{role}</p>
      {deployUrl !== undefined && (
        <NewTabAnchor href={deployUrl}>
          <LinkIcon className="w-4 h-4 text-gray-600 transition hover:text-[#2f80ed] hover:scale-125" />
        </NewTabAnchor>
      )}
      {githubUrl !== undefined && (
        <NewTabAnchor href={githubUrl}>
          <GithubLogo className="w-4 h-4 text-gray-600 transition hover:text-[#171515] hover:scale-125" />
        </NewTabAnchor>
      )}
      {figmaUrl !== undefined && (
        <NewTabAnchor href={figmaUrl}>
          <FigmaLogo className="w-4 h-4 text-gray-600 transition hover:text-[#ff7262] hover:scale-125" />
        </NewTabAnchor>
      )}
    </>
  );

  const belowDescriptionNode = (
    <div className="flex flex-wrap gap-1">
      {stacks.map((stack, idx) => (
        <Label key={idx} text={stack} />
      ))}
    </div>
  );

  return (
    <Card
      {...props}
      subTitleNode={subTitleNode}
      belowDescriptionNode={belowDescriptionNode}
    />
  );
};
