'use client';

import '@egjs/react-flicking/dist/flicking.css';

import Flicking from '@egjs/react-flicking';
import { ChevronLeftIcon, ChevronRightIcon } from '@jandies/icon';
import { useRef, useState } from 'react';

import * as styles from './styles.css';

export const BannerCard = () => {
  const flickingRef = useRef<Flicking>(null);
  const [index, setIndex] = useState<number>(0);

  const handlePrev = async () => {
    if (flickingRef.current && flickingRef.current.index !== 0 && !flickingRef.current.animating)
      await flickingRef.current.prev();
  };

  const handleNext = async () => {
    if (flickingRef.current && !flickingRef.current.animating) await flickingRef.current.next();
  };

  return (
    <div className={styles.root}>
      <Flicking ref={flickingRef} align="prev" onChanged={e => setIndex(e.index)}>
        <div className={styles.item}>
          <div className={styles.background} />
        </div>
      </Flicking>

      <div className={styles.controller}>
        <button
          onClick={handlePrev}
          type="button"
          disabled={index === 0}
          aria-disabled={index === 0}
          aria-label="이전 배너로 이동"
        >
          <ChevronLeftIcon size={18} />
        </button>
        <span className={styles.controllerBar} />
        <button onClick={handleNext} type="button" aria-label="다음 배너로 이동">
          <ChevronRightIcon size={18} />
        </button>
      </div>
    </div>
  );
};
