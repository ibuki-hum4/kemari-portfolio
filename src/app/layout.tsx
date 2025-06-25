// src/app/layout.tsx
import "@/styles/globals.css"
import PageTransition from "@/components/PageTransition"
import React from "react"
import ParticleBG from "@/components/ParticleBG"

export const metadata = {
  title: "やーはり's Portfolio",
  description: "やーはりのポートフォリオ。モダンでクールなWebデザインと最新技術を活用した作品集。",
  openGraph: {
    title: "やーはり's Portfolio",
    description: "やーはりのポートフォリオ。モダンでクールなWebデザインと最新技術を活用した作品集。",
    url: "https://your-portfolio-url.com/",
    siteName: "やーはり's Portfolio",
    images: [
      {
        url: "/portfolio.png",
        width: 1200,
        height: 630,
        alt: "やーはり's Portfolio",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "やーはり's Portfolio",
    description: "やーはりのポートフォリオ。モダンでクールなWebデザインと最新技術を活用した作品集。",
    images: ["/portfolio.png"],
  },
  icons: {
    icon: "/8be9ec78-684a-4fd8-b69d-393edefa573b.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-gradient-to-br from-primary to-accent min-h-screen text-gray-900 dark:text-gray-100 relative overflow-x-hidden">
        <PageTransition>
          <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
            {/* 3Dパーティクル背景 */}
            <ParticleBG />
          </div>
          <div className="relative z-10">
            {children}
          </div>
        </PageTransition>
      </body>
    </html>
  );
}
