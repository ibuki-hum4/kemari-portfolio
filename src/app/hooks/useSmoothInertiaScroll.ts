'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export const useLenisScroll = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // パフォーマンス最適化されたLenis設定
    const lenis = new Lenis({
      lerp: 0.15, // さらに高速化
      duration: 1.0, // レスポンス向上
      easing: (t: number) => 1 - Math.pow(1 - t, 3), // シンプルなeaseOutCubic
      orientation: 'vertical',
      gestureOrientation: 'vertical', 
      smoothWheel: true,
      wheelMultiplier: 1.2, // より素早いスクロール
      touchMultiplier: 1.2, // タッチ最適化
      infinite: false,
      autoResize: true,
      autoRaf: false, // 手動RAF制御でパフォーマンス向上
      syncTouch: false,
      syncTouchLerp: 0.08, // 最適化
      touchInertiaExponent: 1.0, // 軽量化
      overscroll: false, // 無効化でパフォーマンス向上
    });

    lenisRef.current = lenis;

    // 手動RAFでパフォーマンス制御
    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // スクロールイベントの型定義
    interface ScrollEvent {
      scroll: number;
      direction: number;
      velocity: number;
    }

    // スロットル化されたスクロールハンドラー
    let scrollTimeout: NodeJS.Timeout | null = null;
    const throttledScrollHandler = ({ scroll, direction, velocity }: ScrollEvent) => {
      // スロットル処理でパフォーマンス向上
      if (scrollTimeout) return;
      
      scrollTimeout = setTimeout(() => {
        // ヘッダーの表示/非表示制御（最小限の処理）
        const header = document.querySelector('nav');
        if (header && Math.abs(velocity) > 1.5) {
          const shouldHide = direction === 1 && scroll > 100;
          header.style.transform = shouldHide ? 'translateY(-100%)' : 'translateY(0)';
        }
        
        scrollTimeout = null;
      }, 16); // 60fps制限
    };

    // 軽量なスクロールイベント
    lenis.on('scroll', throttledScrollHandler);

    // グローバルにLenisインスタンスを公開（最小限）
    (window as unknown as { lenis: Lenis }).lenis = lenis;

    // クリーンアップ
    return () => {
      // RAF停止
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      // タイムアウトクリア
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // Lenisインスタンスを破棄
      lenis.destroy();
      (window as unknown as { lenis: Lenis | null }).lenis = null;
    };
  }, []);

  return lenisRef.current;
};