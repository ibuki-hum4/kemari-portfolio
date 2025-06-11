// src/components/Contact.tsx
'use client'

import React from 'react'

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 bg-white px-4 md:px-20 text-center"
    >
      <h2
        className="text-4xl font-bold mb-8
                   bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
                   bg-clip-text text-transparent animate-gradient-x"
      >
        Contact Me
      </h2>
      <p className="mb-6 text-gray-700 max-w-xl mx-auto">
        お問い合わせは下記のSNSかメールでお願いします。フォームは使っていません。
      </p>
      <div className="flex justify-center gap-10 text-lg">
        <a
          href="https://twitter.com/your_twitter_handle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
          aria-label="Twitter (X) DM"
        >
          {/* Xアイコンはskilliconsなどで差し替えOK */}
          <svg
            className="w-10 h-10 inline-block"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.07 9.07 0 01-2.88 1.1 4.52 4.52 0 00-7.7 4.12A12.84 12.84 0 013 4.15a4.5 4.5 0 001.4 6.05 4.5 4.5 0 01-2.05-.57v.06a4.52 4.52 0 003.62 4.43 4.5 4.5 0 01-2.04.08 4.52 4.52 0 004.21 3.14 9.05 9.05 0 01-5.6 1.93A9.32 9.32 0 012 19.54a12.75 12.75 0 006.92 2.02c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.42-.02-.62A9.2 9.2 0 0023 3z" />
          </svg>
          <span className="ml-2 align-middle">X (Twitter) DM</span>
        </a>
        <a
          href="mailto:your.email@example.com"
          className="text-red-500 hover:text-red-700 transition-colors duration-300"
          aria-label="Email"
        >
          <svg
            className="w-10 h-10 inline-block"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4 4h16v16H4V4zm0-2a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2H4zm8 7l8-5v10l-8-5z" />
          </svg>
          <span className="ml-2 align-middle">Email</span>
        </a>
      </div>
    </section>
  )
}
