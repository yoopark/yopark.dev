type DescriptionListProps = {
  descriptions: string[];
};

export const DescriptionList = ({ descriptions }: DescriptionListProps) => {
  return (
    <div className="flex flex-col gap-1">
      {descriptions.map((description, idx) => (
        <div key={idx}>{description}</div>
      ))}
    </div>
  );
};
