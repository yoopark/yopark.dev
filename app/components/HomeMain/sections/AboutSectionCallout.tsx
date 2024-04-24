export const AboutSectionCallout = () => {
  return (
    <div className="flex flex-col gap-2 p-6 rounded-lg shadow-lg hover:bg-amber-100/80 transition bg-amber-100/60">
      <p className="text-lg font-semibold">
        👋 안녕하세요, 평생 개발을 곁에 두고 싶은 박용준입니다.
      </p>
      <ul className="text-sm list-disc list-inside">
        <li>TypeScript 사용을 좋아합니다.</li>
        <li>
          다수의 해커톤 및 프로젝트에 프론트엔드 파트 위주로 참여한 경험이
          있습니다.
        </li>
        <li>심심할 때는 알고리즘 문제를 풉니다. (solved.ac P4, 1750+)</li>
      </ul>
    </div>
  );
};
