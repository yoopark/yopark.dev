import type { Metadata } from 'next';
import './globals.css';

import localFont from 'next/font/local';

import { MouseTrackerProvider } from '@/app/components/MouseTracker/MouseTrackerProvider';

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
});

export const metadata: Metadata = {
  title: '박용준 · Yongjun Park',
  description: '프론트엔드 개발자 박용준의 포트폴리오입니다.',
};

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <MouseTrackerProvider>{children}</MouseTrackerProvider>
      </body>
    </html>
  );
};

export default RootLayout;
