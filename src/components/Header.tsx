'use client'

import Link from 'next/link'

export default function Header() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, '')
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gradient bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Yahari
        </h1>
        <ul className="flex gap-6 text-sm font-medium text-gray-700">
          <li><Link href="#about" onClick={handleScroll}>About</Link></li>
          <li><Link href="#skills" onClick={handleScroll}>Skills</Link></li>
          <li><Link href="#projects" onClick={handleScroll}>Projects</Link></li>
          <li><Link href="#blog" onClick={handleScroll}>Blog</Link></li>
          <li><Link href="#contact" onClick={handleScroll}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}