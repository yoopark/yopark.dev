import { LinkDescriptionList } from '@/app/components/LinkDescription/LinkDescriptionList';
import { SubDescriptionList } from '@/app/components/SubDescription/SubDescriptionList';
import { Highlight } from '@/components/Highlight';
import { FadeInFromTop } from '@/components/framer-motion/FadeInFromTop';
import type { LinkDescription, SubDescription } from '@/types/description';

type CertificateCardProps = {
  title: string;
  id: string /* for anchor */;
  grade: string;
  descriptions?: string[];
  subDescriptions?: SubDescription[];
  linkDescriptions?: LinkDescription[];
  date: string;
};

export const CertificateCard = ({
  title,
  id,
  grade,
  descriptions,
  subDescriptions,
  linkDescriptions,
  date,
}: CertificateCardProps) => {
  return (
    <FadeInFromTop>
      <div className="flex gap-6">
        <p className="mt-1.5 text-sm text-gray-700 w-16">{date}</p>
        <div className="flex flex-col gap-3">
          <div className="flex items-baseline gap-4">
            <h3 className="pt-16 -mt-16 text-2xl font-bold" id={id}>
              {title}
            </h3>
            <p className="text-sm">{grade}</p>
          </div>
          {descriptions !== undefined && (
            <div className="flex flex-col gap-1">
              {descriptions.map((description, idx) => (
                <Highlight key={idx}>{description}</Highlight>
              ))}
            </div>
          )}
          {subDescriptions !== undefined && (
            <SubDescriptionList subDescriptions={subDescriptions} />
          )}
          {linkDescriptions !== undefined && (
            <LinkDescriptionList linkDescriptions={linkDescriptions} />
          )}
        </div>
      </div>
    </FadeInFromTop>
  );
};
