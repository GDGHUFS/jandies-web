import Layout from '@/components/Layout';

import { BannerCard } from './_components/banner-card';
import { FortuneCard } from './_components/fortune-card';
import * as styles from './page.css';

const HomePage = () => {
  return (
    <Layout>
      <div className={styles.grid}>
        <FortuneCard />
        <BannerCard />
      </div>
    </Layout>
  );
};

export default HomePage;
