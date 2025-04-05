import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ComponentProps } from 'react';

import * as styles from './styles.css';

type CardProps = {
  asChild?: boolean;
} & ComponentProps<'div'>;

export const Card = ({ asChild = false, className, ...props }: CardProps) => {
  const Comp = asChild ? Slot : 'div';

  return <Comp className={clsx(className, styles.root)} {...props} />;
};
