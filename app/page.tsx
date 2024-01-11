import GithubLogo from '@/app/assets/icons/github-logo.svg';
import LinkedInLogo from '@/app/assets/icons/linked-in-logo.svg';
import Pen from '@/app/assets/icons/pen.svg';
import stat_thumbnail from '@/app/assets/screenshots/42-stat-thumbnail.png';
import cerebri_class_thumbnail from '@/app/assets/screenshots/cerebri-class-thumbnail.png';
import last_pong_thumbnail from '@/app/assets/screenshots/last-pong-thumbnail.png';
import miliroutine_thumbnail from '@/app/assets/screenshots/miliroutine-thumbnail.png';
import { CertificateCard } from '@/app/components/CertificationCard';
import { EducationCard } from '@/app/components/EducationCard';
import { EmojiOnHover } from '@/app/components/EmojiOnHover';
import { Highlight } from '@/app/components/Highlight';
import { ProjectCard } from '@/app/components/ProjectCard';
import { Section } from '@/app/components/Section';

const year = new Date().getFullYear();

const Home = () => {
  return (
    <div className="flex max-w-screen-lg pt-16 m-auto">
      <header className="flex fixed flex-col w-[300px] gap-10">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold text-gray-900">박용준</h1>
            <div className="flex flex-col">
              <p className="text-xl text-gray-900">프론트엔드 개발자</p>
              <p className="text-sm text-gray-700">🌱🌱🌱🌱</p>
            </div>
            <div className="flex flex-col gap-0.5 text-sm text-gray-600">
              <a
                href="mailto:yopark.dev@gmail.com"
                className="hover:text-blue-600"
              >
                ✉️&nbsp;&nbsp;yopark.dev@gmail.com
              </a>
              <a href="tel:+821025336357" className="hover:text-blue-600">
                📞&nbsp;&nbsp;010-2533-6357
              </a>
            </div>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#project">Project</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#certificate">Certificate</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-3">
          <a
            href="https://github.com/yoopark"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GithubLogo className="w-5 h-5 text-gray-600 transition hover:text-[#171515]" />
          </a>
          <a
            href="https://blog.yopark.dev"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Pen className="w-5 h-5 text-gray-600 transition hover:text-[#aa0000]" />
          </a>
          <a
            href="https://www.linkedin.com/in/yopark-dev"
            target="_blank"
            rel="noreferrer noopener"
          >
            <LinkedInLogo className="w-5 h-5 text-gray-600 transition hover:text-[#0077b5]" />
          </a>
        </div>
      </header>
      <main className="flex flex-col gap-28 ml-[300px] pb-20">
        <Section title="About" id="about">
          <div className="flex flex-col gap-4">
            <p>
              <EmojiOnHover emoji="🏫">
                <span className="font-semibold">외국어고등학교</span>
              </EmojiOnHover>
              를 다니면서도{' '}
              <EmojiOnHover emoji="📕">
                <span className="font-semibold">『C언어의 정석』</span>
              </EmojiOnHover>
              을 취미로 읽을 정도로 항상 컴퓨터를 다루는 걸 좋아했지만,{' '}
              <EmojiOnHover emoji="🧑‍💻">
                <span className="font-semibold">개발자</span>
              </EmojiOnHover>
              를 직업으로 삼을 수 있다는 생각을 대학교 와서야 했습니다. 그저{' '}
              <EmojiOnHover emoji="😁">
                <span className="font-semibold">놀 생각</span>
              </EmojiOnHover>
              으로 간 42서울에서{' '}
              <EmojiOnHover emoji="⌥">
                <span className="font-semibold">리눅스 명령어</span>
              </EmojiOnHover>
              를 입력하던 순간 평생 좋아할 수 있는 일을 찾았다는 안도감이
              들었습니다.
            </p>
            <p>
              <EmojiOnHover emoji="⏰">
                <span className="font-semibold">대부분의 시간</span>
              </EmojiOnHover>
              을 코딩으로 보내지만, 심심할 땐 종종{' '}
              <EmojiOnHover emoji="🎹">
                <span className="font-semibold">피아노</span>
              </EmojiOnHover>
              를 칩니다. 철학이나 국제정치, 미래학을 주제로 한 책을 즐겨 읽고,{' '}
              <EmojiOnHover emoji="📱">
                <span className="font-semibold">정보사회</span>
              </EmojiOnHover>
              에서 벌어지는 일들에 관심이 많습니다. 최근에는 통계학을 공부하면서{' '}
              <EmojiOnHover emoji="🚀">
                <span className="font-semibold">데이터 시각화</span>
              </EmojiOnHover>
              에 눈을 뜨기 시작하였습니다.
            </p>
          </div>
          <div className="mt-10">
            <p className="float-right text-gray-600">
              <a href="">
                <Highlight>📎 이력서 파일 다운로드</Highlight>
              </a>
            </p>
          </div>
        </Section>
        <Section title="Project" id="project">
          <ProjectCard
            title="42Stat"
            thumbnail={stat_thumbnail}
            teamCount={5}
            githubUrl="https://github.com/42Statistics/42Stat-Frontend"
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
            title="Cerebri Class"
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
            thumbnail={last_pong_thumbnail}
            teamCount={4}
            githubUrl="https://github.com/lev-Zero/lastpong"
            role="프론트엔드 개발"
            descriptions={[
              '채팅, 초대, 관전이 가능한 실시간 탁구 게임 웹서비스',
            ]}
            subDescriptions={[
              {
                emoji: '✨',
                text: '42서울 공통과정 최종 과제',
              },
            ]}
            date="2022.12 — 2023.01"
            stacks={[
              'Next.js',
              'Socket.io',
              'TypeScript',
              'Chakra UI',
              'Zustand',
              'Docker Compose',
            ]}
          />
          <ProjectCard
            title="밀리루틴"
            thumbnail={miliroutine_thumbnail}
            teamCount={5}
            githubUrl="https://github.com/osamhack2022-v2/WEB_AI_MILIROUTINE_MILIROUTINE"
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
          />
        </Section>
        <Section title="Education" id="education">
          <EducationCard
            title="고려대학교"
            status="3학년 수료"
            descriptions={['정치외교학 전공', '통계학 이중전공']}
            subDescriptions={[
              {
                emoji: '🐯',
                text: '학점 : 3.89 / 4.5',
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
        <Section title="Certificate" id="certificate">
          <CertificateCard
            title="PCCP Python3"
            grade="Lv4 • 796 / 1000점"
            descriptions={['프로그래머스에서 주관하는 알고리즘 테스트']}
            date="2022.12.18."
          />
          <CertificateCard
            title="컴퓨터활용능력"
            grade="1급"
            date="2020.10.09."
          />
        </Section>
        <footer className="flex flex-col gap-2 text-xs text-gray-600">
          <p>감사합니다. 🙇‍♂️🙇‍♂️🙇‍♂️</p>
          <p>© {year} Yongjun Park. (Last Updated : 2024.01.12.)</p>
          <p>Next.js 14와 TailwindCSS로 작성하여 Vercel로 배포함.</p>
        </footer>
      </main>
    </div>
  );
};

export default Home;
