import clsx from 'clsx';
import { ComponentProps, FC, ReactElement, ReactNode } from 'react';

import Header from './Header';
import * as styles from './styles.css';

type LayoutProps = ComponentProps<'div'> & {
  className?: string;
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ className, children, ...props }): ReactElement => {
  return (
    <div className={styles.root}>
      <Header />
      <main className={clsx(styles.main, className)} {...props}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
