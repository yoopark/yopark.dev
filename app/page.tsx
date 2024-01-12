import { HomeHeader } from '@/app/components/HomeHeader';
import { HomeMain } from '@/app/components/HomeMain';

const Home = () => {
  return (
    <div className="flex flex-col max-w-screen-md gap-20 px-6 pt-6 m-auto md:px-16 md:pt-16 lg:gap-0 lg:px-0 lg:flex-row">
      <HomeHeader />
      <HomeMain />
    </div>
  );
};

export default Home;
