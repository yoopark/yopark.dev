import { cn } from '@/utils/cn';

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
      <div className="flex gap-2 items-baseline">
        <h2 className={cn('text-3xl font-bold', hidden && 'hidden')}>
          {title}
        </h2>
        {!hidden && <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />}
      </div>
      {children}
    </section>
  );
};
