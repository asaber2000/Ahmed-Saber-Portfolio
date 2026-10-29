import React from 'react';
import Image from 'next/image';

export default function CloudSection() {
  return (
    <section id="cloud" className="py-20 border-t border-zinc-800 bg-[#090a0f]">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="mb-12">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">Infrastructure & DevOps</div>
          <h2 className="text-3xl font-bold text-white">Cloud Architecture & Automation</h2>
          <p className="text-zinc-400 text-sm mt-2 max-w-2xl">
            Managing AWS deployments, Python indexing engines, and HTTP server security hardening.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <div className="text-xs font-mono text-amber-400 mb-3 uppercase">AWS Cloud Operations</div>
            <h3 className="text-lg font-bold text-white mb-3">Decoupled Systems Architecture</h3>
            <ul className="space-y-3 text-xs text-zinc-300 font-mono">
              <li className="flex items-center gap-2">
                <span className="text-amber-400">▹</span> **AWS EC2:** Application hosting, web server configs, and reverse proxying.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">▹</span> **Amazon RDS:** Relational database isolation and migration.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">▹</span> **Amazon S3 & CloudFront:** Static asset storage, CDN caching, and edge SSL.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <div className="text-xs font-mono text-amber-400 mb-3 uppercase">Google Cloud & Python</div>
            <h3 className="text-lg font-bold text-white mb-3">Automated Indexing Engine</h3>
            <ul className="space-y-3 text-xs text-zinc-300 font-mono">
              <li className="flex items-center gap-2">
                <span className="text-amber-400">▹</span> **Google Indexing API:** Dispatches URLs instantly, cutting wait time from 10 days to &lt;24h.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">▹</span> **Search Console API:** Automated crawl anomaly monitoring directly to Google Sheets.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">▹</span> **LLM Pipeline:** Structured programmatic generation of E-E-A-T FAQ content.
              </li>
            </ul>
          </div>

        </div>

        {/* Security Headers Proof */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <h4 className="text-base font-semibold text-white">HTTP Security Headers Optimization</h4>
            <span className="px-3 py-1 rounded bg-emerald-500/10 text-emerald-400 font-mono text-xs border border-emerald-500/20">
              Grade D → B Achieved
            </span>
          </div>
          <div className="relative h-64 w-full rounded-xl overflow-hidden border border-zinc-800">
            <Image src="/evidence/headers-after.png" alt="Security Headers Grade B" fill className="object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
}