import { EducationCard } from '@/app/components/EducationCard';
import { Section } from '@/components/Section';

export const EducationSection = () => {
  return (
    <Section title="Education" id="education">
      <EducationCard
        title="고려대학교"
        id="korea-univ"
        status="3학년 수료"
        descriptions={['정치외교학 전공', '통계학 이중전공']}
        subDescriptions={[
          {
            emoji: '🐯',
            text: '학점 : 4.01 / 4.5',
          },
          {
            emoji: '✌️',
            text: '교내 중앙 컴퓨터 동아리 KUCC 활동 (2023.09 ~ 현재)',
          },
          {
            emoji: '✌️',
            text: '교내 웹개발 동아리 DevKor 활동 (2023.09 ~ 현재)',
          },
        ]}
        date="2019.03 — 현재"
      />
      <EducationCard
        title="42서울"
        id="42-seoul"
        status="심화과정 종료"
        descriptions={['공통과정 수료 (2023.01)']}
        linkDescriptions={[
          {
            href: 'https://www.youtube.com/watch?v=ilyHG8ly0Uw',
            text: '제주도에서 온 비전공 청년의 개발자 도전기',
            type: 'video',
          },
        ]}
        date="2020.02 — 2022.12"
      />
    </Section>
  );
};
