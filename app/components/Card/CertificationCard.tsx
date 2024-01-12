import { Card, CardProps } from '@/app/components/Card';

type CertificateCardProps = Omit<
  CardProps,
  'subTitleNode' | 'belowDescriptionNode' | 'thumbnail'
> & {
  grade: string;
};

export const CertificateCard = ({ grade, ...props }: CertificateCardProps) => {
  return <Card {...props} subTitleNode={<p className="text-sm">{grade}</p>} />;
};
