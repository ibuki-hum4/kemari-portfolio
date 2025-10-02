import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ライセンス | やはりサイト",
  description: "本サイトのライセンス情報・利用規約について",
};

export default function LicensePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
      {/* ヘッダー */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
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
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* タイトルセクション */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <span className="text-2xl">📜</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent mb-4">
            ライセンス
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            本サイトの著作権・利用規約について
          </p>
        </div>

        {/* 著作権表示 */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 mb-8 border border-gray-200 dark:border-gray-700">
          <div className="text-center py-6 border-b border-gray-200 dark:border-gray-700 mb-6">
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
              © 2025 やーはり
            </p>
          </div>

          {/* コンテンツライセンス */}
          <section className="mb-10">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-xl">🎨</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                1. コンテンツ（文章・画像・デザイン等）
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6 mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                本ウェブサイトの文章、画像、イラスト、デザイン等のコンテンツは<br />
                <strong className="text-green-600 dark:text-green-400">
                  Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)
                </strong> に従って利用できます。
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">表示（BY）</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      利用する場合は「© 2025 やーはり」と明示してください
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-yellow-600 dark:text-yellow-400 mt-1">⚠</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">非営利（NC）</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      商用利用は禁止です
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">✎</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">改変</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      個人・学習目的での改変は自由ですが、公開する場合は元の著作権表示を残してください
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>免責事項:</strong> 本コンテンツの利用による損害について、著作権者は一切責任を負いません。
              </p>
            </div>
          </section>

          {/* ソースコードライセンス */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-xl">💻</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                2. ソースコード（HTML/CSS/JSなど）
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                本ウェブサイトのソースコードは <strong className="text-purple-600 dark:text-purple-400">MIT License</strong> に従って利用できます。
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-slate-900 rounded-lg p-6 font-mono text-sm overflow-x-auto mb-4">
              <pre className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
{`MIT License

Copyright (c) 2025 やーはり

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.`}
              </pre>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>免責事項:</strong> 本ソースコードの利用による損害について、著作権者は一切責任を負いません。
              </p>
            </div>
          </section>
        </div>

        {/* 追加情報 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
          <div className="flex items-start space-x-3">
            <span className="text-2xl">ℹ️</span>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                ライセンスに関するお問い合わせ
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                商用利用や特別な利用許諾については、お問い合わせください。
              </p>
              <a 
                href="mailto:yahari@skyia.jp"
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                お問い合わせ
              </a>
            </div>
          </div>
        </div>

        {/* リンク */}
        <div className="mt-8 text-center">
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 やーはり - All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
