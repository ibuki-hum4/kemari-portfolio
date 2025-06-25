"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECRET_CODE = ["y", "a", "h", "a", "r", "i"];
const EGG_MESSAGES = [
  "やーはり、見つけたね！🥚",
  "イースターエッグ発見！🎉",
  "隠しコマンド成功！",
  "Congratulations! You found the secret!",
  "秘密のメッセージ：君は天才！",
];

export default function EasterEgg() {
  const [input, setInput] = useState<string[]>([]);
  const [showEgg, setShowEgg] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      setInput((prev) => {
        const next = [...prev, e.key.toLowerCase()].slice(-SECRET_CODE.length);
        if (next.join("") === SECRET_CODE.join("")) {
          setShowEgg(true);
          setMessage(EGG_MESSAGES[Math.floor(Math.random() * EGG_MESSAGES.length)]);
          setTimeout(() => setShowEgg(false), 5000);
        }
        return next;
      });
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {showEgg && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[9999] bg-white/90 dark:bg-black/90 rounded-2xl px-8 py-6 shadow-2xl border border-primary text-center text-lg font-bold text-primary dark:text-accent backdrop-blur-xl"
        >
          <span role="img" aria-label="egg">🥚</span> {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
