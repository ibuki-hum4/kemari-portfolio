"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function getNextBirthday(now: Date) {
  const year = now.getMonth() + 1 > 11 || (now.getMonth() + 1 === 11 && now.getDate() > 9) ? now.getFullYear() + 1 : now.getFullYear();
  return new Date(year, 10, 9, 0, 0, 0); // 11月9日（0-indexedで11月は10）
}

const messages = [
  "今日も一日がんばろう！",
  "誕生日まであと少し！",
  "やーはりのサイトに来てくれてありがとう！",
  "素敵な一年になりますように。",
  "新しい挑戦を楽しもう！",
  "健康第一！",
  "笑顔で過ごそう！",
];

export default function CountdownSection() {
  const [now, setNow] = useState(new Date());
  const [diff, setDiff] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [message, setMessage] = useState(messages[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      const current = new Date();
      setNow(current);
      const nextBD = getNextBirthday(current);
      setDiff(nextBD.getTime() - current.getTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setMessage(messages[Math.floor(Math.random() * messages.length)]);
  }, [diff]);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const isBirthday = days === 0 && hours === 0 && minutes === 0 && seconds === 0;

  useEffect(() => {
    if (isBirthday) {
      setShowConfetti(true);
      const timeout = setTimeout(() => setShowConfetti(false), 6000);
      return () => clearTimeout(timeout);
    }
  }, [isBirthday]);

  return (
    <section id="countdown" className="glass rounded-[40px] shadow-glass backdrop-blur-2xl max-w-2xl mx-auto my-20 p-10 text-center relative overflow-hidden">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
        誕生日カウントダウン
      </h2>
      <div className="font-mono text-gray-900 dark:text-gray-100 mb-4">
        現在時刻: {now.toLocaleString("ja-JP", { hour12: false })}
      </div>
      <div className="mb-4 text-base text-gray-700 dark:text-gray-200 italic animate-pulse">
        {message}
      </div>
      {isBirthday ? (
        <AnimatePresence>
          {showConfetti && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
            >
              <span className="text-pink-600 font-bold animate-bounce text-2xl drop-shadow-lg">🎉 誕生日おめでとう！ 🎉</span>
              {/* 簡易的な紙吹雪エフェクト */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 10}%`,
                    }}
                    initial={{ y: 0, opacity: 1, rotate: 0 }}
                    animate={{ y: 400 + Math.random() * 100, opacity: 0, rotate: Math.random() * 360 }}
                    transition={{ duration: 2 + Math.random() * 2, delay: Math.random() * 1 }}
                  >
                    <span style={{ fontSize: 24 }}>
                      {['🎉','✨','🎊','💖','🥳'][Math.floor(Math.random()*5)]}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      ) : (
        <div className="text-gray-700 dark:text-gray-200 text-lg">
          次の誕生日(11/09)まで: <span className="font-bold text-primary">{days}日 {hours}時間 {minutes}分 {seconds}秒</span>
        </div>
      )}
    </section>
  );
}
