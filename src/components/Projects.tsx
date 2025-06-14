// src/components/Projects.tsx
'use client'

import React from 'react'

type Project = {
  id: number
  title: string
  description: string
  image?: string
  githubUrl: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'ポートフォリオサイト',
    description: 'Next.js と Tailwind CSS で構築したモダンなポートフォリオ。(このサイト)',
    image: '/portfolio.png',
    githubUrl: '',
    liveUrl: '',
  },
  {
    id: 2,
    title: 'Todo App',
    description: 'Goで作ったシンプル Todo アプリ。',
    githubUrl: 'https://github.com/ibuki-hum4/Go-Todo-app',
  },
  // 他のプロジェクトもここに追加可能
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 bg-white px-4 md:px-20"
    >
      <h2
        className="text-4xl font-bold mb-12
                   bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
                   bg-clip-text text-transparent animate-gradient-x text-center"
      >
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map(({ id, title, description, image, githubUrl, liveUrl }) => (
          <div
            key={id}
            className="bg-white rounded-xl overflow-hidden border border-gray-200
                       shadow-sm hover:shadow-lg transition-shadow duration-300
                       transform hover:scale-[1.02] flex flex-col"
          >
            {image && (
              <img
                src={image}
                alt={title}
                className="w-full h-40 object-cover"
              />
            )}
            <div className="p-6 flex-1 flex flex-col">
              <h3
                className="text-2xl font-semibold mb-4
                           bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
                           bg-clip-text text-transparent animate-gradient-x"
              >
                {title}
              </h3>
              <p className="text-gray-700 flex-1">{description}</p>
              <div className="mt-6 flex gap-3">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 rounded-md
                             bg-gray-800 text-white hover:bg-gray-900
                             transition-colors duration-200"
                >
                  GitHub
                </a>
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 rounded-md
                               bg-blue-600 text-white hover:bg-blue-700
                               transition-colors duration-200"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
