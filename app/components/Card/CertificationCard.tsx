import { Card, CardProps } from '@/app/components/Card';

type CertificateCardProps = Omit<
  CardProps,
  'subTitleNode' | 'belowDescriptionNode' | 'thumbnail'
> & {
  host?: string;
};

export const CertificateCard = ({ host, ...props }: CertificateCardProps) => {
  return (
    <Card
      {...props}
      subTitleNode={
        host === undefined ? undefined : <p className="text-sm">{host}</p>
      }
    />
  );
};
