import { DescriptionListItem } from '@/app/components/Description/DescriptionListItem';

type DescriptionListProps = {
  descriptions: string[];
};

export const DescriptionList = ({ descriptions }: DescriptionListProps) => {
  return (
    <div className="flex flex-col gap-1">
      {descriptions.map((description, idx) => (
        <DescriptionListItem key={idx} description={description} />
      ))}
    </div>
  );
};
