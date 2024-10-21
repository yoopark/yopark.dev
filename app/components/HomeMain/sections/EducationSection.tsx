import { Section } from '@/components/Section';

import { EducationCard } from '@/app/components/Card/EducationCard';

export const EducationSection = () => {
  return (
    <Section title="Education" id="education">
      <EducationCard
        date="2019.03. — 현재"
        title="고려대학교"
        titleId="korea-univ"
        status="4학년 2학기 재학 중"
        descriptions={['정치외교학 전공', '통계학 이중전공']}
        subDescriptions={[
          {
            emoji: '🐯',
            text: '학점 : 3.88 / 4.5',
          },
          {
            emoji: '✌️',
            text: '교내 중앙 컴퓨터 동아리 KUCC 활동 (1년, 2023.09. ~ 현재)',
          },
          {
            emoji: '✌️',
            text: '교내 웹개발 동아리 DevKor 활동 (1년, 2023.09. ~ 2024.08.)',
          },
        ]}
      />
      <EducationCard
        date="2020.02. — 2023.12. (2년*)"
        title="42서울"
        titleId="42-seoul"
        status="심화과정 종료"
        descriptions={[
          '컴퓨터공학 프로젝트와 동료 평가를 중시하는 소프트웨어 개발자 양성 프로그램',
          '공통과정 수료 (2023.01.)',
        ]}
        linkDescriptions={[
          {
            href: 'https://www.youtube.com/watch?v=ilyHG8ly0Uw',
            text: '제주도에서 온 비전공 청년의 개발자 도전기',
            type: 'video',
          },
        ]}
      />
    </Section>
  );
};
