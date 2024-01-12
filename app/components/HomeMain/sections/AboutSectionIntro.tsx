import { EmojiOnHover } from '@/components/EmojiOnHover';

export const AboutSectionIntro = () => {
  return (
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
        를 입력하던 순간 평생 좋아할 수 있는 일을 찾았다는 안도감이 들었습니다.
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
  );
};
