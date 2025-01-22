import { BrandingLogo, NotificationsIcon, SearchIcon } from '@jandies/icon';
import { theme } from '@jandies/style';
import Link from 'next/link';
import { FC, ReactElement } from 'react';

import { ROUTES } from '@/constants';

import * as styles from './styles.css';

const Header: FC = (): ReactElement => {
  return (
    <nav className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.branding}>
          <Link href={ROUTES.INDEX}>
            <BrandingLogo width={71} fill={theme.colors.grass400} />
          </Link>
        </div>

        <div className={styles.user}>
          <SearchIcon size={20} />
          <NotificationsIcon size={20} />
          <div className={styles.avatar} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
