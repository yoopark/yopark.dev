const year = new Date().getFullYear();

export const HomeMainFooter = () => {
  return (
    <footer className="flex flex-col gap-2 text-xs text-gray-600">
      <p>감사합니다.</p>
      <p>© {year} Yongjun Park. (2025.03.19. 업데이트)</p>
      <p>Next.js 14와 TailwindCSS로 작성하여 Vercel로 배포함.</p>
    </footer>
  );
};
