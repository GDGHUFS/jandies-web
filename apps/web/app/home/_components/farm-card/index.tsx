import { Activity, Card } from '@/components/ui';

import * as styles from './styles.css';

export const FarmCard = () => {
  return (
    <Card className={styles.root}>
      <div>
        <p className={styles.farm}>농장</p>
        <p className={styles.name}>GDG on Campus HUFS</p>
      </div>

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
