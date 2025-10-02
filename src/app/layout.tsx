import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

// Noto Sans JP可変フォント - 最適なパフォーマンスと日本語表示
const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "900"],
  preload: true,
});

export const metadata: Metadata = {
  title: "やーはり",
  description: "Next.js + Tailwind CSSで構築したモダンでシンプルな個人サイト。プロフィール、ポートフォリオ、連絡先情報を掲載しています。",
  icons: {
    icon: "/profile-icon.png",
    shortcut: "/profile-icon.png",
    apple: "/profile-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
