import { FC, ReactElement } from 'react';

import * as styles from './styles.css';

const Header: FC = (): ReactElement => {
  return (
    <header className={styles.root}>
      <div className={styles.branding}>Branding</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#">탐색</a>
          </li>
          <li>
            <a href="#">랭킹</a>
          </li>
        </ul>
      </nav>
      <div className={styles.user}>User</div>
    </header>
  );
};

export default Header;
