import React from 'react';
import Link from 'next/link';

export default function ProjectsSection() {
  return (
    <section className="w-full py-16 border-t border-zinc-900">
      
      {/* Title */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          Some projects<span className="text-[#ff2e7e]">.</span>
        </h2>
      </div>

      <div className="space-y-6">
        
        {/* 1. PRIMARY COMBINED CARD: Technical SEO & GEO */}
        <Link
          href="/seo"
          className="group relative flex flex-col md:flex-row items-center justify-between p-6 md:p-8 rounded-2xl bg-[#0a0a0a] border border-zinc-900 hover:border-zinc-750 transition-all duration-300"
        >
          {/* Visual Thumbnail */}
          <div className="w-full md:w-44 h-36 rounded-xl bg-gradient-to-br from-zinc-900 to-[#121214] border border-zinc-800 flex flex-col items-center justify-center p-4 shrink-0 text-center mb-4 md:mb-0">
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#ff2e7e] font-semibold">
              <span>SEO</span>
              <span className="text-zinc-600">+</span>
              <span>GEO</span>
            </div>
            <span className="text-[11px] font-mono text-zinc-400 mt-2">3 Flagship Studies</span>
          </div>

          {/* Details */}
          <div className="flex-1 md:px-8 text-left w-full">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff2e7e] px-2 py-0.5 rounded bg-[#ff2e7e]/10">
                Case Studies Hub
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#ff2e7e] transition-colors">
              Technical SEO & Generative Engine Optimization (GEO)
            </h3>
            <p className="text-xs md:text-sm text-zinc-400 mt-2 leading-relaxed">
              Real-world client evidence: Bait Al Nokhada (UAE #1 rankings), Tents Rental KSA (+1845% performance), and Lloyds British Egypt industrial audits.
            </p>
            
            {/* Quick Badges for Companies */}
            <div className="flex flex-wrap gap-2 mt-4 text-[11px] font-mono text-zinc-400">
              <span className="px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                Bait Al Nokhada
              </span>
              <span className="px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                Tents Rental KSA
              </span>
              <span className="px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                Lloyds British
              </span>
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex items-center text-zinc-600 group-hover:text-white transition-colors">
            <svg className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </Link>

        {/* 2. KNOWLEDGE & FOUNDATIONS GRID (الويب والكلاود كنوليدج ودراسة) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card: Web Engineering Knowledge */}
          <Link
            href="/web"
            className="group relative flex flex-col justify-between p-6 rounded-2xl bg-[#0a0a0a] border border-zinc-900 hover:border-zinc-750 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                  Study & Applied Knowledge
                </span>
                <span className="text-zinc-600 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#ff2e7e] transition-colors">
                Full-Stack Web Development
              </h3>
              <p className="text-xs md:text-sm text-zinc-400 mt-2 leading-relaxed">
                Knowledge acquired through engineering courses and continuous practice: Next.js (App Router), TypeScript, Tailwind, and Sanity Headless CMS architectures.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-mono text-zinc-500">
              <span>Next.js</span>
              <span>•</span>
              <span>TypeScript</span>
              <span>•</span>
              <span>Sanity</span>
            </div>
          </Link>

          {/* Card: Cloud & Systems Knowledge */}
          <Link
            href="/cloud"
            className="group relative flex flex-col justify-between p-6 rounded-2xl bg-[#0a0a0a] border border-zinc-900 hover:border-zinc-750 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                  Study & Applied Knowledge
                </span>
                <span className="text-zinc-600 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#ff2e7e] transition-colors">
                Cloud Architecture & Automation
              </h3>
              <p className="text-xs md:text-sm text-zinc-400 mt-2 leading-relaxed">
                Systems knowledge gained via AWS learning paths and automation builds: EC2, S3, RDS database separation, and Python Cloud Indexing pipelines.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-mono text-zinc-500">
              <span>AWS Architecture</span>
              <span>•</span>
              <span>Python APIs</span>
              <span>•</span>
              <span>DevOps</span>
            </div>
          </Link>

        </div>

      </div>

    </section>
  );
}