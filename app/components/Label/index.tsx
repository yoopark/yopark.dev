type LabelProps = {
  text: string;
};

export const Label = ({ text }: LabelProps) => {
  return (
    <div className="px-2 py-0.5 bg-gray-100 rounded-2xl hover:bg-blue-500 transition hover:text-white">
      <p className="text-xs">{text}</p>
    </div>
  );
};
