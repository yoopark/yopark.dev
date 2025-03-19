import { cn } from "@/utils/cn";

import { HomeHeader } from "@/app/components/HomeHeader";
import { HomeMain } from "@/app/components/HomeMain";

const Home = () => {
  return (
    <div
      className={cn(
        "flex flex-col xl:flex-row max-w-screen-lg",
        "gap-20 lg:gap-0",
        "px-4 pt-4 md:px-12 md:pt-12 mx-auto transition-all"
      )}
    >
      <HomeHeader />
      <HomeMain />
    </div>
  );
};

export default Home;
