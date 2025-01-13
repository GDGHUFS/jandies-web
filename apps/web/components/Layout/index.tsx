import clsx from 'clsx';
import { ComponentPropsWithoutRef, FC, ReactElement, ReactNode } from 'react';

import Header from './Header';
import * as styles from './styles.css';

type LayoutProps = ComponentPropsWithoutRef<'div'> & {
  className?: string;
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ className, children, ...props }): ReactElement => {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
