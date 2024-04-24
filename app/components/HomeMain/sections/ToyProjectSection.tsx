import blog_thumbnail from '@/assets/screenshots/blog-thumbnail.png';
import cerebri_class_thumbnail from '@/assets/screenshots/cerebri-class-thumbnail.png';
import keukrak_thumbnail from '@/assets/screenshots/keukrak-thumbnail.png';
import { Section } from '@/components/Section';

import { ProjectCard } from '@/app/components/Card/ProjectCard';

export const ToyProjectSection = () => {
  return (
    <Section title="Toy Project" id="toy-project">
      <ProjectCard
        date="2024.03 (2일)"
        title="극락 퀴즈쇼"
        titleId="keukrak"
        thumbnail={keukrak_thumbnail}
        teamCount={4}
        references={{
          deployUrl: 'https://keukrak.r4bb1t.dev',
        }}
        role="프롬프트 엔지니어링"
        descriptions={["'친구 사이에 숨은 AI 찾기' 컨셉의 채팅형 퀴즈 서비스"]}
        subDescriptions={[
          {
            emoji: '🏆',
            text: '2024 SKYST 해커톤(서울대, 고려대, 연세대, 카이스트 컴퓨터 동아리) 대상 수상',
          },
        ]}
        linkDescriptions={[
          {
            href: '/keukrak-ppt.pdf',
            text: '발표자료',
            type: 'file',
          },
        ]}
        stacks={['Next.js (App Router)', 'WebSocket', 'GPT-4']}
      />
      <ProjectCard
        date="2024.01 (1주)"
        title="개인 개발 블로그"
        titleId="blog-yopark-dev"
        thumbnail={blog_thumbnail}
        teamCount={1}
        references={{
          deployUrl: 'https://blog.yopark.dev',
          githubUrl: 'https://github.com/yoopark/blog.yopark.dev',
        }}
        role="1인 개발"
        stacks={[
          'Next.js (App Router)',
          'Contentlayer',
          'TailwindCSS',
          'Framer Motion',
          'Vercel',
        ]}
      />
      <ProjectCard
        date="2024.01 (1주)"
        title="개인 포트폴리오 사이트"
        titleId="yopark-dev"
        teamCount={1}
        references={{
          deployUrl: 'https://yopark.dev',
          githubUrl: 'https://github.com/yoopark/yopark.dev',
        }}
        role="1인 개발"
        descriptions={['지금 보고 계신 사이트']}
        stacks={[
          'Next.js (App Router)',
          'TailwindCSS',
          'Framer Motion',
          'Vercel',
        ]}
      />
      <ProjectCard
        date="2023.04 (2주)"
        title="Cerebri Class"
        titleId="cerebri-class"
        thumbnail={cerebri_class_thumbnail}
        teamCount={1}
        references={{
          githubUrl: 'https://github.com/storyboard-lab/cerebri-class',
        }}
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
    </Section>
  );
};
