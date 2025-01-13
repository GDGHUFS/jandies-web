import {
  BrandingLogo,
  CardsStarIcon,
  ExploreIcon,
  NotificationsIcon,
  SearchIcon,
} from '@jandies/icon';
import Link from 'next/link';
import { FC, ReactElement } from 'react';

import { ROUTES } from '@/constants';

import * as styles from './styles.css';

const Header: FC = (): ReactElement => {
  return (
    <nav className={styles.root}>
      <div className={styles.branding}>
        <Link href={ROUTES.INDEX}>
          <BrandingLogo width={72} />
        </Link>
      </div>
      <ul className={styles.menu}>
        <li>
          <a href="#">
            <ExploreIcon size={15} />
            탐색
          </a>
        </li>
        <li>
          <a href="#">
            <CardsStarIcon size={15} />
            랭킹
          </a>
        </li>
      </ul>
      <div className={styles.user}>
        <SearchIcon size={20} />
        <NotificationsIcon size={20} />
        <div className={styles.avatar} />
      </div>
    </nav>
  );
};

export default Header;
