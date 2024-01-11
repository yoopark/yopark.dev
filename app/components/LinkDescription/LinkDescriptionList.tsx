import { LinkDescriptionListItem } from '@/app/components/LinkDescription/LinkDescriptionListItem';
import type { LinkDescription } from '@/app/types/description';

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
