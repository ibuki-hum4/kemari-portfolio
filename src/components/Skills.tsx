'use client'

import React from 'react'


const skills = [
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'Tailwind CSS', icon: 'tailwindcss' },
  { name: 'HTML', icon: 'html' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Git', icon: 'git' },
  { name: 'GitHub', icon: 'github' },
  { name: 'cloudflare', icon: 'cloudflare' },
  { name: 'Discord.js', icon: 'discordjs' },
  { name: 'Docker', icon: 'docker' },
  { name: 'K8s', icon: 'kubernetes' },
]

export default function Skills() {
  return (
    <section id="skills" className="glass rounded-[40px] shadow-glass backdrop-blur-2xl py-16 my-20 text-center">
      <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
        Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map(({ name, icon }) => (
          <div
            key={name}
            className="group relative w-20 h-20 rounded-[40px] shadow-glass backdrop-blur-2xl cursor-pointer transition-transform duration-300 hover:scale-110 bg-transparent"
          >
            <img
              src={`https://skillicons.dev/icons?i=${icon}`}
              alt={name}
              className="w-full h-full bg-transparent"
              draggable={false}
            />
            <span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-2
                         opacity-0 group-hover:opacity-100
                         bg-purple-600 text-white text-xs rounded px-2 py-1
                         pointer-events-none
                         transition-opacity duration-300"
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
