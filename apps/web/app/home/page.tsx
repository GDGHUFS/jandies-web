import Layout from '@/components/Layout';

import { BannerCard } from './_components/banner-card';
import { ChallengeCard } from './_components/challenge-card';
import { FarmCard } from './_components/farm-card';
import { FortuneCard } from './_components/fortune-card';
import { UserCard } from './_components/user-card';
import * as styles from './page.css';

const HomePage = () => {
  return (
    <Layout>
      <div className={styles.grid}>
        <FortuneCard />
        <BannerCard />

        <div className={styles.column}>
          <UserCard />
          <ChallengeCard />
        </div>
        <div className={styles.row}>
          <FarmCard />
          <div className={styles.column}>
            <UserCard />
            <UserCard />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
