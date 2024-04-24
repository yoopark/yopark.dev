import { Section } from '@/components/Section';

import { StudyCard } from '@/app/components/Card/StudyCard';

export const StudySection = () => {
  return (
    <Section title="Study" id="study">
      <StudyCard
        date="2024.03 — 현재"
        title="우테코 따라잡기 (근데 이제 Next.js를 곁들인)"
        titleId="not-woowacourse"
        teamCount={5}
        references={{
          githubUrl: 'https://github.com/not-woowacourse',
          notionUrl:
            'https://yopark.notion.site/Next-js-ae89c879b8f948f4a3c841d317fa7849',
        }}
        role="세션장"
        descriptions={[
          '동일한 보일러플레이트, 동일한 구현과제를 풀어보며 기초가 탄탄한 Next.js 개발자가 되기 위한 스터디',
        ]}
        subDescriptions={[
          {
            emoji: '📚',
            text: 'KUCC 2024-1학기 세션으로 진행',
          },
          {
            emoji: '🔧',
            text: '구현과제 제작, 과제용 백엔드 제작 및 배포, 세션 진행 등 스터디 운영 담당',
          },
        ]}
        linkDescriptions={[
          {
            href: '/not-woowacourse-ot.pdf',
            text: 'OT 발표자료',
            type: 'file',
          },
          {
            href: 'https://github.com/not-woowacourse/1-toodoo-frontend',
            text: '구현과제 1 레포 : Axios + React Query를 활용한 TODO 구현',
            type: 'link',
          },
        ]}
      />
    </Section>
  );
};
