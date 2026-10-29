import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-zinc-900">
      <div className="max-w-5xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-mono text-sm tracking-wider font-semibold text-white">
          AHMED_SABER<span className="text-[#ff2e7e]">.dev</span>
        </Link>
        <nav className="flex items-center gap-5 text-xs font-mono text-zinc-400">
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <Link href="/seo" className="hover:text-white transition-colors">SEO & GEO</Link>
          <Link href="/web" className="hover:text-white transition-colors">WEB</Link>
          <Link href="/cloud" className="hover:text-white transition-colors">CLOUD</Link>
        </nav>
      </div>
    </header>
  );
}