import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "謝辞 | やはりサイト",
  description: "本サイトの開発に使用したツール・ライブラリへの感謝",
};

export default function AcknowledgmentsPage() {
  const technologies = [
    {
      category: "フレームワーク",
      icon: "⚡",
      color: "from-blue-500 to-cyan-500",
      items: [
        { name: "Next.js", description: "Reactベースのフルスタックフレームワーク", url: "https://nextjs.org/" },
        { name: "React", description: "UIコンポーネントライブラリ", url: "https://react.dev/" },
        { name: "TypeScript", description: "型安全なJavaScript", url: "https://www.typescriptlang.org/" },
      ]
    },
    {
      category: "スタイリング",
      icon: "🎨",
      color: "from-purple-500 to-pink-500",
      items: [
        { name: "Tailwind CSS", description: "ユーティリティファーストCSSフレームワーク", url: "https://tailwindcss.com/" },
        { name: "Lenis", description: "スムーズスクロールライブラリ", url: "https://lenis.darkroom.engineering/" },
      ]
    },
    {
      category: "アイコン・画像",
      icon: "🖼️",
      color: "from-green-500 to-teal-500",
      items: [
        { name: "Simple Icons", description: "ブランドアイコンライブラリ", url: "https://simpleicons.org/" },
        { name: "Skill Icons", description: "技術スタックアイコンジェネレーター", url: "https://skillicons.dev/" },
      ]
    },
    {
      category: "開発ツール",
      icon: "🛠️",
      color: "from-orange-500 to-red-500",
      items: [
        { name: "VS Code", description: "コードエディタ", url: "https://code.visualstudio.com/" },
        { name: "GitHub", description: "バージョン管理・ホスティング", url: "https://github.com/" },
        { name: "Vercel", description: "デプロイメントプラットフォーム", url: "https://vercel.com/" },
      ]
    },
    {
      category: "フォント",
      icon: "🔤",
      color: "from-indigo-500 to-blue-500",
      items: [
        { name: "Geist", description: "Vercel公式フォント", url: "https://vercel.com/font" },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
      {/* ヘッダー */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">や</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
                やーはり
              </span>
            </Link>
            <Link 
              href="/"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              ← ホームへ戻る
            </Link>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* タイトルセクション */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl mb-6 shadow-lg">
            <span className="text-2xl">🙏</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-pink-600 dark:from-white dark:to-pink-400 bg-clip-text text-transparent mb-4">
            謝辞 / Acknowledgments
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            このサイトの開発に使用した素晴らしいツール・ライブラリに感謝します
          </p>
        </div>

        {/* 感謝のメッセージ */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 mb-12 border border-blue-200 dark:border-blue-800">
          <div className="flex items-start space-x-4">
            <span className="text-4xl">💝</span>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Thank You to Open Source Community
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                このサイトは、オープンソースコミュニティの素晴らしい開発者たちによって作られた、
                多くのツールやライブラリのおかげで実現しました。
                それぞれのプロジェクトの開発者・コントリビューターの皆様に心から感謝します。
              </p>
            </div>
          </div>
        </div>

        {/* 技術カテゴリー */}
        <div className="space-y-8">
          {technologies.map((tech) => (
            <section key={tech.category} className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center shadow-md`}>
                  <span className="text-2xl">{tech.icon}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {tech.category}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tech.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-gray-50 dark:bg-slate-900 rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.name}
                      </h3>
                      <svg 
                        className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* 特別な感謝 */}
        <div className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-8 border border-yellow-200 dark:border-yellow-800">
          <div className="flex items-start space-x-4">
            <span className="text-3xl">⭐</span>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Special Thanks
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                特に、以下のプロジェクトには深く感謝しています：
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="text-blue-600 dark:text-blue-400">•</span>
                  <span><strong>Next.js</strong> - 開発体験を劇的に向上させる素晴らしいフレームワーク</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-purple-600 dark:text-purple-400">•</span>
                  <span><strong>Tailwind CSS</strong> - 迅速で柔軟なスタイリングを実現</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-600 dark:text-green-400">•</span>
                  <span><strong>Lenis</strong> - なめらかなスクロール体験を提供</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* コミュニティへのメッセージ */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              オープンソースコミュニティの精神に敬意を表し、<br />
              このサイトのソースコードも <strong className="text-blue-600 dark:text-blue-400">MIT License</strong> で公開しています。
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="/license"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors shadow-md"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                ライセンスを見る
              </a>
              <a 
                href="https://github.com/yahari-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl transition-colors"
              >
                <img 
                  src="https://cdn.simpleicons.org/github/181717"
                  alt="GitHub icon"
                  className="w-5 h-5 mr-2"
                />
                GitHubで見る
              </a>
            </div>
          </div>
        </div>

        {/* リンク */}
        <div className="mt-12 text-center">
          <Link 
            href="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            ホームへ戻る
          </Link>
        </div>
      </main>

      {/* フッター */}
      <footer className="border-t border-gray-200 dark:border-gray-700 mt-12 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 やーはり - All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
