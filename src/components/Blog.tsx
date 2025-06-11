"use client";

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
];

export default function Blog() {
  return (
    <section id="blog" className="bg-white dark:bg-black px-6 py-20">
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
        Blog
      </h2>
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        {blogPosts.map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-gray-900"
          >
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{post.summary}</p>
            <time className="text-sm text-gray-500 dark:text-gray-400">{post.date}</time>
          </a>
        ))}
      </div>
    </section>
  );
}
