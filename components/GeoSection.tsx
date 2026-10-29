import React from 'react';
import Image from 'next/image';

export default function GeoSection() {
  return (
    <section id="geo" className="py-20 border-t border-zinc-800 bg-[#090a0f]">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="mb-12">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">Generative Engine Optimization</div>
          <h2 className="text-3xl font-bold text-white">GEO, AEO & AI Search Visibility</h2>
          <p className="text-zinc-400 text-sm mt-2 max-w-2xl">
            Optimizing entity knowledge graphs to ensure direct citations in ChatGPT, Perplexity, and Google AI Overviews.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-3">
              <span>Google AI Snapshot Citation</span>
              <span className="text-emerald-400 font-bold">#1 Featured</span>
            </div>
            <h3 className="text-base font-semibold text-white mb-2">Query: &quot;الخيمة الهرمية في دبي&quot;</h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              Google&apos;s generative AI directly cites our client as the primary referenced product source with image snippets.
            </p>
            <div className="relative h-64 w-full rounded-xl overflow-hidden border border-zinc-800">
              <Image src="/evidence/ai-overview-pyramid.jpg" alt="AI Overview Pyramid Tents" fill className="object-cover" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-3">
              <span>Conversational Authority Recommendation</span>
              <span className="text-emerald-400 font-bold">Direct Mention</span>
            </div>
            <h3 className="text-base font-semibold text-white mb-2">Query: &quot;افضل خيام في الامارات؟&quot;</h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              Ranked our entity at the top of AI answers, referencing 26+ years of manufacturing heritage and market leadership.
            </p>
            <div className="relative h-64 w-full rounded-xl overflow-hidden border border-zinc-800">
              <Image src="/evidence/ai-overview-best.jpg" alt="AI Overview Best Tents" fill className="object-cover" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}