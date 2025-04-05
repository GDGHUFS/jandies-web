import { Card } from '@/components/ui';

import * as styles from './styles.css';

export const ScoreCard = () => {
  return (
    <Card className={styles.root}>
      <Card.Header>
        <h4>내 정원 점수</h4>
        <h3>176점</h3>
        <h5>3일 연속 관리 중</h5>
      </Card.Header>

      <p className={styles.ranking}>소속 농장에서 주간 3위</p>
    </Card>
  );
};
