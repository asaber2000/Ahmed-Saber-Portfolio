import React from 'react';
import Image from 'next/image';

const verifiedKeywords = [
  { keyword: 'خيام للإيجار في دبي', lang: 'AR', rank: '#1', intent: 'Commercial' },
  { keyword: 'tents suppliers in uae', lang: 'EN', rank: '#1', intent: 'Commercial' },
  { keyword: 'الخيمة الهرمية', lang: 'AR', rank: '#1', intent: 'Transactional' },
  { keyword: 'tent companies in uae', lang: 'EN', rank: '#1', intent: 'Commercial' },
  { keyword: 'double decker vip tent', lang: 'EN', rank: '#1', intent: 'B2B Luxury' },
  { keyword: 'aircraft hangar tent', lang: 'EN', rank: '#1', intent: 'Enterprise' },
  { keyword: 'خيام المناسبات', lang: 'AR', rank: '#1', intent: 'Commercial' },
  { keyword: 'اسعار خيام المناسبات', lang: 'AR', rank: '#1', intent: 'Transactional' },
];

export default function SeoSection() {
  return (
    <section id="seo" className="py-20 border-t border-zinc-800 bg-zinc-950/60">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="mb-12">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">Technical & Organic Search</div>
          <h2 className="text-3xl font-bold text-white">SEO Track Record & Live #1 Rankings</h2>
          <p className="text-zinc-400 text-sm mt-2 max-w-2xl">
            Enterprise B2B growth achieved at Bait Al Nokhada Tents Factory (UAE) and Lloyds British Egypt.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40">
            <div className="text-3xl font-bold font-mono text-amber-400">+108%</div>
            <div className="text-xs text-zinc-400 mt-1 uppercase font-mono">GSC Impressions (225K)</div>
          </div>
          <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40">
            <div className="text-3xl font-bold font-mono text-emerald-400">+239%</div>
            <div className="text-xs text-zinc-400 mt-1 uppercase font-mono">GA4 Active Users (9.3K)</div>
          </div>
          <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40">
            <div className="text-3xl font-bold font-mono text-white">#1 Top</div>
            <div className="text-xs text-zinc-400 mt-1 uppercase font-mono">Commercial UAE Rankings</div>
          </div>
          <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40">
            <div className="text-3xl font-bold font-mono text-white">+1845%</div>
            <div className="text-xs text-zinc-400 mt-1 uppercase font-mono">KSA Performance Index</div>
          </div>
        </div>

        {/* Rankings Table */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 overflow-hidden mb-10">
          <div className="p-4 border-b border-zinc-800 flex justify-between items-center text-xs font-mono text-zinc-400">
            <span>Verified Primary Search Queries (Google UAE)</span>
            <span className="text-emerald-400">● Live Position #1</span>
          </div>
          <div className="divide-y divide-zinc-800/60 text-xs font-mono">
            {verifiedKeywords.map((item, idx) => (
              <div key={idx} className="p-4 flex items-center justify-between hover:bg-zinc-800/20 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-400">{item.lang}</span>
                  <span className="font-sans font-medium text-sm text-white">{item.keyword}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="hidden sm:inline text-zinc-500 text-[11px]">{item.intent}</span>
                  <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">
                    {item.rank}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Evidence Images */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5">
            <div className="text-xs font-mono text-zinc-400 mb-3">Google Search Console: 6 Months Comparison</div>
            <div className="relative h-60 w-full rounded-xl overflow-hidden border border-zinc-800">
              <Image src="/evidence/gsc-growth.jpg" alt="GSC Proof" fill className="object-cover" />
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5">
            <div className="text-xs font-mono text-zinc-400 mb-3">Google Analytics 4: Active Users Growth</div>
            <div className="relative h-60 w-full rounded-xl overflow-hidden border border-zinc-800">
              <Image src="/evidence/ga4-traffic.jpg" alt="GA4 Proof" fill className="object-cover" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}