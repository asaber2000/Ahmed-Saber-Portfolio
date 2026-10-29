import React from 'react';

export default function WebSection() {
  return (
    <section id="web" className="py-20 border-t border-zinc-800 bg-zinc-950/60">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="mb-12">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">Modern Web Engineering</div>
          <h2 className="text-3xl font-bold text-white">Full-Stack Next.js Platforms</h2>
          <p className="text-zinc-400 text-sm mt-2 max-w-2xl">
            Custom web applications engineered with Next.js App Router, Sanity Headless CMS, and Core Web Vitals optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Project 1 */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-amber-400">
                <span>Headless Architecture</span>
                <span className="text-zinc-500">Live on Vercel</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Pavilia — B2B Modular Architecture</h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                Engineered an ultra-fast headless platform using Next.js, TypeScript, and Sanity CMS. Features complete Arabic RTL and English components, real-time specifications viewer, and 100/100 Core Web Vitals readiness.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-400 pt-4 border-t border-zinc-800">
              <span className="px-2.5 py-1 bg-zinc-800/60 rounded">Next.js App Router</span>
              <span className="px-2.5 py-1 bg-zinc-800/60 rounded">TypeScript</span>
              <span className="px-2.5 py-1 bg-zinc-800/60 rounded">Sanity CMS</span>
              <span className="px-2.5 py-1 bg-zinc-800/60 rounded">Tailwind CSS</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-amber-400">
                <span>Enterprise Real Estate</span>
                <span className="text-zinc-500">Production</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Turnkey Sales Centers Platform</h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                High-converting B2B landing architectures for luxury real estate developers in the UAE. Features interactive inquiry funnels, custom project gallery viewers, and pre-rendered JSON-LD schema structures.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-400 pt-4 border-t border-zinc-800">
              <span className="px-2.5 py-1 bg-zinc-800/60 rounded">Next.js</span>
              <span className="px-2.5 py-1 bg-zinc-800/60 rounded">High-Conversion Funnels</span>
              <span className="px-2.5 py-1 bg-zinc-800/60 rounded">Schema Markup</span>
              <span className="px-2.5 py-1 bg-zinc-800/60 rounded">Vercel Edge</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}