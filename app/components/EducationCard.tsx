import { Highlight } from '@/app/components/Highlight';
import { LinkDescriptionList } from '@/app/components/LinkDescription/LinkDescriptionList';
import { SubDescriptionList } from '@/app/components/SubDescription/SubDescriptionList';
import type { LinkDescription, SubDescription } from '@/app/types/description';

type EducationCardProps = {
  title: string;
  id: string /* for anchor */;
  status: string;
  descriptions: string[];
  subDescriptions?: SubDescription[];
  linkDescriptions?: LinkDescription[];
  date: string;
};

export const EducationCard = ({
  title,
  id,
  status,
  descriptions,
  subDescriptions,
  linkDescriptions,
  date,
}: EducationCardProps) => {
  return (
    <div className="flex gap-6">
      <p className="mt-1.5 text-sm text-gray-700 w-16">{date}</p>
      <div className="flex flex-col gap-3">
        <div className="flex items-baseline gap-4">
          <h3 className="pt-16 -mt-16 text-2xl font-bold" id={id}>
            {title}
          </h3>
          <p className="text-sm">{status}</p>
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
      </div>
    </div>
  );
};
