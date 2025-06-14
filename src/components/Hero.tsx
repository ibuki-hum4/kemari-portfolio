"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden rounded-3xl shadow-2xl">
      {/* 境界ぼかし用の外側グラデーション */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div className="w-full h-full rounded-3xl bg-gradient-to-br from-purple-600 via-pink-400 to-indigo-400 blur-3xl opacity-40"></div>
      </div>

      {/* 背景グラデーションアニメーション */}
      <div className="absolute inset-0 -z-10 animate-gradient-bg bg-gradient-to-br from-purple-600 via-pink-400 to-indigo-400 blur-2xl opacity-70 rounded-3xl" />

      {/* パーティクル風の装飾 */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        {/* SVGやCanvasによるパーティクル（省略） */}
      </div>

      {/* キャッチコピー（白文字・太字・影あり） */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        やーはりのサイトへようこそ
      </motion.h1>

      {/* サブテキスト（白文字・影あり） */}
      <motion.p
        className="mt-6 text-lg md:text-xl text-white max-w-xl drop-shadow"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        やーはりのサイトです。特に何も無いです。暇ならぜひ見てってください。
      </motion.p>

      {/* CTAボタン */}
      <motion.a
        href="#about"
        className="mt-10 inline-block px-8 py-3 rounded-full bg-white/30 backdrop-blur-md border border-white/30 text-lg font-bold text-purple-900 shadow-xl hover:bg-white/40 transition"
        whileHover={{ scale: 1.08, boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, type: "spring" }}
      >
        もっと見る
      </motion.a>
    </section>
  );
}