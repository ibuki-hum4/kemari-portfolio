'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { useLenisScroll } from './hooks/useSmoothInertiaScroll';
import { SkillIcons } from './components/SkillIcons';
import { ProjectsSection } from './components/ProjectsSection';
import { useKonamiCode, useCursorTrail, useEmojiRain, useScrollProgress, useDoubleClickSurprise, useCustomCursor } from './hooks/useGimmicks';

// WindowにLenis型を定義
interface WindowWithLenis extends Window {
  lenis?: {
    scrollTo: (target: HTMLElement | number | string, options?: { offset?: number; duration?: number; easing?: (t: number) => number; lock?: boolean }) => void;
  };
}

// Lenisベースのスムーズスクロール関数
const smoothScrollTo = (elementId: string) => {
  // Lenisのスムーズスクロールを使用
  const win = window as WindowWithLenis;
  if (win.lenis) {
    const element = document.getElementById(elementId);
    if (element) {
      win.lenis.scrollTo(element, {
        offset: -80, // ナビゲーションの高さ分オフセット
        duration: 1.5,
        easing: (t: number) => 1 - Math.pow(1 - t, 3), // easeOutCubic
        lock: true // スクロール完了まで他の操作をロック
      });
    }
  }
};

export default function Home() {
  // Lenisスムーススクロールを初期化
  useLenisScroll();
  
  // ギミック用のstate
  const [showCursorTrail, setShowCursorTrail] = useState(false);
  const [emojiRainTrigger, setEmojiRainTrigger] = useState(false);
  
  // スクロール進行状況
  const scrollProgress = useScrollProgress();
  
  // カスタムカーソル
  useCustomCursor();
  
  // コナミコマンド: ↑↑↓↓←→←→BA
  useKonamiCode(useCallback(() => {
    setEmojiRainTrigger(true);
    setTimeout(() => setEmojiRainTrigger(false), 100);
    
    // 通知を表示
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl shadow-2xl z-[10000] animate-bounce';
    notification.innerHTML = '🎮 コナミコマンド発動！カーソルトレイル ON ✨';
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 3000);
    setShowCursorTrail(true);
  }, []));
  
  // カーソルトレイル（コナミコマンド後に有効化）
  useCursorTrail(showCursorTrail);
  
  // 絵文字レイン
  useEmojiRain(emojiRainTrigger, ['🎉', '✨', '🌟', '💫', '⭐', '🚀', '💝']);
  
  // プロフィール画像をダブルクリックでサプライズ
  useDoubleClickSurprise('.profile-image', useCallback(() => {
    setEmojiRainTrigger(true);
    setTimeout(() => setEmojiRainTrigger(false), 100);
    
    const messages = [
      '🎉 やったー！',
      '✨ キラキラ！',
      '🚀 発射！',
      '💝 ありがとう！',
      '🌟 最高！'
    ];
    const message = messages[Math.floor(Math.random() * messages.length)];
    
    const popup = document.createElement('div');
    popup.className = 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 text-gray-900 dark:text-white px-12 py-8 rounded-3xl shadow-2xl z-[10000] text-4xl font-bold border-4 border-blue-500';
    popup.textContent = message;
    document.body.appendChild(popup);
    
    setTimeout(() => {
      popup.style.transition = 'all 0.5s ease-out';
      popup.style.opacity = '0';
      popup.style.transform = 'translate(-50%, -50%) scale(2)';
      setTimeout(() => popup.remove(), 500);
    }, 1500);
  }, []));
  
  useEffect(() => {
    // パフォーマンス最適化されたIntersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // 一度表示されたら監視を停止してパフォーマンス向上
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05, // 閾値を下げて早めに発火
        rootMargin: '0px 0px -30px 0px' // マージンを最適化
      }
    );

    // fade-in要素の監視（遅延実行で初期パフォーマンス向上）
    const setupObserver = () => {
      const fadeElements = document.querySelectorAll('.fade-in');
      fadeElements.forEach((el) => observer.observe(el));
    };

    // 少し遅延させて実行
    const timeoutId = setTimeout(setupObserver, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  // カスタムカーソル用のbodyクラス追加
  useEffect(() => {
    document.body.classList.add('custom-cursor-active');
    return () => {
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-800 inertia-scroll">
      {/* スクロール進行状況バー */}
      <div 
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* ナビゲーション */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            {/* ロゴ */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">や</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
                やーはり
              </span>
            </div>
            
            {/* デスクトップメニュー */}
            <div className="hidden md:flex items-center space-x-1">
              {[
                { name: 'Skills', target: 'profile', icon: '🚀' },
                { name: 'Works', target: 'portfolio', icon: '💼' },
                { name: 'Contact', target: 'contact', icon: '📧' }
              ].map((item) => (
                <button 
                  key={item.target}
                  onClick={() => smoothScrollTo(item.target)} 
                  className="group relative px-4 py-2 rounded-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-sm group-hover:animate-bounce">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </span>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
                </button>
              ))}
              
              {/* ステータスインジケーター */}
              <div className="ml-4 flex items-center space-x-2 px-3 py-1 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-200 dark:border-green-700/50">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-green-700 dark:text-green-400">Online</span>
              </div>
            </div>

            {/* モバイルメニューボタン */}
            <button 
              className="md:hidden p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              onClick={() => {
                const mobileMenu = document.getElementById('mobile-menu');
                mobileMenu?.classList.toggle('hidden');
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* モバイルメニュー */}
          <div id="mobile-menu" className="hidden md:hidden pb-4">
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
              {[
                { name: 'Skills', target: 'profile', icon: '🚀' },
                { name: 'Works', target: 'portfolio', icon: '💼' },
                { name: 'Contact', target: 'contact', icon: '📧' }
              ].map((item) => (
                <button 
                  key={item.target}
                  onClick={() => {
                    smoothScrollTo(item.target);
                    document.getElementById('mobile-menu')?.classList.add('hidden');
                  }} 
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all duration-300 text-left"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>      {/* ヒーローセクション */}
      <section className="pt-28 pb-16 sm:pt-32 sm:pb-20 px-6 sm:px-8 lg:px-12 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* 左側：アイコン・ビジュアル */}
            <div className="fade-in flex justify-center lg:justify-end order-2 lg:order-1">
              <div className="relative group profile-image cursor-pointer" title="ダブルクリックしてみて！">
                {/* 背景グロー効果 */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse"></div>
                
                {/* メインアイコン */}
                <div className="relative w-52 h-52 lg:w-72 lg:h-72 rounded-3xl bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 shadow-2xl border border-gray-200/50 dark:border-slate-700/50 overflow-hidden backdrop-blur-sm hover-magic">
                  <Image 
                    src="/profile-icon.png" 
                    alt="やーはりのプロフィール画像" 
                    width={288}
                    height={288}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                    priority
                    quality={90}
                    loading="eager"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                  />
                  
                  {/* オーバーレイグラデーション */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/20 transition-all duration-300"></div>
                </div>
                
                {/* フローティング装飾要素 */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-sm animate-float"></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-sm animate-float-delayed"></div>
                <div className="absolute top-1/2 -right-4 w-12 h-12 bg-gradient-to-br from-emerald-500/40 to-teal-500/40 rounded-full blur-sm animate-bounce"></div>
                
                {/* 改良されたスキルバッジ */}
                <div className="absolute -top-3 left-6 px-4 py-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200/70 dark:border-slate-600/70 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">Frontend</span>
                </div>
                <div className="absolute -bottom-3 right-6 px-4 py-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200/70 dark:border-slate-600/70 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">System</span>
                </div>
                
                {/* アクティビティインジケーター */}
                <div className="absolute top-4 right-4 w-4 h-4 bg-green-500 rounded-full shadow-lg animate-pulse border-2 border-white dark:border-slate-800">
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
            </div>

            {/* 右側：テキスト情報 */}
            <div className="order-1 lg:order-2 text-center lg:text-left space-y-8">
              
              {/* 挨拶・ステータス */}
              <div className="fade-in">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-full border border-green-200 dark:border-green-700/50 shadow-sm mb-6">
                  <div className="relative flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                    <div className="absolute w-3 h-3 bg-green-500 rounded-full mr-3 animate-ping opacity-75"></div>
                  </div>
                  <span className="text-sm font-semibold text-green-700 dark:text-green-400">Available for work</span>
                </div>
                
                {/* 挨拶メッセージ */}
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                  こんにちは！👋
                </p>
              </div>

              {/* 名前・タイトル */}
              <div className="fade-in">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent mb-6 leading-tight tracking-tight">
                  やーはり
                </h1>
                <div className="space-y-3">
                  <p className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
                    Frontend Engineer
                  </p>
                  <p className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                    System Engineer
                  </p>
                </div>
              </div>

              {/* 自己紹介 */}
              <div className="fade-in">
                <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-slate-700/50 shadow-lg">
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-lg lg:max-w-none">
                    フロントエンドとシステム開発をやっています。<br />
                    趣味でWebアプリやAPIを作るのが好きです。
                  </p>
                  <div className="mt-4 flex items-center space-x-2">
                    <span className="text-2xl">✨</span>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">モダンな技術で、使いやすいものを作ります。</span>
                  </div>
                </div>
              </div>

              {/* アクションボタン */}
              <div className="fade-in">
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a 
                    href="mailto:yahari@skyia.jp"
                    className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <svg className="w-5 h-5 mr-3 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    お問い合わせ
                    <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                  <button 
                    onClick={() => smoothScrollTo('portfolio')}
                    className="group inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 rounded-2xl transition-all duration-300 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  >
                    制作物を見る
                    <svg className="w-5 h-5 ml-3 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* SNSリンク */}
              <div className="fade-in">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 flex items-center justify-center lg:justify-start">
                  <span className="mr-2">🔗</span>
                  Connect with me:
                </p>
                <div className="flex space-x-4 justify-center lg:justify-start">
                  {[
                    { name: 'GitHub', href: 'https://github.com/yahari-dev', iconSlug: 'github', color: 'hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800', iconColor: '181717' },
                    { name: 'X', href: 'https://twitter.com/yahari_dev', iconSlug: 'x', color: 'hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800', iconColor: '000000' },
                    { name: 'Qiita', href: 'https://qiita.com/yahari', iconSlug: 'qiita', color: 'hover:text-[#55c500] hover:bg-[#55c500]/10 dark:hover:bg-[#55c500]/20', iconColor: '55C500', darkIconColor: '55C500' }
                  ].map((social) => (
                    <a 
                      key={social.name}
                      href={social.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-400 rounded-xl transition-all duration-300 ${social.color} transform hover:scale-105`}
                    >
                      <img 
                        src={`https://cdn.simpleicons.org/${social.iconSlug}/${social.iconColor}`}
                        alt={`${social.name} icon`}
                        className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 dark:hidden"
                      />
                      {social.darkIconColor && (
                        <img 
                          src={`https://cdn.simpleicons.org/${social.iconSlug}/${social.darkIconColor}`}
                          alt={`${social.name} icon`}
                          className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 hidden dark:block"
                        />
                      )}
                      <span className="text-sm font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* スクロール指示（下部中央） */}
          <div className="fade-in mt-16 text-center">
            <svg className="w-6 h-6 mx-auto text-gray-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Skills セクション */}
      <section id="profile" className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-white to-gray-50/80 dark:from-slate-900 dark:to-slate-800/80 relative overflow-hidden transition-all duration-500">
        {/* 装飾的背景 */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/60 to-transparent dark:via-blue-600/40"></div>
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-blue-200/40 dark:bg-blue-800/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-200/40 dark:bg-purple-800/20 rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="fade-in text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-xl transform hover:rotate-12 transition-transform duration-300">
              <span className="text-3xl">🚀</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent mb-5 tracking-tight">
              Technical Skills
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              現在学習中・使用中の技術スタック
            </p>
          </div>
          
          {/* スキルアイコングリッド */}
          {/* Skill Icons */}
          <SkillIcons />          {/* プロフィール説明 */}
          <div className="fade-in max-w-3xl mx-auto text-center">
            <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 border-l-4 border-gray-300 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                フロントエンド開発とシステムエンジニアリングを専門にしています。<br />
                Webアプリケーションの開発からAPIの構築まで幅広く手がけています。<br />
                最近は Next.js と React を中心に、モダンな技術スタックで開発中です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Provided Services セクション */}
      <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 relative overflow-hidden transition-all duration-500">
        {/* 装飾的背景 */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent dark:via-purple-700"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-100 dark:bg-green-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-yellow-100 dark:bg-yellow-900/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="fade-in text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-6 shadow-lg">
              <span className="text-2xl">💼</span>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-purple-600 dark:from-white dark:to-purple-400 bg-clip-text text-transparent mb-4">
              Portfolio Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              これまでに制作したプロジェクトや学習した内容
            </p>
          </div>
          
          {/* プロジェクト一覧 */}
          <ProjectsSection />
        </div>
      </section>

      {/* Contact セクション */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-blue-900/20 relative overflow-hidden transition-all duration-500">
        {/* 装飾的背景 */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-200 to-transparent dark:via-green-700"></div>
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-pink-100 dark:bg-pink-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="fade-in mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl mb-6 shadow-lg">
              <span className="text-2xl">📧</span>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-green-600 dark:from-white dark:to-green-400 bg-clip-text text-transparent mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              お気軽にお声がけください。一緒に何か作りましょう！
            </p>
            
            <div className="mb-8">
              <a 
                href="mailto:yahari@skyia.jp"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                連絡する
              </a>
            </div>
          </div>

          <div className="fade-in grid grid-cols-3 gap-6 max-w-md mx-auto">
            {[
              { name: 'GitHub', href: 'https://github.com/yahari-dev', iconSlug: 'github', bgColor: 'from-gray-700 to-gray-900', iconColor: 'ffffff' },
              { name: 'X', href: 'https://twitter.com/yahari_dev', iconSlug: 'x', bgColor: 'from-gray-800 to-black', iconColor: 'ffffff' },
              { name: 'Qiita', href: 'https://qiita.com/humaibu_ok', iconSlug: 'qiita', bgColor: 'from-[#3ca600] to-[#2d7a00]', iconColor: 'ffffff' }
            ].map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="block">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border hover:scale-105">
                  <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br ${social.bgColor} flex items-center justify-center`}>
                    <img 
                      src={`https://cdn.simpleicons.org/${social.iconSlug}/${social.iconColor}`}
                      alt={`${social.name} icon`}
                      className="w-5 h-5"
                    />
                  </div>
                  <h3 className="text-xs font-medium text-gray-900 dark:text-white">{social.name}</h3>
                </div>
              </a>
            ))}
          </div>

          <div className="fade-in mt-12">
            <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-4 border">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                開発のご依頼やご相談、技術的なお話など、お気軽にご連絡ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 py-16 px-4 sm:px-6 lg:px-8 transition-all duration-500 border-t border-gray-200/50 dark:border-slate-700/50 relative overflow-hidden">
        {/* 装飾的背景 */}
        <div className="absolute -top-20 -left-20 w-32 h-32 bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-20 -right-20 w-32 h-32 bg-purple-100/50 dark:bg-purple-900/10 rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto relative">
          {/* リンクセクション */}
          <div className="fade-in grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">サイトマップ</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => smoothScrollTo('profile')} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Skills</button></li>
                <li><button onClick={() => smoothScrollTo('portfolio')} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Services</button></li>
                <li><button onClick={() => smoothScrollTo('contact')} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">SNS各種リンク</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://github.com/yahari-dev" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">GitHub</a></li>
                <li><a href="https://twitter.com/yahari_dev" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">X</a></li>
                <li><a href="https://qiita.com/yahari" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-[#55c500] transition-colors duration-300">Qiita</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">その他</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/license" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">ライセンス</a></li>
                <li><a href="/acknowledgments" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">謝辞</a></li>
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="fade-in text-center pt-8 border-t border-gray-200/30 dark:border-gray-700/30">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">や</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                © 2025 やーはり - All rights reserved
              </p>
            </div>
            <p className="text-gray-500 dark:text-gray-500 text-xs">
              Built with Next.js + Tailwind CSS + ❤️
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
