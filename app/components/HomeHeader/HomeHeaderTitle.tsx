import { HomeHeaderContact } from '@/app/components/HomeHeader/HomeHeaderContact';

type HomeHeaderTitleProps = {
  title: string;
  description: string;
  mail: string;
};

export const HomeHeaderTitle = ({
  title,
  description,
  mail,
}: HomeHeaderTitleProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-5xl font-bold text-gray-900">{title}</h1>
      <div className="flex flex-col gap-1">
        <p className="text-xl text-gray-900">{description}</p>
        <HomeHeaderContact mail={mail} />
      </div>
    </div>
  );
};
