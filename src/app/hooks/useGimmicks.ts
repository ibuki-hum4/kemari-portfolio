'use client';

import { useEffect, useState } from 'react';

// イースターエッグ: コナミコマンド
export function useKonamiCode(callback: () => void) {
  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let currentIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === konamiCode[currentIndex]) {
        currentIndex++;
        if (currentIndex === konamiCode.length) {
          callback();
          currentIndex = 0;
        }
      } else {
        currentIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [callback]);
}

// カーソルトレイル
export function useCursorTrail(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;

    const particles: Array<{ x: number; y: number; life: number; id: number }> = [];
    let particleId = 0;
    let lastEmitTime = 0;
    const emitInterval = 30; // ms

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastEmitTime < emitInterval) return;
      lastEmitTime = now;

      const particle = {
        x: e.clientX,
        y: e.clientY,
        life: 1,
        id: particleId++
      };

      particles.push(particle);

      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = `${particle.x}px`;
      trail.style.top = `${particle.y}px`;
      document.body.appendChild(trail);

      setTimeout(() => {
        trail.remove();
      }, 800);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [enabled]);
}

// ランダム絵文字レイン
export function useEmojiRain(trigger: boolean, emojis: string[] = ['🎉', '✨', '🌟', '💫', '⭐']) {
  useEffect(() => {
    if (!trigger) return;

    const createEmoji = () => {
      const emoji = document.createElement('div');
      emoji.className = 'emoji-rain';
      emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.style.left = `${Math.random() * 100}%`;
      emoji.style.animationDuration = `${2 + Math.random() * 3}s`;
      emoji.style.fontSize = `${20 + Math.random() * 20}px`;
      document.body.appendChild(emoji);

      setTimeout(() => emoji.remove(), 5000);
    };

    const interval = setInterval(createEmoji, 200);
    setTimeout(() => clearInterval(interval), 3000);

    return () => clearInterval(interval);
  }, [trigger, emojis]);
}

// シェイクアニメーション
export function useShakeOnError() {
  const [shake, setShake] = useState(false);

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  return { shake, triggerShake };
}

// ダブルクリックでサプライズ
export function useDoubleClickSurprise(selector: string, callback: () => void) {
  useEffect(() => {
    let clickCount = 0;
    let clickTimer: NodeJS.Timeout;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(selector)) {
        clickCount++;
        
        if (clickCount === 1) {
          clickTimer = setTimeout(() => {
            clickCount = 0;
          }, 300);
        } else if (clickCount === 2) {
          clearTimeout(clickTimer);
          clickCount = 0;
          callback();
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      if (clickTimer) clearTimeout(clickTimer);
    };
  }, [selector, callback]);
}

// スクロール進行状況バー
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return progress;
}

// タイピングエフェクト
export function useTypingEffect(text: string, speed: number = 100) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return displayedText;
}

// カスタムカーソル
export function useCustomCursor() {
  useEffect(() => {
    // カーソル要素を作成
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const cursorDot = document.createElement('div');
    cursorDot.className = 'custom-cursor-dot';
    document.body.appendChild(cursorDot);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    // マウス移動を追跡
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // ドットは即座に追従
      dotX = mouseX;
      dotY = mouseY;
      cursorDot.style.left = `${dotX}px`;
      cursorDot.style.top = `${dotY}px`;
    };

    // リンクやボタンにホバー時の拡大
    const handleMouseEnter = () => {
      cursor.classList.add('custom-cursor-hover');
      cursorDot.classList.add('custom-cursor-dot-hover');
    };

    const handleMouseLeave = () => {
      cursor.classList.remove('custom-cursor-hover');
      cursorDot.classList.remove('custom-cursor-dot-hover');
    };

    // クリック時のアニメーション
    const handleMouseDown = () => {
      cursor.classList.add('custom-cursor-click');
      cursorDot.classList.add('custom-cursor-dot-click');
    };

    const handleMouseUp = () => {
      cursor.classList.remove('custom-cursor-click');
      cursorDot.classList.remove('custom-cursor-dot-click');
    };

    // スムーズな追従アニメーション
    const animateCursor = () => {
      // イージング効果で追従
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      
      requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // インタラクティブ要素にイベントリスナーを追加
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    animateCursor();

    return () => {
      cursor.remove();
      cursorDot.remove();
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
}
