import React from 'react';
import Link from 'next/link';

export default function ProjectsSection() {
  return (
    <section id="seo" className="w-full py-16 border-t border-zinc-900 scroll-mt-10">
      
      {/* Section Header */}
      <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#ff2e7e]">
            Interactive Portfolio • Click Any Track
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-1">
            Domains & Work<span className="text-[#ff2e7e]">.</span>
          </h2>
        </div>
        <p className="text-xs font-mono text-zinc-500">
          Select a discipline to inspect live proof, architecture & metrics
        </p>
      </div>

      <div className="space-y-6">
        
        {/* 1. PRIMARY COMBINED CARD: Technical SEO & GEO */}
        <Link
          href="/seo"
          className="group relative flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 rounded-2xl bg-[#0a0a0a] border border-zinc-800/90 hover:border-[#ff2e7e]/60 hover:bg-[#0e0e11] transition-all duration-300 shadow-lg"
        >
          {/* Visual Thumbnail */}
          <div className="w-full md:w-44 h-36 rounded-xl bg-gradient-to-br from-zinc-900 to-[#121214] border border-zinc-800 group-hover:border-[#ff2e7e]/40 flex flex-col items-center justify-center p-4 shrink-0 text-center mb-5 md:mb-0 transition-colors">
            <div className="flex items-center gap-1.5 text-sm font-mono text-[#ff2e7e] font-bold">
              <span>SEO</span>
              <span className="text-zinc-600">+</span>
              <span>GEO</span>
            </div>
            <span className="text-[11px] font-mono text-zinc-300 mt-2">2 Flagship Studies</span>
            <span className="text-[10px] font-mono text-emerald-400 mt-1">Verified Telemetry</span>
          </div>

          {/* Details */}
          <div className="flex-1 md:px-8 text-left w-full">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff2e7e] px-2.5 py-0.5 rounded bg-[#ff2e7e]/10 border border-[#ff2e7e]/20">
                Production Case Studies
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#ff2e7e] transition-colors">
              Technical SEO & Generative Engine Optimization (GEO)
            </h3>
            <p className="text-xs md:text-sm text-zinc-400 mt-2 leading-relaxed">
              Verified client growth: Bait Al Nokhada (UAE #1 SERP rankings, +595% GSC impressions, Grade A speed & security) and Lloyds British Egypt (+108% 6-month search scale).
            </p>
            
            {/* Quick Badges + Clear Interactive CTA Button */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-5 pt-4 border-t border-zinc-900">
              <div className="flex flex-wrap gap-2 text-[11px] font-mono text-zinc-300">
                <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">
                  Bait Al Nokhada (UAE)
                </span>
                <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">
                  Lloyds British (Egypt)
                </span>
              </div>

              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 group-hover:bg-[#ff2e7e] border border-zinc-700 group-hover:border-[#ff2e7e] text-xs font-mono font-semibold text-white transition-all">
                <span>Explore Case Studies</span>
                <span className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
              </span>
            </div>
          </div>
        </Link>

        {/* 2. ENGINEERING & CLOUD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card: Web Engineering */}
          <Link
            href="/web"
            className="group relative flex flex-col justify-between p-6 md:p-7 rounded-2xl bg-[#0a0a0a] border border-zinc-800/90 hover:border-[#ff2e7e]/60 hover:bg-[#0e0e11] transition-all duration-300 shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-300 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">
                  End-to-End Web Builds
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 group-hover:bg-[#ff2e7e] border border-zinc-800 group-hover:border-[#ff2e7e] text-[11px] font-mono font-semibold text-zinc-200 group-hover:text-white transition-all">
                  <span>Open Page</span>
                  <span>↗</span>
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#ff2e7e] transition-colors">
                Web Engineering & CMS Architecture
              </h3>
              <p className="text-xs md:text-sm text-zinc-400 mt-2 leading-relaxed">
                Complete website engineering across two tracks: modern custom builds with Next.js, TypeScript & Sanity Headless CMS, and production WordPress architectures (such as Mirage Heights) optimized for speed and SEO.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <span>Next.js</span>
                <span>•</span>
                <span>TypeScript</span>
                <span>•</span>
                <span>Sanity CMS</span>
                <span>•</span>
                <span>WordPress</span>
              </div>
              <span className="text-[#ff2e7e] font-semibold group-hover:underline">View Builds →</span>
            </div>
          </Link>

          {/* Card: Cloud & Automation */}
          <Link
            href="/cloud"
            className="group relative flex flex-col justify-between p-6 md:p-7 rounded-2xl bg-[#0a0a0a] border border-zinc-800/90 hover:border-[#ff2e7e]/60 hover:bg-[#0e0e11] transition-all duration-300 shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-300 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">
                  Systems & Automation
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 group-hover:bg-[#ff2e7e] border border-zinc-800 group-hover:border-[#ff2e7e] text-[11px] font-mono font-semibold text-zinc-200 group-hover:text-white transition-all">
                  <span>Open Page</span>
                  <span>↗</span>
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#ff2e7e] transition-colors">
                Cloud Architecture & Automation
              </h3>
              <p className="text-xs md:text-sm text-zinc-400 mt-2 leading-relaxed">
                Hands-on AWS cloud deployments and automation workflows: EC2, S3, CloudFront CDN, RDS separation, and Python Google Indexing API pipelines.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <span>AWS Cloud</span>
                <span>•</span>
                <span>Python APIs</span>
                <span>•</span>
                <span>Automation</span>
              </div>
              <span className="text-[#ff2e7e] font-semibold group-hover:underline">View Architecture →</span>
            </div>
          </Link>

        </div>

      </div>

    </section>
  );
}