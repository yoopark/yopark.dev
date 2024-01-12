import type { LinkDescription } from '@/types/description';

import { LinkDescriptionListItem } from '@/app/components/LinkDescription/LinkDescriptionListItem';

type LinkDescriptionListProps = {
  linkDescriptions: LinkDescription[];
};

export const LinkDescriptionList = ({
  linkDescriptions,
}: LinkDescriptionListProps) => {
  return (
    <ul className="list-disc list-inside">
      {linkDescriptions.map((linkDescription, idx) => (
        <LinkDescriptionListItem key={idx} linkDescription={linkDescription} />
      ))}
    </ul>
  );
};
