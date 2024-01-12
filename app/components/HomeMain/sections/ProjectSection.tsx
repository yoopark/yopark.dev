import stat_thumbnail from '@/app/assets/screenshots/42-stat-thumbnail.png';
import cerebri_class_thumbnail from '@/app/assets/screenshots/cerebri-class-thumbnail.png';
import last_pong_thumbnail from '@/app/assets/screenshots/last-pong-thumbnail.png';
import miliroutine_thumbnail from '@/app/assets/screenshots/miliroutine-thumbnail.png';
import { ProjectCard } from '@/app/components/ProjectCard';
import { Section } from '@/app/components/Section';

export const ProjectSection = () => {
  return (
    <Section title="Project" id="project">
      <ProjectCard
        title="42Stat"
        id="42-stat"
        thumbnail={stat_thumbnail}
        teamCount={5}
        githubUrl="https://github.com/42Statistics/42Stat-Frontend"
        figmaUrl="https://www.figma.com/community/file/1327387579103766914/42stat"
        role="프론트엔드 개발"
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
        date="2023.03 — 현재"
        stacks={[
          'React',
          'GraphQL',
          'ApexCharts',
          'TypeScript',
          'Styled Component',
          'Jotai',
          'AWS S3 + CloudFront',
        ]}
      />
      <ProjectCard
        title="yopark.dev"
        id="yopark-dev"
        teamCount={1}
        githubUrl="https://github.com/yoopark/yopark.dev"
        role="1인 개발"
        descriptions={['지금 보고 계신 사이트']}
        date="2023.06, 2024.01"
        stacks={['Next.js (App Router)', 'TailwindCSS', 'Vercel']}
      />
      <ProjectCard
        title="Cerebri Class"
        id="cerebri-class"
        thumbnail={cerebri_class_thumbnail}
        teamCount={1}
        githubUrl="https://github.com/storyboard-lab/cerebri-class"
        role="1인 개발"
        descriptions={[
          '영단어를 입력하면 문제를 생성하여 Word 학습지를 제작해주는 웹서비스',
        ]}
        subDescriptions={[
          {
            emoji: '🔥',
            text: '교내 스타트업 팀으로부터 MVP 제작 의뢰를 받아 간단히 개발',
          },
        ]}
        date="2023.04"
        stacks={[
          'React',
          'FastAPI',
          'Python-docx',
          'TypeScript',
          'Styled Component',
          'ChatGPT',
          'Docker Compose',
          'AWS S3 + CloudFront',
        ]}
      />
      <ProjectCard
        title="LastPong"
        id="last-pong"
        thumbnail={last_pong_thumbnail}
        teamCount={4}
        githubUrl="https://github.com/lev-Zero/lastpong"
        figmaUrl="https://www.figma.com/community/file/1199421293253949642/lastpong"
        role="프론트엔드 개발"
        descriptions={['채팅, 초대, 관전이 가능한 실시간 탁구 게임 웹서비스']}
        subDescriptions={[
          {
            emoji: '✨',
            text: '42서울 공통과정 최종 과제',
          },
        ]}
        date="2022.12 — 2023.01"
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
        title="밀리루틴"
        id="miliroutine"
        thumbnail={miliroutine_thumbnail}
        teamCount={5}
        githubUrl="https://github.com/osamhack2022-v2/WEB_AI_MILIROUTINE_MILIROUTINE"
        figmaUrl="https://www.figma.com/community/file/1170373715075438188/miliroutine"
        role="팀장"
        descriptions={['군인의 특성을 고려한 루틴 참여 및 추천 웹서비스']}
        subDescriptions={[
          {
            emoji: '🏆',
            text: '2022 OSAM 군장병 해커톤 우수상(공군참모총장상) 수상',
          },
        ]}
        date="2022.09 — 2022.12"
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
