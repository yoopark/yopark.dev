type HomeHeaderContactProps = {
  mail: string;
};

export const HomeHeaderContact = ({ mail }: HomeHeaderContactProps) => {
  return (
    <div className="flex flex-col gap-0.5 text-sm text-gray-600">
      <a href={`mailto:${mail}`} className="hover:text-blue-600">
        {mail}
      </a>
    </div>
  );
};
