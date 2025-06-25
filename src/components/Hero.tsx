"use client";
import { motion } from "framer-motion";

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("about");
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-6 py-20 md:py-32 overflow-hidden rounded-3xl shadow-glass glass border border-white/20 backdrop-blur-2xl">
      {/* パーティクル装飾 */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <svg width="100%" height="100%" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20%" cy="30%" r="60" fill="#0ea5e9" fillOpacity="0.12" />
          <circle cx="80%" cy="60%" r="80" fill="#f43f5e" fillOpacity="0.10" />
          <circle cx="50%" cy="80%" r="40" fill="#fff" fillOpacity="0.08" />
        </svg>
      </div>
      {/* グラデーション背景 */}
      <div className="absolute inset-0 -z-10 animate-gradient-x bg-gradient-to-br from-primary via-accent to-primary/80 blur-2xl opacity-60 rounded-3xl" />
      {/* キャッチコピー */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        やーはりのサイトへようこそ
      </motion.h1>
      {/* サブテキスト */}
      <motion.p
        className="mt-6 text-lg md:text-2xl text-white max-w-xl drop-shadow-lg relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        やーはりのサイトです。特に何も無いです。暇ならぜひ見てってください。
      </motion.p>
      {/* CTAボタン */}
      <motion.a
        href="#about"
        onClick={handleScroll}
        className="mt-10 inline-block px-10 py-4 rounded-full bg-gradient-to-r from-primary via-accent to-primary/80 text-lg font-bold text-white shadow-glass border border-white/30 backdrop-blur-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-accent/40"
        whileHover={{ scale: 1.08, boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, type: "spring" }}
        aria-label="もっと見る"
      >
        <span className="inline-flex items-center group-hover:translate-y-1 transition-transform duration-300">
          もっと見る
          <svg
            className="ml-2 w-5 h-5 animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </span>
      </motion.a>
    </section>
  );
}