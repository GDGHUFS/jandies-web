import Image from 'next/image';
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
          <div className={styles.card}>
            <div className={styles.image} style={{ aspectRatio: '534 / 443' }}>
              <Image
                src="/static/img-landing-search.webp"
                alt="검색 모달 이미지"
                sizes="(max-width: 768px) 100vw, 50vw"
                draggable={false}
                fill
              />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.image} style={{ aspectRatio: '534 / 191' }}>
              <Image
                src="/static/img-landing-challenge.webp"
                alt="도전과제 이미지"
                sizes="(max-width: 768px) 100vw, 50vw"
                draggable={false}
                fill
              />
            </div>
          </div>
        </div>
        <div className={styles.card}>프로필을 멋진 배지들로 꾸며보세요</div>
      </section>
    </Layout>
  );
};

export default HomePage;
