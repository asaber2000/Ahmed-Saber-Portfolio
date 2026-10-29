'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface KeywordRank {
  keyword: string;
  lang: 'EN' | 'AR';
  rank: string;
  volume: string;
  intent: string;
}

const topRankings: KeywordRank[] = [
  { keyword: 'خيام للإيجار في دبي', lang: 'AR', rank: '#1', volume: 'High Intent', intent: 'Commercial' },
  { keyword: 'tents suppliers in uae', lang: 'EN', rank: '#1', volume: 'High Intent', intent: 'Commercial' },
  { keyword: 'الخيمة الهرمية', lang: 'AR', rank: '#1', volume: 'Specific Product', intent: 'Transactional' },
  { keyword: 'tent companies in uae', lang: 'EN', rank: '#1', volume: 'Competitive', intent: 'Commercial' },
  { keyword: 'خيام المناسبات', lang: 'AR', rank: '#1', volume: 'High Intent', intent: 'Commercial' },
  { keyword: 'double decker vip tent', lang: 'EN', rank: '#1', volume: 'High Ticket', intent: 'B2B Luxury' },
  { keyword: 'aircraft hangar tent', lang: 'EN', rank: '#1', volume: 'Niche B2B', intent: 'Enterprise' },
  { keyword: 'اسعار خيام المناسبات', lang: 'AR', rank: '#1', volume: 'Conversion', intent: 'Transactional' },
];

export default function EvidenceShowcase() {
  const [activeTab, setActiveTab] = useState<'rankings' | 'ai' | 'analytics'>('rankings');

  return (
    <section id="proof" className="py-20 border-t border-zinc-800 bg-[#0a0a0c] text-zinc-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">
            Documented Track Record
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Live SEO, GEO & Performance Evidence
          </h2>
          <p className="text-zinc-400 mt-2 text-sm max-w-2xl">
            Real production metrics, SERP dominance, and generative AI search indexing achieved across the UAE and GCC.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-3 mb-10 border-b border-zinc-800 pb-4">
          <button
            onClick={() => setActiveTab('rankings')}
            className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
              activeTab === 'rankings'
                ? 'bg-amber-400 text-black font-bold'
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            #1 Commercial Rankings
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
              activeTab === 'ai'
                ? 'bg-amber-400 text-black font-bold'
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            Google AI Overviews (GEO)
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
              activeTab === 'analytics'
                ? 'bg-amber-400 text-black font-bold'
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            GSC & GA4 Metrics (+400%)
          </button>
        </div>

        {/* TAB 1: Live Rankings Table */}
        {activeTab === 'rankings' && (
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 overflow-hidden">
            <div className="p-4 border-b border-zinc-800 flex justify-between items-center text-xs text-zinc-400 font-mono">
              <span>Primary Commercial Search Queries (Google.ae)</span>
              <span className="text-emerald-400">● 100% Verified #1 Positions</span>
            </div>
            <div className="divide-y divide-zinc-800/60 font-mono text-xs">
              {topRankings.map((item, idx) => (
                <div key={idx} className="p-4 flex items-center justify-between hover:bg-zinc-900/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-400">
                      {item.lang}
                    </span>
                    <span className="text-sm font-sans font-medium text-white">{item.keyword}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hidden md:inline-block text-zinc-500 text-[11px]">{item.intent}</span>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">
                      {item.rank}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: Generative Engine Optimization (AI Overviews) */}
        {activeTab === 'ai' && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5">
              <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-3">
                <span>Google AI Overview Citation</span>
                <span className="text-emerald-400">Primary Source</span>
              </div>
              <h4 className="text-base font-semibold text-white mb-2">Query: &quot;الخيمة الهرمية في دبي&quot;</h4>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Google&apos;s generative engine pulls brand specifications directly into the AI snapshot as the definitive reference structure.
              </p>
              <div className="relative h-56 w-full rounded-lg overflow-hidden border border-zinc-800">
                <Image
                  src="/evidence/ai-overview-pyramid.jpg"
                  alt="AI Overview Citation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5">
              <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-3">
                <span>Conversational Authority</span>
                <span className="text-emerald-400">Direct Brand Referral</span>
              </div>
              <h4 className="text-base font-semibold text-white mb-2">Query: &quot;افضل خيام في الامارات؟&quot;</h4>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Secured full entity citation in the top AI snippet, validating 26+ years of heritage and manufacturing authority.
              </p>
              <div className="relative h-56 w-full rounded-lg overflow-hidden border border-zinc-800">
                <Image
                  src="/evidence/ai-overview-best.jpg"
                  alt="Brand Authority AI"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Analytics & GSC Scale */}
        {activeTab === 'analytics' && (
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5">
              <div className="text-2xl font-bold font-mono text-white mb-1">+108%</div>
              <div className="text-xs font-mono text-zinc-400 mb-4">GSC Impressions Growth (225K vs 108K)</div>
              <div className="relative h-44 w-full rounded-lg overflow-hidden border border-zinc-800">
                <Image
                  src="/evidence/gsc-growth.jpg"
                  alt="GSC Performance Comparison"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5">
              <div className="text-2xl font-bold font-mono text-white mb-1">+239%</div>
              <div className="text-xs font-mono text-zinc-400 mb-4">GA4 Active Users (9.3K vs 2.7K)</div>
              <div className="relative h-44 w-full rounded-lg overflow-hidden border border-zinc-800">
                <Image
                  src="/evidence/ga4-traffic.jpg"
                  alt="GA4 Active Users Surge"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5">
              <div className="text-2xl font-bold font-mono text-emerald-400 mb-1">Grade D → B</div>
              <div className="text-xs font-mono text-zinc-400 mb-4">HTTP Security & Header Hardening</div>
              <div className="relative h-44 w-full rounded-lg overflow-hidden border border-zinc-800">
                <Image
                  src="/evidence/headers-after.png"
                  alt="Security Headers Optimization"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}