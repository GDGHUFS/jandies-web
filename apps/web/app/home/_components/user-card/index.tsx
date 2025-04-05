import { Card, Activity } from '@/components/ui';

import * as styles from './styles.css';

export const UserCard = () => {
  return (
    <Card className={styles.root}>
      <Card.Header>
        <h4>반갑습니다</h4>
        <h3>김경록</h3>
      </Card.Header>

      <div>
        <h3 className={styles.update}>최근 업데이트</h3>
        <Activity />
      </div>
    </Card>
  );
};
