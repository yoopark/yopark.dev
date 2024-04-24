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
        title="블꾸 (개발 중)"
        titleId="blccu"
        teamCount={5}
        references={{
          deployUrl: 'https://blccu.com',
          githubUrl:
            'https://github.com/DevKor-github/team-sprint-blccu-frontend',
        }}
        role="프론트엔드 개발"
        descriptions={['스티커로 꾸미고 공유하는 블로그 SNS 웹서비스']}
        subDescriptions={[
          {
            emoji: '🧪',
            text: 'DevKor 2024-1학기 Team Sprint 프로젝트',
          },
          {
            emoji: '🧑‍💻',
            text: '디자인 토큰, 기본 UI 컴포넌트부터 개발하는 상향식 개발 방식 채택',
          },
          {
            emoji: '🧑‍💻',
            text: '스토리북을 사용하여 shadcn/ui 기반의 컴포넌트 커스텀 - 변경에 유연하고 안정성이 높음',
          },
          {
            emoji: '🧑‍💻',
            text: '페이지 당 컴포넌트 수가 적고 페이지 이동이 많은 모바일 플로우 개발 경험',
          },
          {
            emoji: '🧑‍💻',
            text: '온보딩, 회원탈퇴 등 퍼널 구조 개발 경험',
          },
        ]}
        stacks={[
          'Next.js v14',
          'TailwindCSS',
          'shadcn/ui',
          'Storybook',
          'Vercel',
        ]}
      />
      <ProjectCard
        date="2024.02 — 2024.04 (2개월)"
        title="PlusAlpha"
        titleId="plus-alpha"
        thumbnail={plus_alpha_thumbnail}
        teamCount={4}
        references={{
          deployUrl: 'https://plusalpha.io',
          figmaUrl:
            'https://www.figma.com/community/file/1365012412893824734/plusalpha',
        }}
        role="프론트엔드 개발, 디자인"
        descriptions={['미국 AP Calculus 문제은행, 대시보드, 어드민 웹서비스']}
        subDescriptions={[
          {
            emoji: '🔥',
            text: '유학원으로부터 외주를 받아 개발',
          },
          {
            emoji: '🧑‍💻',
            text: '직접 피그마를 제작하여 클라이언트 요구사항에 대한 충분한 소통',
          },
          {
            emoji: '🧑‍💻',
            text: 'Next.js에서의 반응형 차트 대시보드 개발 경험',
          },
          {
            emoji: '🧑‍💻',
            text: 'SSR Fetching 시 HttpOnly 쿠키를 전달하는 과정에 대한 이해',
          },
          {
            emoji: '🧑‍💻',
            text: '문의하기, 설정 변경, 어드민 등 React Hook Form 사용 경험',
          },
        ]}
        stacks={[
          'Next.js v14',
          'TailwindCSS',
          'shadcn/ui',
          'React Hook Form',
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
        role="프론트엔드 개발, 기획, 디자인"
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
          {
            emoji: '🧑‍💻',
            text: 'CSS Grid를 이용한 반응형 차트 대시보드 개발 경험',
          },
          {
            emoji: '🧑‍💻',
            text: 'GraphQL · Apollo Client · Codegen을 활용하여 Dto의 Type Safety를 간편하게 보장',
          },
          {
            emoji: '🧑‍💻',
            text: 'Dialog, Segmented Control, Switch, Tab, Tooltip 등 20여 종의 기본 UI 컴포넌트 직접 제작',
          },
          {
            emoji: '🧑‍💻',
            text: '페이지네이션, 무한 스크롤, 스포트라이트 이용 검색, 연간 활동 실적 잔디 등 다양한 기능 제작 경험',
          },
          {
            emoji: '🧑‍💻',
            text: 'Lighthouse 수치 향상 경험 - Lazy Loading 및 Skeleton을 통한 성능 개선, SEO 최적화, VoiceOver를 직접 이용하며 웹 접근성 향상',
          },
          {
            emoji: '🧑‍💻',
            text: '다크모드 지원, 디자인 토큰 체계의 중요성에 대한 이해',
          },
          {
            emoji: '🧑‍💻',
            text: 'Git Rebase, Cherry-pick 등을 통한 협업 경험, Github Actions를 이용한 Project Board 자동화 경험',
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
        role="프론트엔드 개발, 디자인"
        descriptions={['채팅, 초대, 관전이 가능한 실시간 탁구 게임 웹서비스']}
        subDescriptions={[
          {
            emoji: '✨',
            text: '42서울 공통과정 최종 과제',
          },
          {
            emoji: '🧑‍💻',
            text: '피그마의 변수화, 오토 레이아웃, 컴포넌트-인스턴스 기능 사용 경험',
          },
          {
            emoji: '🧑‍💻',
            text: '채팅, 초대, 게임 등 Socket.io를 이용한 소켓 통신 경험, Namespace & Room 개념 이해',
          },
          {
            emoji: '🧑‍💻',
            text: 'Zustand를 이용한 전역 상태 관리 경험',
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
        date="2022.09 — 2022.12 (3개월)"
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
        role="팀장, 프론트엔드 개발, 디자인, DB 설계, 배포"
        descriptions={['군인의 특성을 고려한 루틴 참여 및 추천 웹서비스']}
        subDescriptions={[
          {
            emoji: '🏆',
            text: '2022 OSAM 군장병 해커톤 우수상(공군참모총장상) 수상',
          },
          {
            emoji: '🧑‍💻',
            text: '멘토님의 피드백을 통해 불필요한 기능 제거 및 MVP 제작의 중요성 체감',
          },
          {
            emoji: '🧑‍💻',
            text: '군 복무 중인 팀원들의 특성을 고려하여 매주 온라인 스크럼 진행',
          },
          {
            emoji: '🧑‍💻',
            text: 'FE - BE - DB 간 API 명세, DB 스키마 명세를 통한 협업 진행',
          },
          {
            emoji: '🧑‍💻',
            text: 'Github Codespace + Docker Compose 환경에서의 개발 경험',
          },
          {
            emoji: '🧑‍💻',
            text: '도메인(miliroutine.co.kr) 구매 경험, CORS, HTTP-HTTPS Mixed Error 등 이슈 경험',
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
