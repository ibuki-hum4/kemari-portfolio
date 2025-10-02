'use client';

import { useEffect, useRef } from 'react';

interface InertiaScrollOptions {
  friction: number;
  springTension: number;
  threshold: number;
}

export const useInertiaScroll = (options: Partial<InertiaScrollOptions> = {}) => {
  const {
    friction = 0.92,
    springTension = 0.1,
    threshold = 0.1
  } = options;

  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const velocityRef = useRef(0);
  const lastScrollTimeRef = useRef(0);
  const lastScrollPositionRef = useRef(0);
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isTracking = false;
    let startY = 0;
    let currentY = 0;

    // スクロール慣性の計算と適用
    const applyInertia = () => {
      if (Math.abs(velocityRef.current) < threshold) {
        isScrollingRef.current = false;
        return;
      }

      velocityRef.current *= friction;
      
      // スクロール位置を更新
      const newScrollTop = window.pageYOffset + velocityRef.current;
      
      // 境界チェック
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (newScrollTop >= 0 && newScrollTop <= maxScroll) {
        window.scrollTo(0, newScrollTop);
      } else {
        // 境界に達した場合、速度を反転させて跳ね返り効果
        velocityRef.current *= -0.3;
      }

      if (isScrollingRef.current) {
        animationFrameRef.current = requestAnimationFrame(applyInertia);
      }
    };

    // スクロール速度の計算
    const calculateVelocity = () => {
      const now = Date.now();
      const currentScrollPosition = window.pageYOffset;
      
      if (lastScrollTimeRef.current) {
        const timeDiff = now - lastScrollTimeRef.current;
        const positionDiff = currentScrollPosition - lastScrollPositionRef.current;
        
        if (timeDiff > 0) {
          const newVelocity = positionDiff / timeDiff * 16; // 60fps基準に正規化
          velocityRef.current = newVelocity;
        }
      }
      
      lastScrollTimeRef.current = now;
      lastScrollPositionRef.current = currentScrollPosition;
    };

    // マウスホイールイベント
    const handleWheel = (e: WheelEvent) => {
      // デフォルトのスクロールを無効化
      e.preventDefault();
      
      // カスタム慣性スクロール
      const delta = e.deltaY;
      const acceleration = delta * 0.8;
      
      velocityRef.current += acceleration;
      
      if (!isScrollingRef.current) {
        isScrollingRef.current = true;
        applyInertia();
      }
    };

    // タッチイベント（モバイル用）
    const handleTouchStart = (e: TouchEvent) => {
      isTracking = true;
      startY = e.touches[0].clientY;
      currentY = startY;
      velocityRef.current = 0;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isTracking) return;
      
      currentY = e.touches[0].clientY;
      const deltaY = startY - currentY;
      
      calculateVelocity();
      
      // 即座にスクロール
      window.scrollBy(0, deltaY * 0.5);
      startY = currentY;
    };

    const handleTouchEnd = () => {
      if (!isTracking) return;
      
      isTracking = false;
      
      // 慣性スクロールを開始
      if (Math.abs(velocityRef.current) > threshold) {
        isScrollingRef.current = true;
        velocityRef.current *= 10; // タッチ終了時の初期速度を調整
        applyInertia();
      }
    };

    // 通常のスクロールイベント（フォールバック）
    const handleScroll = () => {
      calculateVelocity();
    };

    // イベントリスナーを追加
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      // クリーンアップ
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('scroll', handleScroll);
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [friction, springTension, threshold]);

  return containerRef;
};