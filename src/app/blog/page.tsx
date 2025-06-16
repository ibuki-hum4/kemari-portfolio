'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

type BlogPost = {
  id: string;
  title: string;
  summary: string;
  url: string;
  date: string;
};

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "自分のポートフォリオを作ったどー！",
    summary: "作ったどー！",
    url: "https://yourblog.example.com/nextjs-intro",
    date: "2025-06-11",
  },
  {
    id: "2",
    title: "Next.jsでブログ機能を追加！",
    summary: "ポートフォリオサイトにブログ機能を追加しました。",
    url: "#",
    date: "2025-06-14",
  },
  {
    id: "3",
    title: "Tailwind CSSでデザインを改善",
    summary: "UIをより美しく、モダンに。",
    url: "#",
    date: "2025-06-13",
  },
  {
    id: "4",
    title: "アニメーションを実装",
    summary: "Framer Motionでスムーズなアニメーションを追加。",
    url: "#",
    date: "2025-06-12",
  },
];

export default function BlogPage() {
  return (
    <motion.main
      className="min-h-screen pt-20 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/"
            className="inline-block mb-8 text-purple-500 hover:text-purple-600 transition-colors"
          >
            ← ホームに戻る
          </Link>
        </motion.div>
        <motion.h1
          className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Blog Posts
        </motion.h1>
        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-gray-900"
            >
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{post.summary}</p>
              <div className="flex justify-between items-center">
                <time className="text-sm text-gray-500 dark:text-gray-400">{post.date}</time>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-purple-500 hover:text-purple-600 font-medium"
                >
                  Read more →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.main>
  );
}
