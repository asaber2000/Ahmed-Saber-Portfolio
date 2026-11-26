'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// دالة لمعالجة المسافات والحروف في مسار الصورة لتظهر بدون أي خطأ 404
const getImgSrc = (name: string) => encodeURI(`/${name}`);

interface ProofBlockProps {
  badge: string;
  badgeColor?: 'red' | 'emerald' | 'pink' | 'amber';
  title: string;
  subtitle?: string;
  metricRight?: string;
  imgName: string;
  alt: string;
  footerLeft?: string;
  footerCenter?: string;
  footerRight?: string;
  onOpenZoom: (src: string) => void;
}

function CinemaProofCard({
  badge,
  badgeColor = 'emerald',
  title,
  subtitle,
  metricRight,
  imgName,
  alt,
  footerLeft,
  footerCenter,
  footerRight,
  onOpenZoom,
}: ProofBlockProps) {
  const badgeStyles = {
    red: 'bg-red-500/10 border-red-500/30 text-red-400',
    emerald: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    pink: 'bg-[#ff2e7e]/10 border-[#ff2e7e]/30 text-[#ff2e7e]',
    amber: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
  };

  const borderHighlight =
    badgeColor === 'red'
      ? 'border-zinc-800 hover:border-red-500/40'
      : badgeColor === 'pink'
      ? 'border-zinc-800 hover:border-[#ff2e7e]/40'
      : 'border-zinc-800 hover:border-emerald-500/40';

  return (
    <div
      className={`p-5 sm:p-8 rounded-3xl bg-[#0a0a0c] border ${borderHighlight} shadow-2xl transition-colors space-y-5`}
    >
      {/* Top Info Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span
              className={`px-3 py-1 rounded-full border text-[11px] font-mono font-bold uppercase tracking-wider ${badgeStyles[badgeColor]}`}
            >
              {badge}
            </span>
            {metricRight && (
              <span className="text-xs font-mono font-bold text-zinc-300">
                {metricRight}
              </span>
            )}
          </div>
          <h4 className="text-xl md:text-2xl font-bold text-white">{title}</h4>
          {subtitle && (
            <p className="text-xs md:text-sm text-zinc-400 max-w-4xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={() => onOpenZoom(getImgSrc(imgName))}
          className="self-start md:self-center shrink-0 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-mono text-zinc-200 hover:text-white transition"
        >
          Inspect Full HD ↗
        </button>
      </div>

      {/* FULL-WIDTH UNCONSTRAINED SCREENSHOT */}
      <div
        onClick={() => onOpenZoom(getImgSrc(imgName))}
        className="w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 cursor-zoom-in group shadow-inner"
      >
        <img
          src={getImgSrc(imgName)}
          alt={alt}
          className="w-full h-auto block object-contain group-hover:scale-[1.005] transition-transform duration-300"
        />
      </div>

      {/* Optional Bottom Metrics Strip */}
      {(footerLeft || footerCenter || footerRight) && (
        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-400 border-t border-zinc-900">
          <span>{footerLeft}</span>
          <span className="text-emerald-400 font-bold">{footerCenter}</span>
          <span className="text-[#ff2e7e] font-bold">{footerRight}</span>
        </div>
      )}
    </div>
  );
}

export default function SeoCaseStudies() {
  const [activeTab, setActiveTab] = useState<'nokhada' | 'lloyds'>('nokhada');
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const openLightbox = (src: string) => {
    setZoomLevel(1);
    setLightboxImg(src);
  };

  const closeLightbox = () => {
    setLightboxImg(null);
    setZoomLevel(1);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#ff2e7e] selection:text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-10 pb-28">
        
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-white transition-colors mb-8"
        >
          ← BACK TO HOME
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="text-xs font-mono uppercase tracking-widest text-[#ff2e7e] mb-2">
            Production Track Record • Full-Resolution Evidence
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
            Search Intelligence & GEO<span className="text-[#ff2e7e]">.</span>
          </h1>
          <p className="text-sm md:text-base text-zinc-400 mt-3 max-w-3xl">
            Full-screen technical audits, core speed engineering, organic traffic explosions, SERP #1 dominance, and generative AI search citations across UAE, KSA, and Egypt.
          </p>
        </div>

        {/* 2 Main Companies Switcher */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-1.5 rounded-2xl bg-[#0c0c0e] border border-zinc-900 mb-14 max-w-2xl">
          <button
            onClick={() => setActiveTab('nokhada')}
            className={`py-3.5 px-5 rounded-xl text-xs font-mono font-medium transition-all ${
              activeTab === 'nokhada'
                ? 'bg-zinc-800 text-white font-bold border border-zinc-700 shadow-lg'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            01. Bait Al Nokhada (UAE & KSA)
          </button>

          <button
            onClick={() => setActiveTab('lloyds')}
            className={`py-3.5 px-5 rounded-xl text-xs font-mono font-medium transition-all ${
              activeTab === 'lloyds'
                ? 'bg-zinc-800 text-white font-bold border border-zinc-700 shadow-lg'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            02. Lloyds British (Egypt)
          </button>
        </div>

        {/* ========================================================= */}
        {/* TAB 1: BAIT AL NOKHADA (FULL-WIDTH CINEMA CASE STUDY)     */}
        {/* ========================================================= */}
        {activeTab === 'nokhada' && (
          <div className="space-y-24">

            {/* Overview & 8 Executive KPIs (100% Verified by Screenshots) */}
            <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#0e0e12] to-[#08080a] border border-zinc-800 space-y-8">
              <div>
                <span className="text-[11px] font-mono text-[#ff2e7e] uppercase tracking-wider">
                  Flagship Case Study • UAE Market Leader
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-white mt-1.5">
                  Bait Al Nokhada Tents & Fabric Shades
                </h2>
                <p className="text-sm md:text-base text-zinc-400 mt-3 leading-relaxed max-w-4xl">
                  One of the Middle East's largest manufacturing powerhouses with 26+ years of heritage. Complete Core Web Vitals speed overhaul, Google Search Console traffic scale, HTTP security hardening, and generative AI search authority across the UAE.
                </p>
              </div>

              {/* 8 Headline KPIs (2 Rows x 4 Columns) */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-black/70 border border-zinc-800">
                  <div className="text-2xl md:text-3xl font-mono font-bold text-emerald-400">4.9s → 889ms</div>
                  <div className="text-xs text-zinc-300 mt-1.5">LCP Speed (-82% Faster)</div>
                  <div className="text-[11px] text-zinc-500 font-mono mt-1">Grade E (36%) → Grade A (93%)</div>
                </div>

                <div className="p-5 rounded-2xl bg-black/70 border border-zinc-800">
                  <div className="text-2xl md:text-3xl font-mono font-bold text-white">+595%</div>
                  <div className="text-xs text-zinc-300 mt-1.5">Monthly Impressions</div>
                  <div className="text-[11px] text-zinc-500 font-mono mt-1">17.3K → 103K / Month</div>
                </div>

                <div className="p-5 rounded-2xl bg-black/70 border border-zinc-800">
                  <div className="text-2xl md:text-3xl font-mono font-bold text-[#ff2e7e]">Pos 21 → 8.5</div>
                  <div className="text-xs text-zinc-300 mt-1.5">Page 3 to Page 1</div>
                  <div className="text-[11px] text-zinc-500 font-mono mt-1">GSC Verified Avg Rank</div>
                </div>

                <div className="p-5 rounded-2xl bg-black/70 border border-zinc-800">
                  <div className="text-2xl md:text-3xl font-mono font-bold text-amber-400">Grade D → A</div>
                  <div className="text-xs text-zinc-300 mt-1.5">HTTP Security Headers</div>
                  <div className="text-[11px] text-zinc-500 font-mono mt-1">All 6 Headers Hardened</div>
                </div>

                <div className="p-5 rounded-2xl bg-black/70 border border-zinc-800">
                  <div className="text-2xl md:text-3xl font-mono font-bold text-emerald-400">+239%</div>
                  <div className="text-xs text-zinc-300 mt-1.5">GA4 Active Users</div>
                  <div className="text-[11px] text-zinc-500 font-mono mt-1">9.3K Users • Beat Median</div>
                </div>

                <div className="p-5 rounded-2xl bg-black/70 border border-zinc-800">
                  <div className="text-2xl md:text-3xl font-mono font-bold text-white">+374.6%</div>
                  <div className="text-xs text-zinc-300 mt-1.5">Backlinks Growth</div>
                  <div className="text-[11px] text-zinc-500 font-mono mt-1">503 Active • Mangools Verified</div>
                </div>

                <div className="p-5 rounded-2xl bg-black/70 border border-zinc-800">
                  <div className="text-2xl md:text-3xl font-mono font-bold text-amber-400">Rank #1</div>
                  <div className="text-xs text-zinc-300 mt-1.5">UAE Commercial SERPs</div>
                  <div className="text-[11px] text-zinc-500 font-mono mt-1">Google.ae & Bing Sitelinks</div>
                </div>

                <div className="p-5 rounded-2xl bg-black/70 border border-zinc-800">
                  <div className="text-2xl md:text-3xl font-mono font-bold text-[#ff2e7e]">#1 Cited</div>
                  <div className="text-xs text-zinc-300 mt-1.5">Google AI Overviews</div>
                  <div className="text-[11px] text-zinc-500 font-mono mt-1">Arabic & English GEO</div>
                </div>
              </div>
            </div>

            {/* ===================================================== */}
            {/* PHASE 01: SPEED & PERFORMANCE FIRST (BEFORE -> AFTER) */}
            {/* ===================================================== */}
            <section className="space-y-8">
              <div className="border-b border-zinc-800 pb-5">
                <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-1">
                  Phase 01 / Core Web Vitals & Speed Engineering
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-white">
                  Speed Transformation: Cutting Load Time from 4.9s to 2.4s
                </h3>
                <p className="text-xs md:text-sm text-zinc-400 mt-2 max-w-3xl">
                  Eliminated render-blocking assets, optimized critical CSS, and compressed heavy media payloads to rescue mobile user experience and crawl efficiency.
                </p>
              </div>

              <div className="space-y-10">
                <CinemaProofCard
                  badge="● BEFORE • BASELINE SPEED AUDIT"
                  badgeColor="red"
                  metricRight="GTmetrix Grade E (36%) • 4.9s Sluggish LCP"
                  title="Initial Performance Bottleneck on Arrival"
                  subtitle="Heavy unoptimized scripts and render-blocking resources caused severe mobile bounce rates and slow Googlebot rendering."
                  imgName="gtmetrix-before.jpg"
                  alt="GTmetrix Before"
                  footerLeft="LCP: 4.9 Seconds"
                  footerCenter="Performance Score: 36% (Grade E)"
                  footerRight="High Mobile Bounce Risk"
                  onOpenZoom={openLightbox}
                />

                <CinemaProofCard
                  badge="● AFTER • SPEED OPTIMIZATION VERIFIED"
                  badgeColor="emerald"
                  metricRight="GTmetrix Grade A (93%) • LCP Cut to 889ms"
                  title="Post-Engineering Performance Breakthrough: Grade A (93%)"
                  subtitle="Optimized critical CSS delivery, deferred non-essential JavaScript, and lazy-loaded off-screen media—slashing Largest Contentful Paint from 4.9s down to 889ms (sub-second load)."
                  imgName="gtmetrix-after.jpg"
                  alt="GTmetrix After"
                  footerLeft="LCP Cut to 889ms (-82%)"
                  footerCenter="Performance Upgraded to 93% (Grade A)"
                  footerRight="TBT: 48ms • CLS: 0"
                  onOpenZoom={openLightbox}
                />
              </div>
            </section>

            {/* ===================================================== */}
            {/* PHASE 02: TRAFFIC EXPLOSION (GSC, GA4, SEMRUSH, ETC.) */}
            {/* ===================================================== */}
            <section className="space-y-8">
              <div className="border-b border-zinc-800 pb-5">
                <div className="text-xs font-mono uppercase tracking-widest text-[#ff2e7e] mb-1">
                  Phase 02 / Organic Traffic & Visibility Explosion
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-white">
                  6x Search Growth: Google Search Console, GA4 & SEMrush Proof
                </h3>
                <p className="text-xs md:text-sm text-zinc-400 mt-2 max-w-3xl">
                  Full-resolution telemetry showing the journey from a stagnant Page 3 baseline in June 2024 to 103,000+ monthly impressions, 9.3K active GA4 users, and +1845% expansion in Saudi Arabia.
                </p>
              </div>

              <div className="space-y-10">
                {/* 1. GSC BEFORE (June 2024) */}
                <CinemaProofCard
                  badge="● BEFORE • JUNE 2024 BASELINE"
                  badgeColor="red"
                  metricRight="17.3K Impressions • Avg Position 21 (Page 3)"
                  title="Google Search Console on Arrival (June 2024)"
                  subtitle="When taking over the domain, commercial tent and shade keywords were buried on Page 3 with low click-through rates."
                  imgName="search-console-( jun,2024).jpg"
                  alt="Search Console June 2024 Before"
                  footerLeft="Total Clicks: 384"
                  footerCenter="17,300 Impressions • Avg CTR: 2.2%"
                  footerRight="Avg Position: 21 (Page 3)"
                  onOpenZoom={openLightbox}
                />

                {/* 2. GSC AFTER (Last 28 Days) */}
                <CinemaProofCard
                  badge="● AFTER • SCALED MARKET AUTHORITY"
                  badgeColor="emerald"
                  metricRight="103K Impressions (+595%) • Avg Position 8.5 (Page 1)"
                  title="Google Search Console: 6x Impressions Surge & Page 1 Breakthrough"
                  subtitle="Restructured bilingual site architecture, schema graphs, and commercial landing pages propelled average ranking straight onto Page 1."
                  imgName="GSC-last28-baitalnokhada.jpg"
                  alt="Search Console Last 28 Days After"
                  footerLeft="Total Clicks: 701 (+82.5%)"
                  footerCenter="103,000 Impressions (+595%)"
                  footerRight="Avg Position: 8.5 (Page 1)"
                  onOpenZoom={openLightbox}
                />

                {/* 4. GA4 ACTIVE USERS */}
                <CinemaProofCard
                  badge="● GOOGLE ANALYTICS 4 VERIFIED"
                  badgeColor="emerald"
                  metricRight="9.3K Active Users (+239%) • Outperformed Industry Median"
                  title="GA4 Engagement & User Acquisition Growth"
                  subtitle="High-intent B2B buyers spending longer durations exploring product specifications and requesting commercial quotes."
                  imgName="GA4.jpg"
                  alt="GA4 Report"
                  footerLeft="Active Users: 9,300"
                  footerCenter="Growth Rate: +239%"
                  footerRight="Above Manufacturing Benchmark"
                  onOpenZoom={openLightbox}
                />

                {/* 5. SEMRUSH ORGANIC TRAFFIC SURGE */}
                <CinemaProofCard
                  badge="● AFTER • SEMRUSH ORGANIC TRAFFIC SURGE"
                  badgeColor="emerald"
                  metricRight="935+ Monthly Organic Visits • Peak ~1.3K"
                  title="SEMrush Organic Traffic Breakout: Replacing Paid Spend with Organic Growth"
                  subtitle="Captured high-ticket commercial queries for exhibition tents, storage hangars, and event structures—scaling organic traffic while reducing reliance on paid ads."
                  imgName="organic-traffic-semruch-before.jpg"
                  alt="SEMrush Organic Traffic Growth"
                  footerLeft="Organic Traffic Surge: ~1.3K Peak"
                  footerCenter="Zero Paid Ad Dependency"
                  footerRight="High-Intent GCC Traffic"
                  onOpenZoom={openLightbox}
                />

                <CinemaProofCard
                  badge="● AFTER • SEMRUSH KEYWORD SURGE"
                  badgeColor="emerald"
                  metricRight="Top 3 & Top 10 Commercial Dominance"
                  title="SEMrush Organic Keywords Expansion"
                  subtitle="Massive breakout across transactional tent manufacturing, rental, and shade structure keywords in the GCC."
                  imgName="organic-keywords-semruch.jpg"
                  alt="SEMrush Keywords After"
                  onOpenZoom={openLightbox}
                />

                {/* 6. MANGOOLS BACKLINKS */}
                <CinemaProofCard
                  badge="● OFF-PAGE AUTHORITY"
                  badgeColor="amber"
                  metricRight="+374.6% Backlinks Growth • 503 Active Referring Links"
                  title="Mangools Backlink Profile Expansion"
                  subtitle="Built a clean, high-authority regional directory and industry citation profile reinforcing domain trust."
                  imgName="mangools-backlinks-bait.jpg"
                  alt="Mangools Backlinks Growth"
                  footerLeft="503 Active Backlinks"
                  footerCenter="+374.6% Authority Growth"
                  footerRight="Clean White-Hat Profile"
                  onOpenZoom={openLightbox}
                />
              </div>
            </section>

            {/* ===================================================== */}
            {/* PHASE 03: SECURITY HEADERS HARDENING (BEFORE -> AFTER) */}
            {/* ===================================================== */}
            <section className="space-y-8">
              <div className="border-b border-zinc-800 pb-5">
                <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-1">
                  Phase 03 / Technical Security Hardening
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-white">
                  HTTP Security Headers Upgrade: Grade D → Grade A
                </h3>
              </div>

              <div className="space-y-10">
                <CinemaProofCard
                  badge="● BEFORE • SECURITY VULNERABILITIES"
                  badgeColor="red"
                  metricRight="Security Headers Grade D"
                  title="Missing Protection Headers on Initial Audit"
                  subtitle="Zero HSTS enforcement, missing X-Frame-Options and Content-Type protections exposed the corporate domain to clickjacking and MIME-sniffing risks."
                  imgName="3http-headers.png"
                  alt="Security Headers Before"
                  onOpenZoom={openLightbox}
                />

                <CinemaProofCard
                  badge="● AFTER • HARDENED INFRASTRUCTURE"
                  badgeColor="emerald"
                  metricRight="Security Headers Grade A Verified"
                  title="Enterprise HTTP Security Response Headers Deployed (Grade A)"
                  subtitle="Configured Content-Security-Policy (CSP), Permissions-Policy, Strict-Transport-Security (HSTS), X-Frame-Options, Referrer-Policy, and X-Content-Type-Options at the server edge."
                  imgName="4http-headers.png"
                  alt="Security Headers After"
                  onOpenZoom={openLightbox}
                />
              </div>
            </section>

            {/* ===================================================== */}
            {/* PHASE 04: VERIFIED #1 POSITIONS IN SERP               */}
            {/* ===================================================== */}
            <section className="space-y-8">
              <div className="border-b border-zinc-800 pb-5">
                <div className="text-xs font-mono uppercase tracking-widest text-[#ff2e7e] mb-1">
                  Phase 04 / SERP Domination
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-white">
                  Verified Rank #1 Across Commercial UAE Keywords (Arabic & English)
                </h3>
              </div>

              <div className="space-y-10">
                <CinemaProofCard
                  badge="● RANK TRACKER • ARABIC DOMINANCE"
                  badgeColor="emerald"
                  metricRight="Verified Position #1"
                  title="Arabic Commercial Keywords: #1 Rankings Across UAE"
                  subtitle="Dominating high-intent Arabic queries for exhibition tents, pyramid tents, and tent rentals in Dubai and Abu Dhabi."
                  imgName="rank1.jpg"
                  alt="Rank 1 Arabic Keywords Table"
                  onOpenZoom={openLightbox}
                />

                <CinemaProofCard
                  badge="● RANK TRACKER • ENGLISH DOMINANCE"
                  badgeColor="emerald"
                  metricRight="Verified Position #1"
                  title="English Commercial Keywords: #1 Rankings Across UAE"
                  subtitle="Holding #1 positions for B2B tent suppliers, hangar rentals, and event structure keywords."
                  imgName="Rank1-(2).jpg"
                  alt="Rank 1 English Keywords Table"
                  onOpenZoom={openLightbox}
                />

                <CinemaProofCard
                  badge="● LIVE GOOGLE.AE SERP PROOF"
                  badgeColor="emerald"
                  metricRight="#1 Organic Result"
                  title='Google.ae Live Result: "Tent Rental Company in Dubai"'
                  subtitle="Capturing the #1 organic position above directory aggregators and paid competitors."
                  imgName="tent-rental-company-in-dubai.jpg"
                  alt="Google.ae Tent Rental Company in Dubai"
                  onOpenZoom={openLightbox}
                />

                <CinemaProofCard
                  badge="● LIVE GOOGLE.AE SERP PROOF"
                  badgeColor="emerald"
                  metricRight="#1 Organic Result"
                  title='Google.ae Live Result: "Tent Suppliers & Rental in UAE"'
                  subtitle="National UAE search dominance for commercial tent manufacturing and supply."
                  imgName="Tent-Rental-Company-in-UAE.jpg"
                  alt="Google.ae Tent Rental Company in UAE"
                  onOpenZoom={openLightbox}
                />

                <CinemaProofCard
                  badge="● MICROSOFT BING SERP PROOF"
                  badgeColor="emerald"
                  metricRight="#1 Result + Full Sitelinks"
                  title="Microsoft Bing: #1 Position with Expanded Brand Sitelinks"
                  subtitle="Full above-the-fold ownership with structured sitelinks driving direct enterprise inquiries."
                  imgName="tent-rental-bing.jpg"
                  alt="Bing Search Full Sitelinks"
                  onOpenZoom={openLightbox}
                />
              </div>
            </section>

            {/* ===================================================== */}
            {/* PHASE 05: GENERATIVE ENGINE OPTIMIZATION (AI)         */}
            {/* ===================================================== */}
            <section className="space-y-8">
              <div className="border-b border-zinc-800 pb-5">
                <div className="text-xs font-mono uppercase tracking-widest text-[#ff2e7e] mb-1">
                  Phase 05 / Generative Engine Optimization (GEO & AIO)
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-white">
                  Direct #1 Citations in Google AI Overviews & Answer Engines
                </h3>
              </div>

              <div className="space-y-10">
                <CinemaProofCard
                  badge="● GOOGLE AI OVERVIEW (GEO)"
                  badgeColor="pink"
                  metricRight="Featured Source #1"
                  title='AI Query: "الخيمة الهرمية في دبي"'
                  subtitle="Google AI extracts Bait Al Nokhada specifications as the primary reference model with direct image links."
                  imgName="الخيمة-الهرمية-في-دبيai.jpg"
                  alt="AI Overview Pyramid Tent Dubai"
                  onOpenZoom={openLightbox}
                />

                <CinemaProofCard
                  badge="● CONVERSATIONAL AI AUTHORITY"
                  badgeColor="pink"
                  metricRight="#1 Brand Recommendation"
                  title='AI Query: "افضل خيام في الامارات؟"'
                  subtitle="Recommended at the top of conversational AI answers, validating 26+ years of manufacturing heritage."
                  imgName="افضل-خيام-في-الإمارات.jpg"
                  alt="AI Overview Best Tents in UAE"
                  onOpenZoom={openLightbox}
                />

                <CinemaProofCard
                  badge="● ENGLISH AI OVERVIEW"
                  badgeColor="pink"
                  metricRight="Definitive Cited Source"
                  title='AI Query: "Tent Rental in Dubai"'
                  subtitle="Structured JSON-LD entity schema engineered Google's generative model to cite brand specifications directly."
                  imgName="tent rental in dubai google ai.png"
                  alt="Google AI Tent Rental in Dubai"
                  onOpenZoom={openLightbox}
                />

                <CinemaProofCard
                  badge="● MULTI-SNIPPET ORGANIC DOMINANCE"
                  badgeColor="emerald"
                  metricRight="Carousel + Maps + #1 Organic"
                  title='Commercial Query: "خيام معارض اورجانيك"'
                  subtitle="Capturing image carousels, local map packs, and #1 organic results simultaneously above the fold."
                  imgName="خيام معارض اورجانيك.jpg"
                  alt="Organic Exhibition Tents SERP"
                  onOpenZoom={openLightbox}
                />
              </div>
            </section>

          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: LLOYDS BRITISH EGYPT (PREMIUM CINZEL/MONTSERRAT)    */}
        {/* ========================================================= */}
        {activeTab === 'lloyds' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-16"
            style={{ fontFamily: 'var(--font-body-en), Montserrat, sans-serif' }}
          >
            
            {/* 1. TOP HERO SECTION: WIDE & BREATHING LAYOUT WITH GSC FOCUS */}
            <div className="relative p-8 md:p-14 rounded-3xl bg-gradient-to-b from-[#0e0e12] via-[#09090b] to-black border border-zinc-800/80 shadow-[0_0_50px_-15px_rgba(255,46,126,0.15)] overflow-hidden">
              
              {/* Background Ambient Glow */}
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#ff2e7e]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-6 max-w-4xl">
                
                {/* Meta Badge */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-[#ff2e7e]/15 border border-[#ff2e7e]/30 text-[#ff2e7e] font-mono text-xs font-semibold tracking-wider">
                    CASE STUDY 02 • GOOGLE SEARCH CONSOLE AUDIT
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono text-xs">
                    Industrial B2B Lifting Safety
                  </span>
                </div>

                {/* Main Heading using Cinzel */}
                <h2 
                  className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
                  style={{ fontFamily: 'var(--font-heading-en), Cinzel, serif' }}
                >
                  Statutory Lifting Equipment Inspection & Organic Search Revival
                </h2>

                {/* Subtitle using Montserrat */}
                <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-normal max-w-3xl">
                  Re-engineering search discoverability for Egypt's leading accredited lifting inspection body. Resolving technical crawl debt, index bloat, and capturing enterprise RFPs via Google Search Console optimization.
                </p>

                {/* Live Quick KPI Pills */}
                <div className="pt-2 flex flex-wrap items-center gap-6 text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Google Search Console Verified</span>
                  </div>
                  <div>•</div>
                  <div>Coverage: Greater Cairo & Suez Canal Ports</div>
                  <div>•</div>
                  <div className="text-emerald-400 font-bold">100% Crawl Sanitization</div>
                </div>

              </div>

              {/* Big, Clean Hero GSC Image (Full width & natural height) */}
              <div className="mt-12">
                <div className="flex items-center justify-between pb-3 text-xs font-mono text-zinc-400 border-b border-zinc-800">
                  <span className="flex items-center gap-2 text-zinc-300">
                    <span>Google Search Console Performance & Technical Diagnostic Health</span>
                  </span>
                  <span
                    onClick={() => openLightbox(getImgSrc('Website audit.jpg'))}
                    className="text-[#ff2e7e] hover:underline cursor-pointer"
                  >
                    Click image to inspect full report ↗
                  </span>
                </div>

                <div
                  onClick={() => openLightbox(getImgSrc('Website audit.jpg'))}
                  className="w-full mt-4 rounded-2xl overflow-hidden border border-zinc-800/90 bg-zinc-950 cursor-zoom-in group shadow-2xl"
                >
                  <img
                    src={getImgSrc('Website audit.jpg')}
                    alt="Lloyds British Google Search Console & Technical Audit"
                    className="w-full h-auto block object-contain group-hover:scale-[1.005] transition-transform duration-500"
                  />
                  <div className="px-5 py-3 bg-zinc-950/95 border-t border-zinc-800 flex justify-between items-center">
                    <span className="text-xs font-mono text-zinc-300">
                      Full Technical Audit & Crawl Resolution Breakdown
                    </span>
                    <span className="text-xs font-mono text-[#ff2e7e]">Zoom HD ↗</span>
                  </div>
                </div>
              </div>

            </div>

            {/* 2. THE 4 DETAILED EDITORIAL SECTIONS (OPEN & BEAUTIFUL TYPOGRAPHY) */}
            <div className="p-8 md:p-14 rounded-3xl bg-[#0a0a0c] border border-zinc-900 space-y-14">
              
              {/* SECTION 1: ABOUT */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4 pb-12 border-b border-zinc-900"
              >
                <div className="text-xs font-mono uppercase tracking-widest text-[#ff2e7e]">
                  01 / Enterprise Context
                </div>
                <h3 
                  className="text-2xl md:text-3xl font-bold text-white tracking-wide"
                  style={{ fontFamily: 'var(--font-heading-en), Cinzel, serif' }}
                >
                  Statutory Engineering & NDT Testing Authority
                </h3>
                <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-normal max-w-4xl">
                  Lloyds British Egypt operates as an accredited engineering authority providing proof-load testing, offshore container certification, nondestructive testing (NDT), and specialized safety training. The company relies fundamentally on Google Search Console to capture enterprise procurement leads from multinational petroleum companies, maritime shipyards, and heavy manufacturing hubs.
                </p>
              </motion.div>

              {/* SECTION 2: THE CHALLENGE */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4 pb-12 border-b border-zinc-900"
              >
                <div className="text-xs font-mono uppercase tracking-widest text-red-400">
                  02 / The GSC Diagnostic Bottlenecks
                </div>
                <h3 
                  className="text-2xl md:text-3xl font-bold text-white tracking-wide"
                  style={{ fontFamily: 'var(--font-heading-en), Cinzel, serif' }}
                >
                  Index Waste, Parameter Bloat & Buried High-Ticket RFPs
                </h3>
                <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-normal max-w-4xl">
                  Upon analyzing Google Search Console coverage logs, severe indexing decay was detected: hundreds of legacy pagination parameters and obsolete test URLs were draining Googlebot’s crawl budget. Crucial commercial pages (such as crane proof load testing, wire rope inspections, and LEEA certifications) were stranded outside Page 1, suffering from slow rendering speeds and duplicate meta signatures.
                </p>
              </motion.div>

              {/* SECTION 3: WORK PILLARS */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6 pb-12 border-b border-zinc-900"
              >
                <div className="text-xs font-mono uppercase tracking-widest text-amber-400">
                  03 / Engineering Remediation & GSC Alignment
                </div>
                <h3 
                  className="text-2xl md:text-3xl font-bold text-white tracking-wide"
                  style={{ fontFamily: 'var(--font-heading-en), Cinzel, serif' }}
                >
                  Crawl Optimization, Semantic Mapping & Schema Graphs
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="p-6 rounded-2xl bg-zinc-950/70 border border-zinc-800 hover:border-zinc-700 transition-colors">
                    <div className="text-base font-bold text-white mb-2">1. GSC Crawl Budget Sanitation</div>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-normal">
                      Purged 4xx response loops, consolidated duplicate query parameters via strict canonical self-referencing, and submitted cleaned XML sitemaps to GSC.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-zinc-950/70 border border-zinc-800 hover:border-zinc-700 transition-colors">
                    <div className="text-base font-bold text-white mb-2">2. Industrial Service Schema Graphs</div>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-normal">
                      Structured nested JSON-LD metadata reflecting statutory inspection categories, standard compliance bodies, and local engineering testing sites.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-zinc-950/70 border border-zinc-800 hover:border-zinc-700 transition-colors">
                    <div className="text-base font-bold text-white mb-2">3. Mobile Speed & Core Web Vitals</div>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-normal">
                      Defused render-blocking JavaScript payloads and compressed high-resolution engineering equipment blueprints for faster mobile indexing.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-zinc-950/70 border border-zinc-800 hover:border-zinc-700 transition-colors">
                    <div className="text-base font-bold text-white mb-2">4. Geo-Targeted Industrial Landing Architecture</div>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-normal">
                      Optimized contextual search signals for high-intent queries across major industrial cities (10th of Ramadan, Sadat City, Alexandria, and Suez).
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* SECTION 4: APPLIED MODULES TAGS */}
              <div className="space-y-4 pb-12 border-b border-zinc-900">
                <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                  04 / Technical Stack & Frameworks
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    'Google Search Console Audit',
                    'Crawl Budget Optimization',
                    'Canonical Restructuring',
                    'B2B Topical Mapping',
                    'JSON-LD Schema Markup',
                    'Core Web Vitals Engineering',
                    'Industrial Query Optimization',
                    'Internal Equity Flow'
                  ].map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800/90 text-xs font-mono text-zinc-300 hover:text-white hover:border-[#ff2e7e]/50 hover:bg-[#ff2e7e]/5 transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* SECTION 5: PERFORMANCE IMPACT & GSC METRICS */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                  05 / Validated Outcomes & Metrics
                </div>
                <h3 
                  className="text-2xl md:text-3xl font-bold text-white tracking-wide"
                  style={{ fontFamily: 'var(--font-heading-en), Cinzel, serif' }}
                >
                  Measurable Traffic Quality & Indexing Authority
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 relative overflow-hidden">
                    <div className="text-4xl font-mono font-bold text-white">100%</div>
                    <div className="text-xs text-zinc-400 font-mono mt-2">GSC Validated Health</div>
                    <p className="text-[11px] text-zinc-500 mt-3 leading-relaxed">
                      Zero indexing exceptions, no 4xx redirection loops, and complete coverage of high-intent services.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 relative overflow-hidden">
                    <div className="text-4xl font-mono font-bold text-emerald-400">Page 1</div>
                    <div className="text-xs text-zinc-400 font-mono mt-2">B2B Inspection Terms</div>
                    <p className="text-[11px] text-zinc-500 mt-3 leading-relaxed">
                      Statutory crane inspection, proof load testing, and rigging certifications ranking in top positions.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 relative overflow-hidden">
                    <div className="text-4xl font-mono font-bold text-[#ff2e7e]">+85%</div>
                    <div className="text-xs text-zinc-400 font-mono mt-2">Direct Procurement Inquiries</div>
                    <p className="text-[11px] text-zinc-500 mt-3 leading-relaxed">
                      Measured growth in organic quote requests from industrial EPC contractors and manufacturing hubs.
                    </p>
                  </div>
                </div>

                <div className="pt-4 text-xs font-mono text-zinc-600">
                  - Performance verified via Google Search Console impressions tracking and technical audit crawl diagnostic records.
                </div>
              </motion.div>

            </div>

          </motion.div>
        )}

      </main>

      {/* INTERACTIVE ZOOM LIGHTBOX MODAL */}
      {lightboxImg && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 md:p-8 backdrop-blur-md"
        >
          {/* Top Controls Bar */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-7xl flex items-center justify-between mb-4 px-4 py-2.5 rounded-2xl bg-zinc-900/95 border border-zinc-800"
          >
            <div className="flex items-center gap-2">
              <button
                onClick={() => setZoomLevel((z) => Math.max(1, Number((z - 0.5).toFixed(2))))}
                disabled={zoomLevel <= 1}
                className="px-3.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40 text-xs font-mono text-white"
              >
                - Zoom Out
              </button>
              <span className="px-2.5 text-xs font-mono text-emerald-400 font-bold">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={() => setZoomLevel((z) => Math.min(2.5, Number((z + 0.5).toFixed(2))))}
                disabled={zoomLevel >= 2.5}
                className="px-3.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40 text-xs font-mono text-white"
              >
                + Zoom In
              </button>
              {zoomLevel > 1 && (
                <button
                  onClick={() => setZoomLevel(1)}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-300"
                >
                  Reset
                </button>
              )}
            </div>

            <button
              onClick={closeLightbox}
              className="px-4 py-1.5 rounded-lg bg-[#ff2e7e] hover:bg-[#e0246d] text-white font-mono text-xs font-bold"
            >
              Close ✕
            </button>
          </div>

          {/* Scrollable Zoom Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-7xl max-h-[84vh] w-full overflow-auto rounded-2xl border border-zinc-800 bg-zinc-950 p-3 flex items-center justify-center"
          >
            <img
              src={lightboxImg}
              alt="Enlarged Proof"
              onClick={() => setZoomLevel((z) => (z === 1 ? 1.75 : 1))}
              style={{
                width: `${zoomLevel * 100}%`,
                maxWidth: zoomLevel === 1 ? '100%' : 'none',
              }}
              className="h-auto object-contain transition-all duration-200 cursor-zoom-in"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}