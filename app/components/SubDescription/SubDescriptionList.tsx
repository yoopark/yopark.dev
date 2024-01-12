import { SubDescriptionListItem } from '@/app/components/SubDescription/SubDescriptionListItem';
import type { SubDescription } from '@/types/description';

type SubDescriptionListProps = {
  subDescriptions: SubDescription[];
};

export const SubDescriptionList = ({
  subDescriptions,
}: SubDescriptionListProps) => {
  return (
    <ul className="list-disc list-inside">
      {subDescriptions.map((subDescription, idx) => (
        <SubDescriptionListItem key={idx} subDescription={subDescription} />
      ))}
    </ul>
  );
};
