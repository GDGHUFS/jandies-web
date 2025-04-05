import { Card } from '@/components/ui';

import * as styles from './styles.css';

export const FortuneCard = () => {
  return (
    <Card className={styles.root}>
      <div>
        <p className={styles.day}>화요일</p>
        <p className={styles.date}>3월 23일</p>
      </div>

      <p className={styles.fortune}>
        <em>오늘의 운세</em>
        <br />
        오늘은 작은 기회가 찾아오는 하루가 될 거예요
      </p>
    </Card>
  );
};
