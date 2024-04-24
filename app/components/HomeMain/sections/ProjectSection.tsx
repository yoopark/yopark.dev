import stat_thumbnail from '@/assets/screenshots/42-stat-thumbnail.png';
import last_pong_thumbnail from '@/assets/screenshots/last-pong-thumbnail.png';
import miliroutine_thumbnail from '@/assets/screenshots/miliroutine-thumbnail.png';
import plus_alpha_thumbnail from '@/assets/screenshots/plus-alpha-thumbnail.png';
import { Section } from '@/components/Section';

import { ProjectCard } from '@/app/components/Card/ProjectCard';

export const ProjectSection = () => {
  return (
    <Section title="Project" id="project">
      <ProjectCard
        date="2024.04 — 현재"
        title="블꾸"
        titleId="blccu"
        teamCount={5}
        references={{
          deployUrl: 'https://blccu.com',
          githubUrl:
            'https://github.com/DevKor-github/team-sprint-blccu-frontend',
        }}
        role="프론트엔드 개발 (2인)"
        descriptions={['스티커로 꾸미고 공유하는 블로그 SNS 웹서비스']}
        stacks={[
          'Next.js v14',
          'TailwindCSS',
          'shadcn/ui',
          'Storybook',
          'Vercel',
        ]}
      />
      <ProjectCard
        date="2024.02 — 2024.04 (3개월)"
        title="PlusAlpha"
        titleId="plus-alpha"
        thumbnail={plus_alpha_thumbnail}
        teamCount={4}
        references={{
          deployUrl: 'https://plusalpha.io',
          figmaUrl:
            'https://www.figma.com/community/file/1365012412893824734/plusalpha',
        }}
        role="프론트엔드 개발 (2인)"
        descriptions={['미국 AP Calculus 문제은행, 대시보드, 어드민 웹서비스']}
        subDescriptions={[
          {
            emoji: '🔥',
            text: '유학원으로부터 외주를 받아 개발',
          },
        ]}
        stacks={[
          'Next.js v14',
          'TailwindCSS',
          'shadcn/ui',
          'Chart.js',
          'React-latex-next',
          'AWS Amplify',
        ]}
      />
      <ProjectCard
        date="2023.03 — 2024.02 (1년)"
        title="42Stat"
        titleId="42-stat"
        thumbnail={stat_thumbnail}
        teamCount={5}
        references={{
          deployUrl: 'https://stat.42seoul.kr',
          githubUrl: 'https://github.com/42Statistics/42Stat-Frontend',
          figmaUrl:
            'https://www.figma.com/community/file/1327387579103766914/42stat',
        }}
        role="프론트엔드 개발 (2인)"
        descriptions={[
          '42 API를 가공하여 42서울 교육생의 통계를 보여주는 반응형 대시보드 웹서비스',
        ]}
        subDescriptions={[
          {
            emoji: '🚀',
            text: '출시 당일(’23.08.17.) 300명 가입, 매일 100명 이상의 트래픽 발생',
          },
          {
            emoji: '🏆',
            text: '2023 42서울 소프트웨어 경진대회 대상(과학기술정보통신부 장관상) 수상',
          },
        ]}
        linkDescriptions={[
          {
            href: '/42-stat-2023-inno-con.pdf',
            text: '2023 INNO-CON(이노베이션 아카데미 성과 공유 컨퍼런스) 발표자료',
            type: 'file',
          },
        ]}
        stacks={[
          'React v18',
          'GraphQL (Apollo Client)',
          'ApexCharts',
          'TypeScript',
          'Styled Component',
          'Jotai',
          'AWS S3 + CloudFront',
        ]}
      />
      <ProjectCard
        date="2022.12 — 2023.02 (3개월)"
        title="LastPong"
        titleId="last-pong"
        thumbnail={last_pong_thumbnail}
        teamCount={4}
        references={{
          githubUrl: 'https://github.com/lev-Zero/lastpong',
          figmaUrl:
            'https://www.figma.com/community/file/1199421293253949642/lastpong',
        }}
        role="프론트엔드 개발 (3인)"
        descriptions={['채팅, 초대, 관전이 가능한 실시간 탁구 게임 웹서비스']}
        subDescriptions={[
          {
            emoji: '✨',
            text: '42서울 공통과정 최종 과제',
          },
        ]}
        stacks={[
          'Next.js (Pages Router)',
          'Socket.io',
          'TypeScript',
          'Chakra UI',
          'Zustand',
          'Docker Compose',
        ]}
      />
      <ProjectCard
        date="2022.09 — 2022.12 (4개월)"
        title="밀리루틴"
        titleId="miliroutine"
        thumbnail={miliroutine_thumbnail}
        teamCount={5}
        references={{
          githubUrl:
            'https://github.com/osamhack2022-v2/WEB_AI_MILIROUTINE_MILIROUTINE',
          figmaUrl:
            'https://www.figma.com/community/file/1170373715075438188/miliroutine',
        }}
        role="팀장, 프론트엔드 개발 (2인)"
        descriptions={['군인의 특성을 고려한 루틴 참여 및 추천 웹서비스']}
        subDescriptions={[
          {
            emoji: '🏆',
            text: '2022 OSAM 군장병 해커톤 우수상(공군참모총장상) 수상',
          },
        ]}
        stacks={[
          'React',
          'TypeScript',
          'TailwindCSS',
          'Docker Compose',
          'Microsoft Azure',
        ]}
        linkDescriptions={[
          {
            href: 'https://www.youtube.com/watch?v=h4L3SUrZ61s',
            text: '밀리루틴(MILIROUTINE) 시연 영상',
            type: 'video',
          },
        ]}
      />
    </Section>
  );
};
