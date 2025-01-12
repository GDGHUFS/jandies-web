import { FC, ReactElement } from 'react';

import * as styles from './styles.css';

const Header: FC = (): ReactElement => {
  return (
    <header className={styles.root}>
      <div></div>
      <nav className={styles.nav}></nav>
      <div></div>
    </header>
  );
};

export default Header;
