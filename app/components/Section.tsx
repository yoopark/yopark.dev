import { cn } from '@/app/utils/cn';

type SectionProps = {
  title: string;
  id: string /* for anchor */;
  hidden?: boolean;
} & React.PropsWithChildren;

export const Section = ({
  title,
  id,
  hidden = false,
  children,
}: SectionProps) => {
  return (
    <section id={id} className="flex flex-col gap-10 pt-16 -mt-16">
      <h2 className={cn('text-3xl font-bold', hidden && 'hidden')}>{title}</h2>
      {children}
    </section>
  );
};
