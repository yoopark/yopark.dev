import { Section } from "@/components/Section";

import { StudyCard } from "@/app/components/Card/StudyCard";

export const StudySection = () => {
  return (
    <Section title="Study" id="study">
      <StudyCard
        date="2024.09 ~ 2024.12 (4개월)"
        title="우테코 따라잡기 2 (이번엔 진짜 어그로 아님)"
        titleId="not-woowacourse-2"
        teamCount={4}
        references={{
          githubUrl: "https://github.com/not-woowacourse",
          notionUrl:
            "https://yopark.notion.site/2-578847ae083a41788d774961a89ae059",
        }}
        role="세션장"
        descriptions={[
          "Vanila JavaScript 환경에서 구현과제를 풀어보며 생각이 유연한 프론트엔드 개발자가 되기 위한 스터디",
        ]}
        subDescriptions={[
          {
            emoji: "📚",
            text: "KUCC 2024-2학기 세션으로 진행",
          },
          {
            emoji: "🔧",
            text: "구현과제 제작 · 시연 · 해설, 세션 진행 등 스터디 운영",
          },
        ]}
        linkDescriptions={[
          {
            href: "/not-woowacourse-2-ot.pdf",
            text: "OT 발표자료",
            type: "file",
          },
          {
            href: "https://github.com/not-woowacourse/4-blackzack",
            text: "구현과제 4 레포 : Node.js Console을 활용한 블랙잭 게임 구현",
            type: "link",
          },
        ]}
      />
      <StudyCard
        date="2024.03 ~ 2024.06 (4개월)"
        title="우테코 따라잡기 (근데 이제 Next.js를 곁들인)"
        titleId="not-woowacourse"
        teamCount={5}
        references={{
          githubUrl: "https://github.com/not-woowacourse",
          notionUrl:
            "https://yopark.notion.site/Next-js-ae89c879b8f948f4a3c841d317fa7849",
        }}
        role="세션장"
        descriptions={[
          "동일한 보일러플레이트, 동일한 구현과제를 풀어보며 기초가 탄탄한 Next.js 개발자가 되기 위한 스터디",
        ]}
        subDescriptions={[
          {
            emoji: "📚",
            text: "KUCC 2024-1학기 세션으로 진행",
          },
          {
            emoji: "🔧",
            text: "구현과제 제작 · 시연 · 해설, 과제용 백엔드 제작 및 배포, 세션 진행 등 스터디 운영",
          },
        ]}
        linkDescriptions={[
          {
            href: "/not-woowacourse-ot.pdf",
            text: "OT 발표자료",
            type: "file",
          },
          {
            href: "https://github.com/not-woowacourse/1-toodoo-frontend",
            text: "구현과제 1 레포 : Axios + React Query를 활용한 TODO 구현",
            type: "link",
          },
          {
            href: "https://github.com/not-woowacourse/2-surveey-frontend",
            text: "구현과제 2 레포 : React Hook Form + Zod를 활용한 퍼널형 Form 구현",
            type: "link",
          },
          {
            href: "https://github.com/not-woowacourse/3-searzh-frontend",
            text: "구현과제 3 레포 : Redux Persist + RTK Query를 활용한 검색 기능 구현",
            type: "link",
          },
        ]}
      />
    </Section>
  );
};
