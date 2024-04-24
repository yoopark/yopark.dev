import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { MouseTrackerProvider } from '@/components/MouseTracker/MouseTrackerProvider';
import { cn } from '@/utils/cn';
import './globals.css';

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
});

export const metadata: Metadata = {
  title: '박용준 · Yongjun Park',
  description: '프론트엔드 개발자 박용준의 포트폴리오입니다.',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    title: '박용준 · Yongjun Park',
    description: '프론트엔드 개발자 박용준의 포트폴리오입니다.',
    url: 'https://yopark.dev',
    images: 'https://yopark.dev/images/og-image.jpeg',
  },
};

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="ko">
      <body className={cn(pretendard.className, 'select-none')}>
        <MouseTrackerProvider>{children}</MouseTrackerProvider>
      </body>
    </html>
  );
};

export default RootLayout;
