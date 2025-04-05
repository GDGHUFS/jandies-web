import { Activity, Card } from '@/components/ui';

import * as styles from './styles.css';

export const FarmCard = () => {
  return (
    <Card className={styles.root}>
      <Card.Header>
        <h4>농장</h4>
        <h3>GDG on Campus HUFS</h3>
        <h5>동아리 → 대학교 주간 3위</h5>
      </Card.Header>

      <div></div>

      <div className={styles.updateContainer}>
        <h3 className={styles.update}>최근 업데이트</h3>

        <Activity />
        <Activity />
        <Activity />
      </div>
    </Card>
  );
};
