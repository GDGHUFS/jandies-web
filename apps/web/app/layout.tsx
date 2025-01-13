import '@jandies/style/dist/global.css';

import { darkColors, lightColors } from '@jandies/style';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { FC, PropsWithChildren, ReactElement } from 'react';

export const metadata: Metadata = {
  title: '잔디스',
  description:
    '매일 잔디를 심고 성장을 기록하세요. 꾸준한 커밋이 만들어내는 성취감과 변화, 잔디스에서 확인하세요.',
};

const pretendard = localFont({
  src: './_fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  preload: true,
  variable: '--font-pretendard',
});

const colorThemeScript = `
  (function() {
    window.__onThemeChange = function() {};
    function setTheme(newTheme) {
      window.__theme = newTheme;
      preferredTheme = newTheme;
      document.documentElement.setAttribute('data-theme', newTheme);
      document.documentElement.className = newTheme === 'dark' ? '${darkColors}' : '${lightColors}';
      document.documentElement.classList.add('${pretendard.variable}');
      window.__onThemeChange(newTheme);
    }
    var preferredTheme;
    try {
      preferredTheme = localStorage.getItem('theme');
    } catch (err) {}
    window.__setPreferredTheme = function(newTheme) {
      setTheme(newTheme);
      try {
        localStorage.setItem('theme', newTheme);
      } catch (err) {}
    }
    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkQuery.addListener(function(e) {
      window.__setPreferredTheme(e.matches ? 'dark' : 'light');
    });
    setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
  })();
`;

const RootLayout: FC<PropsWithChildren> = ({ children }): ReactElement => {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script id="color-theme-script" dangerouslySetInnerHTML={{ __html: colorThemeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
