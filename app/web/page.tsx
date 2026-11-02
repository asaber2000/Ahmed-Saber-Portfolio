'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const getImgSrc = (name: string) => encodeURI(`/${name}`);

interface ProjectShowcase {
  id: string;
  tag: string;
  title: string;
  category: string;
  status: string;
  description: string;
  architecturePoints: string[];
  stack: string[];
  imagePath: string;
  imageCaption: string;
}

const webProjects: ProjectShowcase[] = [
  {
    id: 'nokhada-rebuild',
    tag: 'NEXT-GEN ARCHITECTURE',
    title: 'Bait Al Nokhada Enterprise Web Platform',
    category: 'Decoupled Full-Stack Architecture',
    status: 'In Active Development',
    description:
      'Recognizing the creeping latency and architectural decay of the legacy monolithic platform, I initiated and engineered a ground-up rebuild. Decoupling the frontend with Next.js App Router and connecting it with a headless Sanity CMS provides enterprise editorial teams complete visual agility while enforcing strict sub-second Edge caching across the GCC.',
    architecturePoints: [
      'Next.js 15 App Router with full Server Components (RSC) to minimize client-side JavaScript.',
      'Headless Sanity CMS integration with automated webhook-driven on-demand ISR revalidation.',
      'Global Edge deployment on Vercel ensuring <150ms TTFB for visitors in Dubai, Riyadh, and Cairo.',
      'Built-in structured metadata generators matching Google Rich Results & Knowledge Graph schemas.'
    ],
    stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Sanity Studio', 'Vercel Edge', 'Node.js'],
    imagePath: 'web-nokhada-preview.jpg',
    imageCaption: 'Next.js Frontend Architecture & Sanity CMS Visual Studio Interface'
  },
  {
    id: 'high-velocity-landings',
    tag: 'COMMERCIAL CAMPAIGN ENGINES',
    title: 'Tactical High-Velocity Next.js Landing Pages',
    category: 'Rapid Event Procurement Engines',
    status: 'Shipped to Production',
    description:
      'When high-intent commercial seasons hit the UAE and Saudi Arabia, speed of execution is critical. I engineered two standalone, ultra-lean landing pages built exclusively with React and Next.js. Engineered without heavy CMS bloat, these pages achieved instant mobile loading speeds and high conversion rates for rental inquiries.',
    architecturePoints: [
      'Zero unnecessary third-party scripts resulting in a flawless 98+ Mobile Lighthouse score.',
      'Custom frictionless lead-capture forms integrated with instant email notifications and Google Sheets API.',
      'Dynamic OpenGraph and Twitter cards generated on-the-fly for commercial social distribution.',
      'Direct conversion tracking with lightweight custom event listeners in Google Analytics 4.'
    ],
    stack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Google Cloud API'],
    imagePath: 'web-landing-preview.jpg',
    imageCaption: 'Tactical Landing Page Interface & Dynamic Lead Intake Funnel'
  },
  {
    id: 'real-estate-wordpress',
    tag: 'CUSTOM CMS ENGINEERING',
    title: 'Custom-Engineered Real Estate Marketing Platform',
    category: 'PropTech Custom WordPress Architecture',
    status: 'Production Deployed',
    description:
      'Engineered an enterprise real estate listing platform from scratch on WordPress without using bloated, slow visual page builders. Designed custom PHP post types, taxonomies, and high-performance relational database queries allowing users to search, filter, and explore commercial and residential properties with minimal DOM weight.',
    architecturePoints: [
      'Custom-coded PHP templates avoiding commercial page-builder bloat and unnecessary database queries.',
      'Tailored custom taxonomies and meta fields for property types, pricing tiers, and regional locations.',
      'Optimized MySQL indexing and query caching for instant property archive rendering.',
      'Fully automated responsive WebP image pipelines with strict lazy-loading protocols.'
    ],
    stack: ['WordPress Core', 'PHP 8.2', 'MySQL Optimization', 'Tailwind CSS', 'JavaScript'],
    imagePath: 'web-realestate-preview.jpg',
    imageCaption: 'Custom Property Architecture, Query Filtering & Responsive UI'
  },
  {
    id: 'server-hardening',
    tag: 'INFRASTRUCTURE & RELIABILITY',
    title: 'Production Server Hardening & Vulnerability Mitigation',
    category: 'Server Security & Reverse Proxy Engineering',
    status: 'Operational Standard',
    description:
      'Continuous hands-on research in cloud infrastructure revealed that server-level configurations directly determine search crawler efficiency and system resilience. I configured hardened Nginx reverse proxies, isolated databases, implemented strict SSL/TLS cryptographic policies, and successfully upgraded domain security posture to Grade B.',
    architecturePoints: [
      'Implemented Strict-Transport-Security (HSTS), X-Content-Type-Options, and anti-clickjacking frame rules.',
      'Configured Nginx reverse proxy micro-caching to protect backend nodes during traffic surges.',
      'Crawl-budget preservation by rate-limiting bad scrapers and prioritizing verified search bots.',
      'Eliminated open port vulnerabilities and hardened SSH key-based access authentication.'
    ],
    stack: ['Nginx', 'Ubuntu Linux', 'SSL/TLS Cryptography', 'Cloudflare Edge', 'Bash Scripting'],
    imagePath: 'web-server-preview.jpg',
    imageCaption: 'Production HTTP Response Headers & Server Hardening Diagnostics'
  }
];

export default function WebEngineeringPage() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <div 
      className="min-h-screen bg-black text-white selection:bg-[#ff2e7e] selection:text-white"
      style={{ fontFamily: 'var(--font-body-en), Montserrat, sans-serif' }}
    >
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 md:px-8 pt-12 pb-28">
        
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-white transition-colors mb-10"
        >
          ← BACK TO HOME
        </Link>

        {/* 1. HERO SECTION: THE CONTINUOUS LEARNING JOURNEY */}
        <section className="relative p-8 md:p-14 rounded-3xl bg-gradient-to-b from-[#0e0e12] via-[#09090b] to-black border border-zinc-850 shadow-2xl mb-24 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#ff2e7e]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-6 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-[#ff2e7e]/15 border border-[#ff2e7e]/30 text-[#ff2e7e] font-mono text-xs font-semibold">
                FULL-STACK CRAFT & CODE
              </span>
              <span className="px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono text-xs">
                Self-Taught • Hands-On Practice
              </span>
            </div>

            <h1 
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
              style={{ fontFamily: 'var(--font-heading-en), Cinzel, serif' }}
            >
              Continuous Engineering & Modern Web Architecture
            </h1>

            <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-normal max-w-3xl">
              I never treated search intelligence as an isolated discipline. Driven by curiosity and dedicated hours of hands-on study in my spare time, I delved deep into modern software engineering—building custom web applications, exploring backend nodes, and mastering server infrastructure.
            </p>

            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-normal max-w-3xl">
              Today, this dual expertise allows me not just to recommend architectural fixes, but to actively write the code, configure headless content management, deploy edge microservices, and secure production servers.
            </p>

            {/* Quick Specs Ticker */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-zinc-400 border-t border-zinc-850">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Next.js 15 & React 19</span>
              </div>
              <div>•</div>
              <div>Headless Sanity CMS</div>
              <div>•</div>
              <div>Custom WordPress Architecture</div>
              <div>•</div>
              <div className="text-[#ff2e7e]">Linux & Nginx Hardening</div>
            </div>
          </div>
        </section>

        {/* 2. THE SHOWCASE OF WEB PROJECTS (WIDE, IN-DEPTH CARDS) */}
        <section className="space-y-28">
          {webProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 md:p-12 rounded-3xl bg-[#0a0a0c] border border-zinc-850 space-y-8 shadow-2xl relative"
            >
              
              {/* Project Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-850">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-0.5 rounded-full bg-[#ff2e7e]/10 border border-[#ff2e7e]/20 text-[#ff2e7e] font-mono text-xs font-semibold">
                      {project.tag}
                    </span>
                    <span className="text-zinc-500 font-mono text-xs">•</span>
                    <span className="text-zinc-400 font-mono text-xs">{project.category}</span>
                  </div>
                  <h2 
                    className="text-2xl md:text-4xl font-bold text-white tracking-wide mt-1"
                    style={{ fontFamily: 'var(--font-heading-en), Cinzel, serif' }}
                  >
                    {project.title}
                  </h2>
                </div>

                <div className="flex items-center gap-2 self-start md:self-auto">
                  <span className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 font-semibold">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Narrative Story */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                  Engineering Context & Intent
                </h3>
                <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>

              {/* HUGE FEATURED IMAGE CANVAS (WIDE & CLEAR) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="text-zinc-300">{project.imageCaption}</span>
                  <span className="text-[#ff2e7e]">Click image to inspect ↗</span>
                </div>

                <motion.div
                  whileHover={{ scale: 1.008 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setLightboxImg(getImgSrc(project.imagePath))}
                  className="relative h-[360px] md:h-[480px] w-full rounded-2xl overflow-hidden border border-zinc-800 bg-[#070709] cursor-zoom-in group shadow-2xl flex items-center justify-center"
                >
                  <img
                    src={getImgSrc(project.imagePath)}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-500"
                    onError={(e) => {
                      // صورة احتياطية توضيحية حتى تضيف صورتك المخصصة بنفس الاسم
                      const target = e.target as HTMLImageElement;
                      target.src = getImgSrc('vercel.jpg');
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-xs font-mono text-white bg-black/85 px-3 py-1.5 rounded-lg border border-zinc-700">
                      Expand High-Resolution Architecture Screenshot
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Architectural Breakthroughs */}
              <div className="space-y-4 pt-4 border-t border-zinc-850">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#ff2e7e]">
                  Key Technical Deliverables
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.architecturePoints.map((point, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-850 text-xs md:text-sm text-zinc-300 leading-relaxed flex items-start gap-2.5"
                    >
                      <span className="text-[#ff2e7e] font-bold mt-0.5">▹</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs font-mono text-zinc-500 mr-2">Built with:</span>
                {project.stack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </section>

      </main>

      {/* LIGHTBOX MODAL */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md cursor-zoom-out"
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img src={lightboxImg} alt="Enlarged Project Preview" className="max-w-full max-h-full object-contain" />
          </div>
          <span className="absolute top-6 right-8 text-zinc-400 font-mono text-sm">Click anywhere to close ✕</span>
        </div>
      )}

      <Footer />
    </div>
  );
}