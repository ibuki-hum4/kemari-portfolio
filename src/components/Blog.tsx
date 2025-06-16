"use client";
import Link from "next/link";

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
    url: "/blog/1",
    date: "2025-06-11",
  },
  {
    id: "2",
    title: "Next.jsでブログ機能を追加！",
    summary: "ポートフォリオサイトにブログ機能を追加しました。",
    url: "/blog/2",
    date: "2025-06-14",
  },
  {
    id: "3",
    title: "Tailwind CSSでデザインを改善",
    summary: "UIをより美しく、モダンに。",
    url: "/blog/3",
    date: "2025-06-13",
  },
  {
    id: "4",
    title: "アニメーションを実装",
    summary: "Framer Motionでスムーズなアニメーションを追加。",
    url: "/blog/4",
    date: "2025-06-12",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-white dark:bg-black px-6 py-20">
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
        Blog
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 mb-8">
          {blogPosts.slice(0, 4).map((post) => (
            <Link
              key={post.id}
              href={post.url}
              className="block p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-gray-900"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {post.summary}
              </p>
              <time className="text-sm text-gray-500 dark:text-gray-400">
                {post.date}
              </time>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors"
          >
            もっと記事を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
