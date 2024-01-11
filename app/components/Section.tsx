type SectionProps = {
  title: string;
  id: string /* for anchor */;
} & React.PropsWithChildren;

export const Section = ({ title, id, children }: SectionProps) => {
  return (
    <section id={id}>
      <h2 className="text-xl font-bold lg:hidden">{title}</h2>
      {children}
    </section>
  );
};
