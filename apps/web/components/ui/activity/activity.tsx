import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import Image from 'next/image';
import { ComponentProps } from 'react';

import * as styles from './styles.css';

type ActivityProps = {
  asChild?: boolean;
} & ComponentProps<'div'>;

export const Activity = ({ asChild, className, ...props }: ActivityProps) => {
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp className={clsx(className, styles.root)} {...props}>
      <div className={styles.iconContainer}>
        <Image
          className={styles.repositoryIcon}
          src="https://images.unsplash.com/photo-1603352525945-bb62a311295b"
          alt="리포지터리 아이콘"
          width={36}
          height={36}
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 33vw, (min-width: 1200px) 33vw"
          draggable={false}
          priority={false}
        />
        <Image
          className={styles.userIcon}
          src="https://images.unsplash.com/photo-1570158268183-d296b2892211"
          alt="프로필 이미지"
          width={18}
          height={18}
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 33vw, (min-width: 1200px) 33vw"
          draggable={false}
          priority={false}
        />
      </div>

      <div className={styles.textContainer}>
        <p className={styles.message}>build: add sentry monitoring system (#10)</p>
        <div className={styles.metadata}>
          <span className={styles.repository}>SFOM-web</span>
          <time className={styles.time}>01/10/2025</time>
        </div>
      </div>
    </Comp>
  );
};
