import Layout from '@/components/Layout';

import { BannerCard } from './_components/banner-card';
import { FortuneCard } from './_components/fortune-card';
import { UserCard } from './_components/user-card';
import * as styles from './page.css';

const HomePage = () => {
  return (
    <Layout>
      <div className={styles.grid}>
        <FortuneCard />
        <BannerCard />

        <div>
          <UserCard />
        </div>
        <div></div>
      </div>
    </Layout>
  );
};

export default HomePage;
