'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

type BlogPost = {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
};

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "自分のポートフォリオを作ったどー！",
    summary: "作ったどー！",
    content: `
# ポートフォリオサイトを作成しました！

Next.js と Tailwind CSS を使用して、モダンなポートフォリオサイトを作成しました。
主な機能：
- レスポンシブデザイン
- ダークモード対応
- スムーズスクロール
- アニメーション効果

これからも機能を追加していく予定です。
    `,
    date: "2025-06-11",
  },
  // 他の記事も同様に追加
];

export default function BlogPost() {
  const params = useParams();
  const post = blogPosts.find(post => post.id === params.id);

  if (!post) {
    return (
      <motion.div
        className="min-h-screen pt-20 pb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.h1
            className="text-4xl font-bold mb-8"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            記事が見つかりません
          </motion.h1>
          <motion.div
            className="flex gap-4"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/blog" className="text-purple-500 hover:text-purple-600 transition-colors">
              ← ブログ一覧に戻る
            </Link>
            <Link href="/" className="text-purple-500 hover:text-purple-600 transition-colors">
              ← ホームに戻る
            </Link>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.main
      className="min-h-screen pt-20 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.article
        className="max-w-4xl mx-auto px-6"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          className="flex gap-4 mb-8"
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/blog" className="text-purple-500 hover:text-purple-600 transition-colors">
            ← ブログ一覧に戻る
          </Link>
          <Link href="/" className="text-purple-500 hover:text-purple-600 transition-colors">
            ← ホームに戻る
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <time className="text-gray-500 dark:text-gray-400 mb-8 block">{post.date}</time>
          <div className="prose dark:prose-invert max-w-none">
            {post.content.split('\n').map((paragraph, index) => (
              <motion.p
                key={index}
                className="mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </motion.article>
    </motion.main>
  );
}
