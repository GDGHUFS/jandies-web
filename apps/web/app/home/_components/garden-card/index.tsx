import { Card } from '@/components/ui';

import * as styles from './styles.css';

export const GardenCard = () => {
  return (
    <Card className={styles.root}>
      <Card.Header>
        <h4>열심히 관리하고 계시네요!</h4>
        <h3>내 정원</h3>
      </Card.Header>
    </Card>
  );
};
