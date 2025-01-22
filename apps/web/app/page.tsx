import { FC, ReactElement } from 'react';

import Layout from '@/components/Layout';

import * as styles from './page.css';

const HomePage: FC = (): ReactElement => {
  return (
    <Layout>
      <section className={styles.intro}>
        <h2 className={styles.heading}>
          매일 잔디를 심으세요
          <br />
          농장에 참여하고 기여하세요
        </h2>
        <p className={styles.description}>
          매일 잔디를 심고, 커뮤니티의 일원이 되어 함께 성장하세요.
          <br />
          현재 0명의 정원사가 함께하고 있어요.
        </p>
      </section>

      <section className={styles.highlight}>
        <div className={styles.card}>순위권에 어쩌구 경쟁하세요</div>
        <div className={styles.card}>참여하고 싶은 농장에 참여하고 기여하세요</div>
        <div className={styles.pair}>
          <div className={styles.card}>찾고 싶은 내용을 어쩌고 하세요</div>
          <div className={styles.card}>매일 새로운 도전과제를 달성하고 보상을 획득하세요</div>
        </div>
        <div className={styles.card}>프로필을 멋진 배지들로 꾸며보세요</div>
      </section>
    </Layout>
  );
};

export default HomePage;
