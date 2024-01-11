import People from '@/app/assets/icons/people.svg';

type PeopleLabelProps = {
  count: number;
};

export const PeopleLabel = ({ count }: PeopleLabelProps) => {
  return (
    <div className="flex items-baseline gap-1">
      <People className="w-3 h-3" />
      <p className="text-sm">{count}</p>
    </div>
  );
};
