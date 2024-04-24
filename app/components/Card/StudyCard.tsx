import GithubLogo from '@/assets/icons/github-logo.svg';
import NotionLogo from '@/assets/icons/notion-logo.svg';
import { PeopleLabel } from '@/components/Label/PeopleLabel';
import { NewTabAnchor } from '@/components/NewTabAnchor';

import { Card, CardProps } from '@/app/components/Card';

type StudyCardProps = Omit<CardProps, 'belowDescriptionNode' | 'thumbnail'> & {
  teamCount: number;
  references: {
    githubUrl?: string;
    notionUrl?: string;
  };
  role: string;
};

export const StudyCard = ({
  teamCount,
  references: { githubUrl, notionUrl },
  role,
  ...props
}: StudyCardProps) => {
  const subTitleNode = (
    <>
      <PeopleLabel count={teamCount} />
      <p className="text-sm">{role}</p>
      {githubUrl !== undefined && (
        <NewTabAnchor href={githubUrl}>
          <GithubLogo className="w-4 h-4 text-gray-600 transition hover:text-[#171515] hover:scale-125" />
        </NewTabAnchor>
      )}
      {notionUrl !== undefined && (
        <NewTabAnchor href={notionUrl}>
          <NotionLogo className="w-4 h-4 text-gray-600 transition hover:text-[#000000] hover:scale-125" />
        </NewTabAnchor>
      )}
    </>
  );

  return <Card {...props} subTitleNode={subTitleNode} />;
};
