// src/app/layout.tsx
import "@/styles/globals.css"
import type { Metadata } from "next"
import PageTransition from "@/components/PageTransition"

export const metadata: Metadata = {
  title: "やーはり's Portfolio",
  description: "やーはりのポートフォリオ",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-white text-gray-900">
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  )
}
