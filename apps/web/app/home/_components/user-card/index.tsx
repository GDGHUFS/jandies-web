import { Card, Activity } from '@/components/ui';

import * as styles from './styles.css';

export const UserCard = () => {
  return (
    <Card className={styles.root}>
      <div>
        <p className={styles.hej}>반갑습니다</p>
        <p className={styles.name}>김경록</p>
      </div>

      <div>
        <h3 className={styles.update}>최근 업데이트</h3>
        <Activity />
      </div>
    </Card>
  );
};
