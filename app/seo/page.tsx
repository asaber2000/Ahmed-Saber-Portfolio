'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// دالة لمعالجة المسافات والحروف في مسار الصورة لتظهر بدون أي خطأ 404
const getImgSrc = (name: string) => encodeURI(`/${name}`);

export default function SeoCaseStudies() {
  const [activeTab, setActiveTab] = useState<'nokhada' | 'ksa' | 'lloyds'>('nokhada');
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#ff2e7e] selection:text-white">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 md:px-8 pt-10 pb-24">
        
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
            Production Track Record
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
            Search Intelligence & GEO<span className="text-[#ff2e7e]">.</span>
          </h1>
          <p className="text-sm md:text-base text-zinc-400 mt-3 max-w-2xl">
            Live technical audits, SERP dominance, and generative AI search indexing across UAE, KSA, and Egypt.
          </p>
        </div>

        {/* 3 Main Companies Switcher */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-1.5 rounded-2xl bg-[#0c0c0e] border border-zinc-900 mb-14">
          <button
            onClick={() => setActiveTab('nokhada')}
            className={`py-3 px-4 rounded-xl text-xs font-mono font-medium transition-all ${
              activeTab === 'nokhada'
                ? 'bg-zinc-800 text-white font-bold border border-zinc-700 shadow-lg'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            01. Bait Al Nokhada (UAE)
          </button>
          <button
            onClick={() => setActiveTab('ksa')}
            className={`py-3 px-4 rounded-xl text-xs font-mono font-medium transition-all ${
              activeTab === 'ksa'
                ? 'bg-zinc-800 text-white font-bold border border-zinc-700 shadow-lg'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            02. Tents Rental KSA (GCC)
          </button>
          <button
            onClick={() => setActiveTab('lloyds')}
            className={`py-3 px-4 rounded-xl text-xs font-mono font-medium transition-all ${
              activeTab === 'lloyds'
                ? 'bg-zinc-800 text-white font-bold border border-zinc-700 shadow-lg'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            03. Lloyds British (Egypt)
          </button>
        </div>

        {/* ========================================================= */}
        {/* TAB 1: BAIT AL NOKHADA (DETAILED CASE STUDY)             */}
        {/* ========================================================= */}
        {activeTab === 'nokhada' && (
          <div className="space-y-20">

            {/* Overview Card */}
            <div className="p-8 rounded-3xl bg-[#0a0a0c] border border-zinc-900">
              <span className="text-[11px] font-mono text-[#ff2e7e] uppercase tracking-wider">
                Flagship Case Study • UAE Market Leader
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">
                Bait Al Nokhada Tents & Fabric Shades
              </h2>
              <p className="text-xs md:text-sm text-zinc-400 mt-2 leading-relaxed max-w-3xl">
                One of the Middle East&apos;s largest manufacturing powerhouses with 26+ years of heritage. Complete technical SEO re-architecture, core web speed optimization, and generative AI search authority.
              </p>
            </div>

            {/* 1. INITIAL AUDIT (لما مسكت الموقع) */}
            <section className="space-y-6">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-1">
                  Phase 01 / Diagnostics
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Baseline Audit: The Bottlenecks Found on Arrival
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Speed Before */}
                <div className="p-5 rounded-2xl bg-[#0a0a0c] border border-zinc-900 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between text-xs font-mono text-red-400 mb-2">
                      <span>GTmetrix Score</span>
                      <span>Grade E (36%)</span>
                    </div>
                    <div className="text-sm font-bold text-white mb-1">4.9s Sluggish LCP</div>
                    <p className="text-[11px] text-zinc-500 leading-relaxed">
                      Render-blocking assets and uncompressed payloads caused heavy bounce rates on mobile.
                    </p>
                  </div>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('gtmetrix-before.png'))}
                    className="relative h-36 w-full mt-4 rounded-xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('gtmetrix-before.png')} alt="GTmetrix Before" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Security Before */}
                <div className="p-5 rounded-2xl bg-[#0a0a0c] border border-zinc-900 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between text-xs font-mono text-red-400 mb-2">
                      <span>Security Headers</span>
                      <span>Grade D</span>
                    </div>
                    <div className="text-sm font-bold text-white mb-1">Missing Protection</div>
                    <p className="text-[11px] text-zinc-500 leading-relaxed">
                      Zero HSTS enforcement, missing X-Frame & Content-Type headers, exposing site to clickjacking.
                    </p>
                  </div>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('3 HTTP HEADERS.png'))}
                    className="relative h-36 w-full mt-4 rounded-xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('3 HTTP HEADERS.png')} alt="Headers Before" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Stagnant Traffic */}
                <div className="p-5 rounded-2xl bg-[#0a0a0c] border border-zinc-900 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between text-xs font-mono text-zinc-500 mb-2">
                      <span>SEMrush Visibility</span>
                      <span>Flatline</span>
                    </div>
                    <div className="text-sm font-bold text-white mb-1">Untapped Keywords</div>
                    <p className="text-[11px] text-zinc-500 leading-relaxed">
                      Core commercial queries like event tents, hangars, and rental structures sat beyond page 3.
                    </p>
                  </div>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('organic traffic semruch before.jpg'))}
                    className="relative h-36 w-full mt-4 rounded-xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('organic traffic semruch before.jpg')} alt="Traffic Before" className="w-full h-full object-cover" />
                  </div>
                </div>

              </div>
            </section>

            {/* 2. THE ENGINEERING OVERHAUL */}
            <section className="space-y-6">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#ff2e7e] mb-1">
                  Phase 02 / Technical Action
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Engineering Interventions: Speed & Header Hardening
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Speed After */}
                <div className="p-6 rounded-3xl bg-[#0a0a0c] border border-zinc-900">
                  <div className="flex justify-between text-xs font-mono text-emerald-400 mb-2">
                    <span>Performance Upgraded</span>
                    <span>Load Cut to 2.4s</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">GTmetrix Grade C (67%)</h4>
                  <p className="text-xs text-zinc-400 mb-4">
                    Optimized critical CSS, lazy-loaded off-screen assets, and improved Core Web Vitals.
                  </p>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('gtmetrix-after.png'))}
                    className="relative h-60 w-full rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('gtmetrix-after.png')} alt="GTmetrix After" className="w-full h-full object-contain" />
                  </div>
                </div>

                {/* Headers After */}
                <div className="p-6 rounded-3xl bg-[#0a0a0c] border border-zinc-900">
                  <div className="flex justify-between text-xs font-mono text-emerald-400 mb-2">
                    <span>Infrastructure Hardening</span>
                    <span>Grade D → B</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">HTTP Security Response Headers</h4>
                  <p className="text-xs text-zinc-400 mb-4">
                    Injected Strict-Transport-Security, X-Frame-Options, Referrer-Policy, and X-Content-Type-Options.
                  </p>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('4 HTTP HEADERS.png'))}
                    className="relative h-60 w-full rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('4 HTTP HEADERS.png')} alt="Headers After" className="w-full h-full object-contain" />
                  </div>
                </div>

              </div>
            </section>

            {/* 3. GSC & GA4 PRODUCTION GROWTH */}
            <section className="space-y-6">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#ff2e7e] mb-1">
                  Phase 03 / Measured Scale
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Empirical Growth Across GSC, GA4 & Authority Metrics
                </h3>
              </div>

              {/* Metrics Highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-[#0a0a0c] border border-zinc-900">
                  <div className="text-3xl font-mono font-bold text-white">+108%</div>
                  <div className="text-xs text-zinc-400 mt-1">GSC Impressions</div>
                  <div className="text-[10px] text-zinc-600 font-mono mt-1">108K → 225K</div>
                </div>
                <div className="p-5 rounded-2xl bg-[#0a0a0c] border border-zinc-900">
                  <div className="text-3xl font-mono font-bold text-emerald-400">+239%</div>
                  <div className="text-xs text-zinc-400 mt-1">GA4 Active Users</div>
                  <div className="text-[10px] text-zinc-600 font-mono mt-1">9.3K Users</div>
                </div>
                <div className="p-5 rounded-2xl bg-[#0a0a0c] border border-zinc-900">
                  <div className="text-3xl font-mono font-bold text-amber-400">+374%</div>
                  <div className="text-xs text-zinc-400 mt-1">Backlinks Growth</div>
                  <div className="text-[10px] text-zinc-600 font-mono mt-1">Mangools Verified</div>
                </div>
                <div className="p-5 rounded-2xl bg-[#0a0a0c] border border-zinc-900">
                  <div className="text-3xl font-mono font-bold text-[#ff2e7e]">+1845%</div>
                  <div className="text-xs text-zinc-400 mt-1">KSA Performance</div>
                  <div className="text-[10px] text-zinc-600 font-mono mt-1">Regional Expansion</div>
                </div>
              </div>

              {/* Evidence Grids */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* GSC 6 months */}
                <div className="p-6 rounded-3xl bg-[#0a0a0c] border border-zinc-900">
                  <div className="text-xs font-mono text-zinc-400 mb-3 flex justify-between">
                    <span>Google Search Console: 6 Months vs Previous</span>
                    <span className="text-emerald-400 font-bold">+86% Clicks</span>
                  </div>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('last 6th vs. previos 6th.jpg'))}
                    className="relative h-64 w-full rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('last 6th vs. previos 6th.jpg')} alt="GSC Growth" className="w-full h-full object-contain" />
                  </div>
                </div>

                {/* GA4 */}
                <div className="p-6 rounded-3xl bg-[#0a0a0c] border border-zinc-900">
                  <div className="text-xs font-mono text-zinc-400 mb-3 flex justify-between">
                    <span>Google Analytics 4: 9.3K Active Users</span>
                    <span className="text-emerald-400 font-bold">Outperformed Median</span>
                  </div>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('GA4.jpg'))}
                    className="relative h-64 w-full rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('GA4.jpg')} alt="GA4 Report" className="w-full h-full object-contain" />
                  </div>
                </div>

                {/* SEMrush Keywords */}
                <div className="p-6 rounded-3xl bg-[#0a0a0c] border border-zinc-900">
                  <div className="text-xs font-mono text-zinc-400 mb-3 flex justify-between">
                    <span>SEMrush: Organic Keywords Surge</span>
                    <span className="text-emerald-400 font-bold">Top 3 & Top 10 Dominance</span>
                  </div>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('organic keywords semruch befor.jpg'))}
                    className="relative h-64 w-full rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('organic keywords semruch befor.jpg')} alt="SEMrush Keywords" className="w-full h-full object-contain" />
                  </div>
                </div>

                {/* Mangools */}
                <div className="p-6 rounded-3xl bg-[#0a0a0c] border border-zinc-900">
                  <div className="text-xs font-mono text-zinc-400 mb-3 flex justify-between">
                    <span>Mangools: +374.6% Backlinks Growth</span>
                    <span className="text-emerald-400 font-bold">503 Active</span>
                  </div>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('mangools backlinks-bait.jpg'))}
                    className="relative h-64 w-full rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('mangools backlinks-bait.jpg')} alt="Backlinks" className="w-full h-full object-contain" />
                  </div>
                </div>

              </div>
            </section>

            {/* 4. VERIFIED #1 POSITIONS IN SERP (الرانك والأورجانيك) */}
            <section className="space-y-6">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#ff2e7e] mb-1">
                  Phase 04 / SERP Domination
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Verified Rank #1 Across Commercial UAE Keywords
                </h3>
              </div>

              {/* Real Screenshots of Rank 1 Tables */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-3xl bg-[#0a0a0c] border border-zinc-900">
                  <div className="text-xs font-mono text-zinc-400 mb-3 flex justify-between">
                    <span>Rank Tracker: Arabic Keywords #1 Dominance</span>
                    <span className="text-emerald-400 font-bold">Verified #1</span>
                  </div>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('rank1.jpg'))}
                    className="relative h-72 w-full rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('rank1.jpg')} alt="Rank 1 Table 1" className="w-full h-full object-contain" />
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-[#0a0a0c] border border-zinc-900">
                  <div className="text-xs font-mono text-zinc-400 mb-3 flex justify-between">
                    <span>Rank Tracker: English Commercial Terms #1</span>
                    <span className="text-emerald-400 font-bold">Verified #1</span>
                  </div>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('Rank1 (2).jpg'))}
                    className="relative h-72 w-full rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('Rank1 (2).jpg')} alt="Rank 1 Table 2" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>

              {/* SERP Search Live Proofs (Google & Bing) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="p-5 rounded-2xl bg-[#0a0a0c] border border-zinc-900">
                  <div className="text-xs font-mono text-zinc-400 mb-2">Google.ae: #1 Tent Rental Dubai</div>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('tent-rental-company-in-dubai.jpg'))}
                    className="relative h-56 w-full rounded-xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('tent-rental-company-in-dubai.jpg')} alt="Google Search 1" className="w-full h-full object-contain" />
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#0a0a0c] border border-zinc-900">
                  <div className="text-xs font-mono text-zinc-400 mb-2">Google.ae: #1 Tent Suppliers UAE</div>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('Tent-Rental-Company-in-UAE.jpg'))}
                    className="relative h-56 w-full rounded-xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('Tent-Rental-Company-in-UAE.jpg')} alt="Google Search 2" className="w-full h-full object-contain" />
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#0a0a0c] border border-zinc-900">
                  <div className="text-xs font-mono text-zinc-400 mb-2">Microsoft Bing: Full Sitelinks #1</div>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('tent-rental-bing.jpg'))}
                    className="relative h-56 w-full rounded-xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('tent-rental-bing.jpg')} alt="Bing Search" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            </section>

            {/* 5. GENERATIVE ENGINE OPTIMIZATION (AI OVERVIEWS) */}
            <section className="space-y-6">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#ff2e7e] mb-1">
                  Phase 05 / Generative AI Capture
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Direct Citations in Google AI Overviews & Answer Engines
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* AI 1: Pyramid Tent */}
                <div className="p-6 rounded-3xl bg-[#0a0a0c] border border-zinc-900">
                  <div className="flex justify-between text-xs font-mono text-[#ff2e7e] mb-2">
                    <span>Google AI Overview (GEO)</span>
                    <span className="text-emerald-400 font-bold">Featured Source #1</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">Query: &quot;الخيمة الهرمية في دبي&quot;</h4>
                  <p className="text-xs text-zinc-400 mb-4">
                    Google AI extracts brand specifications as the primary reference model with direct image links.
                  </p>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('الخيمة-الهرمية-في-دبي.jpg'))}
                    className="relative h-64 w-full rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('الخيمة-الهرمية-في-دبي.jpg')} alt="AI Pyramid" className="w-full h-full object-contain" />
                  </div>
                </div>

                {/* AI 2: Best Tents UAE */}
                <div className="p-6 rounded-3xl bg-[#0a0a0c] border border-zinc-900">
                  <div className="flex justify-between text-xs font-mono text-[#ff2e7e] mb-2">
                    <span>Conversational Authority</span>
                    <span className="text-emerald-400 font-bold">Brand Recommendation</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">Query: &quot;افضل خيام في الامارات؟&quot;</h4>
                  <p className="text-xs text-zinc-400 mb-4">
                    Ranked at the top of conversational answers, validating 26+ years of heritage and industry authority.
                  </p>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('افضل-خيام-في-الإمارات.jpg'))}
                    className="relative h-64 w-full rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('افضل-خيام-في-الإمارات.jpg')} alt="AI Best" className="w-full h-full object-contain" />
                  </div>
                </div>

                {/* AI 3: Tent Rental Dubai in English */}
                <div className="p-6 rounded-3xl bg-[#0a0a0c] border border-zinc-900">
                  <div className="flex justify-between text-xs font-mono text-[#ff2e7e] mb-2">
                    <span>English Conversational Search</span>
                    <span className="text-emerald-400 font-bold">Definitive Source</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">Query: &quot;Tent Rental in Dubai&quot;</h4>
                  <p className="text-xs text-zinc-400 mb-4">
                    Structured entity schema forced Google generative model to cite client specifications directly.
                  </p>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('tent rental in dubai google ai.jpg'))}
                    className="relative h-64 w-full rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('tent rental in dubai google ai.jpg')} alt="AI English" className="w-full h-full object-contain" />
                  </div>
                </div>

                {/* AI 4: Organic Exhibition Tents */}
                <div className="p-6 rounded-3xl bg-[#0a0a0c] border border-zinc-900">
                  <div className="flex justify-between text-xs font-mono text-[#ff2e7e] mb-2">
                    <span>Commercial Organic Dominance</span>
                    <span className="text-emerald-400 font-bold">Multi-Snippet Rank</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">Query: &quot;خيام معارض اورجانيك&quot;</h4>
                  <p className="text-xs text-zinc-400 mb-4">
                    Capturing image carousels, maps, and organic results simultaneously above the fold.
                  </p>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('خيام معارض اورجانيك.jpg'))}
                    className="relative h-64 w-full rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('خيام معارض اورجانيك.jpg')} alt="Organic Exhibition" className="w-full h-full object-contain" />
                  </div>
                </div>

              </div>
            </section>

          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: TENTS RENTAL KSA                                   */}
        {/* ========================================================= */}
        {activeTab === 'ksa' && (
          <div className="space-y-12">
            <div className="p-8 rounded-3xl bg-[#0a0a0c] border border-zinc-900">
              <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider">
                Regional Market Expansion
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">
                Tents Rental KSA (GCC Regional Scaling)
              </h2>
              <p className="text-xs md:text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
                Expanding search authority into the Saudi Arabian event and industrial market. Localized hreflang configurations and cluster architecture for Riyadh and Jeddah commercial queries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#0a0a0c] border border-zinc-900">
                <div className="text-4xl font-mono font-bold text-amber-400">+1,845%</div>
                <div className="text-xs text-zinc-400 font-mono mt-1">Performance Index Growth</div>
                <p className="text-xs text-zinc-500 mt-3 leading-relaxed">
                  Surged search performance index across Saudi Arabia from baseline through programmatic category targeting.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0a0a0c] border border-zinc-900">
                <div className="text-4xl font-mono font-bold text-emerald-400">+940%</div>
                <div className="text-xs text-zinc-400 font-mono mt-1">Visibility Index Surge</div>
                <p className="text-xs text-zinc-500 mt-3 leading-relaxed">
                  Dominating regional impressions across corporate festival, exhibition, and industrial structure terms in KSA.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#0a0a0c] border border-zinc-900">
              <div className="text-xs font-mono text-zinc-400 mb-3">
                KSA Performance Index and Visibility Chart
              </div>
              <div
                onClick={() => setLightboxImg(getImgSrc('performance (last period) (ksa).jpg'))}
                className="relative h-80 w-full rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
              >
                <img src={getImgSrc('performance (last period) (ksa).jpg')} alt="KSA Performance" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: LLOYDS BRITISH EGYPT                               */}
        {/* ========================================================= */}
        {activeTab === 'lloyds' && (
          <div className="space-y-12">
            <div className="p-8 rounded-3xl bg-[#0a0a0c] border border-zinc-900">
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                Industrial Engineering Safety
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">
                Lloyds British Egypt
              </h2>
              <p className="text-xs md:text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
                Specialized lifting equipment inspection, testing, and engineering safety services in Egypt and North Africa. Executed technical audit and local map pack optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#0a0a0c] border border-zinc-900">
                <div className="text-xl font-bold text-white">Full Technical Audit</div>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  Resolved indexing hurdles, eliminated broken internal links, and optimized core service URL hierarchies.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0a0a0c] border border-zinc-900">
                <div className="text-xl font-bold text-white">Local Pack Visibility</div>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  Structured Google Business Profile entities and localized geo-landing pages across industrial zones.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0a0a0c] border border-zinc-900">
                <div className="text-xl font-bold text-white">B2B Lead Funnel</div>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  Captured high-ticket corporate inquiries for statutory crane inspection and safety training certifications.
                </p>
              </div>
            </div>

            {/* General Audit Screenshot */}
            <div className="p-6 rounded-3xl bg-[#0a0a0c] border border-zinc-900">
              <div className="text-xs font-mono text-zinc-400 mb-3">Technical Site Audit Overview</div>
              <div
                onClick={() => setLightboxImg(getImgSrc('Website audit.jpg'))}
                className="relative h-80 w-full rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
              >
                <img src={getImgSrc('Website audit.jpg')} alt="Audit Screenshot" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        )}

      </main>

      {/* LIGHTBOX MODAL */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md cursor-zoom-out"
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img src={lightboxImg} alt="Enlarged" className="max-w-full max-h-full object-contain" />
          </div>
          <span className="absolute top-6 right-8 text-zinc-400 font-mono text-sm">Click anywhere to close ✕</span>
        </div>
      )}

      <Footer />
    </div>
  );
}