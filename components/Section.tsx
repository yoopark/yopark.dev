type SectionProps = {
  title?: string;
  id: string /* for anchor */;
} & React.PropsWithChildren;

export const Section = ({ title, id, children }: SectionProps) => {
  return (
    <section id={id} className="flex flex-col gap-10 pt-16 -mt-16">
      {title && (
        <div className="flex gap-2 items-baseline">
          <h2 className="text-3xl font-bold">{title}</h2>
          <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
        </div>
      )}
      {children}
    </section>
  );
};
