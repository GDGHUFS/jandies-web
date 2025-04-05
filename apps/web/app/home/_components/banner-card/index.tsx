'use client';

import '@egjs/react-flicking/dist/flicking.css';

import Flicking from '@egjs/react-flicking';
import { ChevronLeftIcon, ChevronRightIcon } from '@jandies/icon';
import Image from 'next/image';
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
        <div className={styles.item} style={{ backgroundColor: '#2A453D' }}>
          <div className={styles.cover} aria-hidden>
            <Image
              src="https://images.unsplash.com/photo-1724382057884-c6f06cae3dff"
              alt="커버 이미지"
              sizes="(max-width: 768px) 100vw, (min-width: 769px) 33vw, (min-width: 1200px) 33vw"
              draggable={false}
              fill
              priority
            />
          </div>
          <p className={styles.category}>SEASON EVENT</p>
          <h2 className={styles.event}>잔디왕김훕스 이벤트가 시작됩니다.</h2>
          <p className={styles.description}>@GDG on Campus · 2월 이벤트</p>
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
