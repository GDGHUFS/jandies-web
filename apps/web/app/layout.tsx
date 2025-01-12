import type { Metadata } from 'next';
import { FC, PropsWithChildren, ReactElement } from 'react';

export const metadata: Metadata = {
  title: '잔디스',
  description:
    '매일 잔디를 심고 성장을 기록하세요. 꾸준한 커밋이 만들어내는 성취감과 변화, 잔디스에서 확인하세요.',
};

const RootLayout: FC<PropsWithChildren> = ({ children }): ReactElement => {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
