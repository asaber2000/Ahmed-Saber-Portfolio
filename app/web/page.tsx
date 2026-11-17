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
  liveUrl?: string;
  description: string;
  architecturePoints: string[];
  stack: string[];
  imagePath: string;
  imageCaption: string;
}

const webProjects: ProjectShowcase[] = [
  {
    id: 'nokhada-rebuild',
    tag: 'FULL-STACK REBUILD & CLOUD MIGRATION',
    title: 'Bait Al Nokhada Enterprise Web Platform (baitalnokhada.com)',
    category: 'Bilingual Next.js, Sanity CMS & AWS Cloud Architecture',
    status: 'Live in Production',
    liveUrl: 'https://baitalnokhada.com',
    description:
      'Built from scratch using React, Next.js, and Sanity Headless CMS to replace a slow legacy site with a modern bilingual (AR/EN) platform. Deployed on Vercel with AWS S3 & CloudFront media delivery, achieving top GTmetrix speeds and a zero-loss GoDaddy DNS migration from Kinsta that preserved 25+ years of SEO authority.',
    architecturePoints: [
      'Scratch-Coded Bilingual Architecture: Organized modular folder structure (/app, /ar, /components, /components-ar) with smooth modern animations and clean reusable UI components.',
      'Hybrid Cloud & CDN Media Delivery: Hosted on Vercel Edge and connected to AWS S3 + CloudFront CDN for videos/static assets, paired with Sanity CDN for CMS-managed images.',
      'No-Code Sanity Headless CMS (/Admin): Built a complete content studio allowing teams to publish and manage Articles, Products, Solutions, and Projects in Arabic & English without touching code.',
      'Zero-Loss DNS & SEO Migration (GoDaddy & Kinsta): Migrated all data, dynamic sitemaps, and redirects, switching GoDaddy DNS from Kinsta to Vercel while protecting 25 years of SEO authority and rankings.',
      'Blazing GTmetrix & Core Web Vitals Speed: Eliminated legacy server bottlenecks, delivering near-instant page loads and fluid user experience across desktop and mobile.'
    ],
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'Sanity Headless CMS',
      'Vercel',
      'AWS S3 & CloudFront',
      'Framer Motion',
      'GoDaddy DNS'
    ],
    imagePath: 'ahmed/baitalnokhada-site.jpeg',
    imageCaption: 'Bait Al Nokhada Live Bilingual Platform (baitalnokhada.com) & Sanity CMS Architecture'
  },
  {
    id: 'high-velocity-landings',
    tag: 'B2B LEAD-GEN & AD CAMPAIGN ENGINE',
    title: 'Bait Al Nokhada Solutions Landing Page (tents.baitalnokhada.com)',
    category: 'Subdomain Next.js App, Ad Tracking & Conversion Funnel',
    status: 'Live in Production',
    liveUrl: 'https://tents.baitalnokhada.com',
    description:
      'Engineered a standalone, conversion-focused landing page on a dedicated subdomain (tents.baitalnokhada.com) via GoDaddy CNAME DNS linked to Vercel. Built with Next.js App Router, TypeScript, and Tailwind CSS, it combines interactive solution tickers, a featured mega-projects showcase (GITEX, Gulfood, Netflix), multi-channel CTAs (WhatsApp, direct call, server-side quote API), and custom LinkedIn & OpenAI ad conversion trackers.',
    architecturePoints: [
      'Subdomain & DNS Isolation: Configured GoDaddy CNAME DNS records pointing tents.baitalnokhada.com to Vercel Edge, isolating paid ad traffic from the main corporate site.',
      'Custom Ad Attribution (LinkedIn & OpenAI): Built dedicated client tracking components (LinkedInPageView & OpenAIPageView) to measure B2B ad campaign conversions accurately.',
      'Server-Side Lead Capture (/app/api): Developed Next.js API routes powering the Get Free Quote form alongside instant WhatsApp Widget and direct phone CTAs.',
      'Interactive UI & Mega-Project Showcase: Built smooth Framer Motion & CSS marquees (SolutionsTicker) and an interactive case-study slider highlighting covered area, location, and delivery metrics.',
      'Technical SEO Ready: Implemented programmatic sitemap.ts, robots.ts, custom font optimization (fonts.ts), and sub-second mobile load speeds.'
    ],
    stack: [
      'Next.js App Router',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Next.js API Routes',
      'Vercel',
      'GoDaddy CNAME DNS',
      'LinkedIn & OpenAI Tracking',
      'Framer Motion'
    ],
    imagePath: 'ahmed/tents-landing-page.jpeg',
    imageCaption: 'Bait Al Nokhada Solutions Campaign Landing Page (tents.baitalnokhada.com)'
  },
  
  {
    id: 'sales-centers-platform',
    tag: 'PROPTECH & REAL ESTATE LEAD ENGINE',
    title: 'Real Estate Sales Centers Landing Page (sales-centers.baitalnokhada.com)',
    category: 'Subdomain Next.js App, Interactive Showcase & REST API Lead Funnel',
    status: 'Live in Production',
    liveUrl: 'https://sales-centers.baitalnokhada.com',
    description:
      'Engineered a dedicated B2B landing page targeting real estate developers and trade centers on sales-centers.baitalnokhada.com via GoDaddy CNAME DNS connected to Vercel. Built with Next.js App Router, TypeScript, and Tailwind CSS, featuring a full-bleed video hero, interactive multi-tab developer showcases (Amaal × Mansory, Imtiaz, Al Marwan) with technical spec breakdowns, and a server-side REST API quote & site-layout funnel.',
    architecturePoints: [
      'Subdomain & DNS Architecture: Linked sales-centers.baitalnokhada.com to Vercel Edge via GoDaddy CNAME DNS records for isolated real-estate ad campaign routing.',
      'Interactive Developer Project Tabs & Galleries: Built dynamic tabbed showcases with multi-image carousels, thumbnail navigation, and live technical specs (covered area, glazing, HVAC, and structural finishes).',
      'Server-Side REST API Lead Funnel (/api/contact): Created a custom Next.js API route handling B2B developer inquiries (SalesCentersLeadForm) with instant RFP email, direct engineer call, and WhatsApp widget CTAs.',
      'Modular Component Architecture & SSR: Structured clean, maintainable React components (SalesCentersHero, NewDesign, SalesCentersWhatsAppWidget) with programmatic sitemap.ts and robots.ts SEO files.'
    ],
    stack: [
      'Next.js App Router',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'REST API (/api/contact)',
      'Server-Side Rendering (SSR)',
      'Vercel',
      'GoDaddy CNAME DNS',
      'Responsive Web Design'
    ],
    imagePath: 'ahmed/sales-centers-landing-page.png',
    imageCaption: 'Real Estate Sales Centers Landing Page (sales-centers.baitalnokhada.com)'
  },
  {
    id: 'mirage-heights-wordpress',
    tag: 'BILINGUAL WORDPRESS & PROPTECH',
    title: 'Mirage Heights Real Estate Portal (mirage-heights.com)',
    category: 'Custom WordPress, Elementor Template Kit & Rank Math SEO',
    status: 'Live in Production',
    liveUrl: 'https://mirage-heights.com',
    description:
      'Built a complete bilingual (Arabic RTL & English LTR) real estate brokerage website from scratch for Mirage Heights in Dubai & Abu Dhabi. Hosted on Bluehost with SSL/HTTPS and Google Workspace DNS, the platform combines the lightweight Astra theme, Elementor with Envato Template Kits, Polylang multi-language routing with hreflang tags, and full Rank Math Schema & SEO architecture.',
    architecturePoints: [
      'Bilingual Localization (Polylang + Hreflang): Engineered seamless Arabic (/ar/) RTL and English LTR experiences with automated hreflang tags for regional UAE search indexing.',
      'Property Listing & Detail Architecture: Designed dedicated For Sale, For Rent, and Off-Plan project hubs featuring interactive maps, floor/handover specs, amenities, and FAQ accordions.',
      'Rank Math SEO & Structured Schema: Configured Rank Math with Organization & Sitelinks Search Box schemas, clean permalinks, and Google Analytics tracking via MonsterInsights.',
      'Bluehost Infrastructure & Lead Channels: Deployed on Bluehost with Let’s Encrypt SSL, SPF/DMARC email authentication, custom CSS/JS refinements, and floating WhatsApp lead capture.'
    ],
    stack: [
      'WordPress',
      'Astra Theme',
      'Elementor & Envato Kit',
      'Polylang (AR/EN)',
      'Rank Math SEO',
      'Schema Markup',
      'Bluehost & SSL',
      'MonsterInsights',
      'WhatsApp Integration'
    ],
    imagePath: 'ahmed/mirage-heights-site.png',
    imageCaption: 'Mirage Heights UAE Real Estate Platform (mirage-heights.com)'
  },
];

export default function WebEngineeringPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);  
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

        {/* 1. HERO SECTION: REAL-WORLD WEB DEVELOPMENT */}
        <section className="relative p-8 md:p-14 rounded-3xl bg-gradient-to-b from-[#0e0e12] via-[#09090b] to-black border border-zinc-850 shadow-2xl mb-20 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#ff2e7e]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-6 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-[#ff2e7e]/15 border border-[#ff2e7e]/30 text-[#ff2e7e] font-mono text-xs font-semibold">
                WEB DEVELOPMENT & SEO ENGINEERING
              </span>
              <span className="px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono text-xs">
                Multi-Language • Fast • Built to Convert
              </span>
            </div>

            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
              style={{ fontFamily: 'var(--font-heading-en), Cinzel, serif' }}
            >
              Building Modern Websites & High-Converting Landing Pages
            </h1>

            <div className="space-y-4 text-sm md:text-base text-zinc-300 leading-relaxed font-normal max-w-3xl">
              <p>
                As an SEO Specialist who builds from the ground up, I don't just optimize websites—I design, develop, and launch them from scratch. Whether a business needs a custom-coded modern web application or a fast, scalable WordPress site, I handle the complete build with clean code, multi-language support (Arabic & English), and search-engine readiness baked in from day one.
              </p>
              <p className="text-zinc-400 text-xs md:text-sm">
                My hands-on development spans two core approaches depending on project goals and speed-to-market: building full-stack React & Next.js platforms connected to Sanity Headless CMS and deployed on Vercel, or crafting tailored multi-language WordPress websites using Template Kits, custom code enhancements, and Rank Math SEO optimization—alongside high-impact landing pages engineered with both stacks.
              </p>
            </div>

            {/* 3 Simple Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-850 space-y-1.5">
                <div className="text-xs font-mono text-[#ff2e7e] font-semibold">01 / MODERN STACK</div>
                <div className="text-sm font-bold text-white">Next.js, React & Sanity CMS</div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Full-stack, multi-language web platforms built with React, Next.js, Node.js, and Headless Sanity CMS, deployed on Vercel for instant global speed.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-850 space-y-1.5">
                <div className="text-xs font-mono text-emerald-400 font-semibold">02 / WORDPRESS & SEO</div>
                <div className="text-sm font-bold text-white">Tailored WordPress Builds</div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Complete multi-language WordPress sites built with Template Kits, custom CSS/JS/PHP tweaks, and full Rank Math technical SEO setup.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-850 space-y-1.5">
                <div className="text-xs font-mono text-amber-400 font-semibold">03 / CONVERSION ENGINES</div>
                <div className="text-sm font-bold text-white">High-Impact Landing Pages</div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Eye-catching, fast-loading campaign landing pages built with either Next.js or WordPress to maximize ad ROI and capture leads.
                </p>
              </div>
            </div>

            {/* Quick Tech Stack Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400 border-t border-zinc-850">
              <span className="text-zinc-500">Core Stack:</span>
              {['React & Next.js', 'Node.js', 'Sanity Headless CMS', 'Vercel', 'WordPress & Template Kits', 'Rank Math SEO', 'Multi-Language (AR/EN)'].map(
                (item, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-zinc-900/90 border border-zinc-800 text-zinc-300 text-[11px]"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* 2. THE SHOWCASE OF WEB PROJECTS (CLEAN, MINIMAL & SCANNABLE) */}
        <section className="space-y-12">
          {webProjects.map((project, index) => {
            const isExpanded = expandedId === project.id;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 md:p-8 rounded-3xl bg-[#0a0a0c] border border-zinc-850 hover:border-zinc-700/80 transition-all shadow-xl"
              >
                {/* MAIN 2-COLUMN CLEAN GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* LEFT: Title, Concise Summary, Stack & Actions (7 Cols) */}
                  <div className="lg:col-span-7 space-y-5">
                    {/* Tag & Status */}
                    <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
                      <span className="text-[#ff2e7e] font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-zinc-600">/</span>
                      <span className="text-[#ff2e7e] font-medium">{project.tag}</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px]">
                        ● {project.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h2
                      className="text-2xl md:text-3xl font-bold text-white leading-snug"
                      style={{ fontFamily: 'var(--font-heading-en), Cinzel, serif' }}
                    >
                      {project.title}
                    </h2>

                    {/* Clean, Readable Summary (Short & Direct) */}
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Compact Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.stack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800/80 text-[11px] font-mono text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl bg-white text-black hover:bg-[#ff2e7e] hover:text-white text-xs font-mono font-bold transition-all inline-flex items-center gap-1.5"
                        >
                          <span>Live Preview</span>
                          <span>↗</span>
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => setExpandedId(isExpanded ? null : project.id)}
                        className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-zinc-300 transition-colors"
                      >
                        {isExpanded ? 'Hide Architecture Details −' : 'Architecture & Migration Details +'}
                      </button>
                    </div>
                  </div>

                  {/* RIGHT: Clean Compact Preview Image (5 Cols) */}
                  <div className="lg:col-span-5">
                    <div
                      onClick={() => setLightboxImg(getImgSrc(project.imagePath))}
                      className="group relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 cursor-zoom-in shadow-lg"
                    >
                      <img
                        src={getImgSrc(project.imagePath)}
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = getImgSrc('vercel.jpg');
                        }}
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-3 py-1.5 rounded-full bg-black/85 border border-zinc-700 text-[11px] font-mono text-white">
                          Zoom ⤢
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* COLLAPSIBLE ARCHITECTURE DETAILS (Clean & On-Demand) */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-6 pt-6 border-t border-zinc-850"
                  >
                    <div className="text-xs font-mono uppercase tracking-wider text-[#ff2e7e] mb-3">
                      Key Architecture & Migration Highlights
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.architecturePoints.map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-900 text-xs text-zinc-300 leading-relaxed flex items-start gap-2.5"
                        >
                          <span className="text-[#ff2e7e] font-bold">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.article>
            );
          })}
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