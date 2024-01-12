import { Card, CardProps } from '@/app/components/Card';

type EducationCardProps = Omit<
  CardProps,
  'subTitleNode' | 'belowDescriptionNode' | 'thumbnail'
> & {
  status: string;
};

export const EducationCard = ({ status, ...props }: EducationCardProps) => {
  return <Card {...props} subTitleNode={<p className="text-sm">{status}</p>} />;
};
