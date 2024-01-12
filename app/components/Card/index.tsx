import { StaticImageData } from 'next/image';

import { FadeInFromTop } from '@/components/framer-motion/FadeInFromTop';
import type { LinkDescription, SubDescription } from '@/types/description';
import { cn } from '@/utils/cn';

import { CardThumbnail } from '@/app/components/Card/CardThumbnail';
import { DescriptionList } from '@/app/components/Description/DescriptionList';
import { LinkDescriptionList } from '@/app/components/LinkDescription/LinkDescriptionList';
import { SubDescriptionList } from '@/app/components/SubDescription/SubDescriptionList';

export type CardProps = {
  date: string;
  title: string;
  titleId: string /* for anchor */;
  subTitleNode?: React.ReactNode;
  descriptions?: string[];
  subDescriptions?: SubDescription[];
  linkDescriptions?: LinkDescription[];
  belowDescriptionNode?: React.ReactNode;
  thumbnail?: StaticImageData;
};

export const Card = ({
  date,
  title,
  titleId,
  subTitleNode,
  descriptions,
  subDescriptions,
  linkDescriptions,
  belowDescriptionNode,
  thumbnail,
}: CardProps) => {
  return (
    <FadeInFromTop>
      <div className="flex flex-col gap-4 md:gap-6 md:flex-row">
        <p className="mt-1.5 text-sm text-gray-700 md:w-16">{date}</p>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col items-baseline gap-2 md:gap-4 md:flex-row">
            <h3
              className={cn('text-2xl font-bold', 'pt-16 -mt-16')}
              id={titleId}
            >
              {title}
            </h3>
            {subTitleNode !== undefined && (
              <div className="flex items-baseline gap-4">{subTitleNode}</div>
            )}
          </div>
          {descriptions !== undefined && (
            <DescriptionList descriptions={descriptions} />
          )}
          {subDescriptions !== undefined && (
            <SubDescriptionList subDescriptions={subDescriptions} />
          )}
          {linkDescriptions !== undefined && (
            <LinkDescriptionList linkDescriptions={linkDescriptions} />
          )}
          {belowDescriptionNode !== undefined && belowDescriptionNode}
          {thumbnail !== undefined && (
            <CardThumbnail src={thumbnail} alt={title} />
          )}
        </div>
      </div>
    </FadeInFromTop>
  );
};
