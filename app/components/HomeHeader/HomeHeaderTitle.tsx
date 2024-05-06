import { HomeHeaderContact } from '@/app/components/HomeHeader/HomeHeaderContact';

type HomeHeaderTitleProps = {
  title: string;
  description: string;
  bio: string;
  mail: string;
};

export const HomeHeaderTitle = ({
  title,
  description,
  bio,
  mail,
}: HomeHeaderTitleProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-5xl font-bold text-gray-900">{title}</h1>
      <div className="flex flex-col">
        <p className="text-xl text-gray-900">{description}</p>
        <p className="text-sm text-gray-700">{bio}</p>
      </div>
      <HomeHeaderContact mail={mail} />
    </div>
  );
};
