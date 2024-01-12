import { HomeHeaderTitle } from '@/app/components/HomeHeader/HomeHeaderTitle';
import { Navigation } from '@/app/components/Navigation';
import { SocialGroup } from '@/components/SocialGroup';
import type { NavigationLinkType } from '@/types/navigation';

const links: NavigationLinkType[] = [
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Project',
    href: '#project',
    links: [
      {
        title: '42Stat',
        href: '#42-stat',
      },
      {
        title: 'yopark.dev',
        href: '#yopark-dev',
      },
      {
        title: 'Cerebri Class',
        href: '#cerebri-class',
      },
      {
        title: 'LastPong',
        href: '#last-pong',
      },
      {
        title: '밀리루틴',
        href: '#miliroutine',
      },
    ],
  },
  {
    title: 'Education',
    href: '#education',
    links: [
      {
        title: '고려대학교',
        href: '#korea-univ',
      },
      {
        title: '42서울',
        href: '#42-seoul',
      },
    ],
  },
  {
    title: 'Certificate',
    href: '#certificate',
    links: [
      {
        title: 'PCCP Python3',
        href: '#pccp-python3',
      },
      {
        title: '컴퓨터활용능력',
        href: '#computer-specialist',
      },
    ],
  },
];

export const HomeHeader = () => {
  return (
    <header className="flex lg:fixed flex-col w-[300px] gap-14">
      <div className="flex flex-col gap-10">
        <HomeHeaderTitle
          title="박용준"
          description="프론트엔드 개발자"
          bio="🌱🌱🌱🌱"
          mail="yopark.dev@gmail.com"
          phone="+821025336357"
          phoneToShow="010-2533-6357"
        />
        <Navigation links={links} />
      </div>
      <SocialGroup
        githubUrl="https://github.com/yoopark"
        blogUrl="https://blog.yopark.dev"
        linkedInUrl="https://www.linkedin.com/in/yopark-dev"
      />
    </header>
  );
};
