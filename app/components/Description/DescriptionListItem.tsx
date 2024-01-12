import { Highlight } from '@/components/Highlight';

type DescriptionListItemProps = {
  description: string;
};

export const DescriptionListItem = ({
  description,
}: DescriptionListItemProps) => {
  return <Highlight>{description}</Highlight>;
};
