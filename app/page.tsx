import { cn } from "@/utils/cn";

import { HomeHeader } from "@/app/components/HomeHeader";
import { HomeMain } from "@/app/components/HomeMain";

const Home = () => {
  return (
    <div
      className={cn(
        "max-w-screen-md m-auto",
        "flex flex-col lg:flex-row",
        "gap-20 lg:gap-0",
        "px-6 pt-6 md:px-16 md:pt-16 lg:px-0"
      )}
    >
      <HomeHeader />
      <HomeMain />
    </div>
  );
};

export default Home;
